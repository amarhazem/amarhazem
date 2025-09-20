import type { Header as HeaderType } from "@/payload-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import type { ReactNode } from "react";
import HeaderBlock from "./header-block";

interface HeaderProps {
  headerData?: HeaderType;
}

export default function Header({ headerData }: HeaderProps) {
  if (!headerData?.blocks) {
    return null;
  }

  return (
    <AppBar sx={{ position: "sticky" }}>
      <Toolbar sx={{ alignItems: "stretch" }}>
        {headerData.blocks.map(
          (block: any, index: number): ReactNode => (
            <HeaderBlock data={block} key={`${block.blockType}-${index}`} />
          ),
        )}
      </Toolbar>
    </AppBar>
  );
}
