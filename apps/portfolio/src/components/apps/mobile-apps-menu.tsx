"use client";

import AppsIcon from "@mui/icons-material/Apps";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { type ReactNode, useState } from "react";

interface MobileAppsMenuProps {
  children: ReactNode;
}

export default function MobileAppsMenu({
  children,
}: MobileAppsMenuProps): ReactNode {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Button
        aria-label="Open apps"
        color="inherit"
        onClick={toggleMenu}
        sx={{ display: { md: "none" } }}
      >
        <AppsIcon />
      </Button>
      <Drawer
        anchor="top"
        onClose={() => {
          setMenuOpen(false);
        }}
        open={menuOpen}
      >
        {children}
      </Drawer>
    </>
  );
}
