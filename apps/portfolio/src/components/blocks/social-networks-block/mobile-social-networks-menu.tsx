"use client";

import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { type ReactNode, useState } from "react";

interface MobileSocialNetworksMenuProps {
  children: ReactNode;
}

export default function MobileSocialNetworksMenu({
  children,
}: MobileSocialNetworksMenuProps): ReactNode {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (): void => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Button
        aria-label="Open social networks"
        color="inherit"
        onClick={toggleDrawer}
        sx={{ display: { md: "none" } }}
      >
        <ShareIcon />
      </Button>
      <Drawer
        anchor="top"
        onClose={() => {
          setDrawerOpen(false);
        }}
        open={drawerOpen}
      >
        {children}
      </Drawer>
    </>
  );
}
