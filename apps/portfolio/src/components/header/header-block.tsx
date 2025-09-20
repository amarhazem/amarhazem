import type { ReactNode } from "react";
import AccountBlock from "../blocks/account-block";
import AppsBlock from "../blocks/apps-block";
import BrandBlock from "../blocks/brand-block";
import SocialNetworksBlock from "../blocks/social-networks-block";
import SpacerBlock from "../blocks/spacer-block";

interface HeaderBlockProps {
  data: any;
}

const headerBlockComponents: Record<
  string,
  (props: { data: any }) => ReactNode
> = {
  account: AccountBlock,
  apps: AppsBlock,
  brand: BrandBlock,
  "social-networks": SocialNetworksBlock,
  spacer: SpacerBlock,
};

export default function HeaderBlock({ data }: HeaderBlockProps): ReactNode {
  const Component = headerBlockComponents[data.blockType];

  if (!Component) {
    console.warn(`Block type "${data.blockType}" not found`);
    return null;
  }

  return <Component data={data} />;
}
