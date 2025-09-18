import Block from "@/components/blocks/block";
import { type Page } from "@/payload-types";
import { type ReactNode } from "react";

interface PageRendererProps {
  pageData: Page;
}

export default function PageRenderer({
  pageData,
}: PageRendererProps): ReactNode {
  return (
    <>
      {pageData.sections.map((section: any, index: number) => (
        <Block data={section} key={`${section.blockType}-${index}`} />
      ))}
    </>
  );
}
