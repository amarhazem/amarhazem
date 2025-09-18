import { type ReactNode } from "react";
import HeroBlock from "./hero-block";

interface BlockProps {
  data: any;
}

const blockComponents: Record<string, (props: { data: any }) => ReactNode> = {
  hero: HeroBlock,
};

export default function Block({ data }: BlockProps): ReactNode {
  const Component = blockComponents[data.blockType];

  if (!Component) {
    console.warn(`Block type "${data.blockType}" not found`);
    return null;
  }

  return <Component data={data} />;
}
