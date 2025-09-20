"use client";

import AppsIcon from "@mui/icons-material/Apps";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { type ReactNode } from "react";

interface DesktopAppsMenuProps {
  children: ReactNode;
}

export default function DesktopAppsMenu({
  children,
}: DesktopAppsMenuProps): ReactNode {
  return (
    <PopupState popupId="apps-popup-menu" variant="popover">
      {(popupState: any): ReactNode => (
        <>
          <Button
            aria-label="Open apps"
            color="inherit"
            sx={{ display: { xs: "none", md: "flex" } }}
            {...bindTrigger(popupState)}
          >
            <AppsIcon />
          </Button>
          <Menu
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            {...bindMenu(popupState)}
          >
            {children}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
