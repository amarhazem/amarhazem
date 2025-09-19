import Block from "@/components/blocks/block";
import { type Page } from "@/payload-types";
import { env } from "@/utils/env";
import { PayloadAdminBar } from "@payloadcms/admin-bar";
import { type ReactNode } from "react";

interface PageRendererProps {
  pageData: Page;
}

export default function PageRenderer({
  pageData,
}: PageRendererProps): ReactNode {
  return (
    <>
      <PayloadAdminBar
        cmsURL={env.CMS_URL}
        id={pageData.id.toString()}
        style={{ position: "relative", zIndex: 1 }}
      />
      {pageData.sections.map((section: any, index: number) => (
        <Block data={section} key={`${section.blockType}-${index}`} />
      ))}
    </>
  );
}
