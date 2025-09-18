import PageRenderer from "@/components/page-renderer";
import { getPageBySlug } from "@/data/pages";
import payload from "@/utils/payload";
import { notFound } from "next/navigation";
import { type PaginatedDocs } from "payload";
import { type ReactNode } from "react";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const pageData: PaginatedDocs<{ id: number; slug?: string | null }> =
    await payload.find({
      collection: "pages",
      select: {
        slug: true,
      },
    });

  return pageData.docs
    .filter((doc: { slug?: string | null }): boolean => doc.slug !== "home")
    .map((doc: { slug?: string | null }): { slug: string } => ({
      slug: doc.slug ?? "",
    }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps): Promise<ReactNode> {
  const { slug } = await params;
  const actualSlug = slug === "" ? "home" : slug;
  const pageData = await getPageBySlug(actualSlug);

  if (!pageData) {
    notFound();
  }

  return <PageRenderer pageData={pageData} />;
}
