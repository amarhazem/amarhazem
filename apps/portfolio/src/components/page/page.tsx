import Block from "@/components/page/page-block";
import RefreshRouteOnSave from "@/components/page/refresh-route-on-save";
import type { Page } from "@/payload-types";
import env from "@/utils/env";
import { PayloadAdminBar } from "@payloadcms/admin-bar";
import type { ReactNode } from "react";

interface PageProps {
  pageData: Page;
}

export default function Page({ pageData }: PageProps): ReactNode {
  return (
    <>
      <RefreshRouteOnSave />
      <PayloadAdminBar
        cmsURL={env.APP_URL}
        id={pageData.id.toString()}
        style={{ position: "relative", zIndex: 1 }}
      />
      {pageData.sections.map((section: any, index: number) => (
        <Block data={section} key={`${section.blockType}-${index}`} />
      ))}
    </>
  );
}
