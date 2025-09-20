import type { ReactNode } from "react";
import HeroBlock from "../blocks/hero-block";

interface PageBlockProps {
  data: any;
}

const pageBlockComponents: Record<string, (props: { data: any }) => ReactNode> =
  {
    hero: HeroBlock,
  };

export default function PageBlock({ data }: PageBlockProps): ReactNode {
  const Component = pageBlockComponents[data.blockType];

  if (!Component) {
    console.warn(`Block type "${data.blockType}" not found`);
    return null;
  }

  return <Component data={data} />;
}
