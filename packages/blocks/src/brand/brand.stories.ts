import type { Meta, StoryObj } from "@storybook/react";
import BrandBlock from "./brand.component";

const meta: Meta<typeof BrandBlock> = {
  component: BrandBlock,
  parameters: {
    layout: "centered",
  },
  title: "Blocks/Brand",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      appName: "Mon App",
      logo: null,
    },
  },
};
