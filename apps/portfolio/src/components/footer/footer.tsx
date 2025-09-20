import type { Footer as FooterType } from "@/payload-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import type { ReactNode } from "react";
import FooterBlock from "./footer-block";

interface FooterProps {
  footerData?: FooterType;
}

export default function Footer({ footerData }: FooterProps) {
  if (!footerData?.blocks) {
    return null;
  }

  return (
    <AppBar component="footer" sx={{ position: "relative" }}>
      <Toolbar sx={{ alignItems: "stretch" }}>
        {footerData.blocks.map(
          (block: any, index: number): ReactNode => (
            <FooterBlock data={block} key={`${block.blockType}-${index}`} />
          ),
        )}
      </Toolbar>
    </AppBar>
  );
}
