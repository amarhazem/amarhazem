import type { ReactNode } from "react";
import BrandBlock from "../blocks/brand-block";
import LicenseBlock from "../blocks/license-block";
import SpacerBlock from "../blocks/spacer-block";
import VersionBlock from "../blocks/version-block";

interface FooterBlockProps {
  data: any;
}

const footerBlockComponents: Record<
  string,
  (props: { data: any }) => ReactNode
> = {
  brand: BrandBlock,
  license: LicenseBlock,
  spacer: SpacerBlock,
  version: VersionBlock,
};

export default function FooterBlock({ data }: FooterBlockProps): ReactNode {
  const Component = footerBlockComponents[data.blockType];

  if (!Component) {
    console.warn(`Block type "${data.blockType}" not found`);
    return null;
  }

  return <Component data={data} />;
}
