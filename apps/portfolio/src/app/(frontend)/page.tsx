import PageRenderer from "@/components/page/page";
import { getPageBySlug } from "@/data/pages";
import { notFound } from "next/navigation";
import { type ReactNode } from "react";

export default async function Page(): Promise<ReactNode> {
  const pageData = await getPageBySlug("home");

  if (!pageData) {
    notFound();
  }

  return <PageRenderer pageData={pageData} />;
}
