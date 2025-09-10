"use client";

import type { Auth, User } from "@/payload-types";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import Link from "next/link";
import type { ReactNode } from "react";

interface DesktopAccountMenuProps {
  auth: Auth;
}

export default function DesktopAccountMenu({
  auth,
}: DesktopAccountMenuProps): ReactNode {
  const logout = async (): Promise<void> => {
    await fetch("/api/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <PopupState popupId="account-popup-menu" variant="popover">
      {(popupState: any): ReactNode => (
        <>
          <Button
            aria-label="Open account"
            color="inherit"
            sx={{ display: { xs: "none", md: "flex" } }}
            {...bindTrigger(popupState)}
          >
            <Avatar sx={{ height: 32, width: 32 }}>
              {auth.user ? (
                (auth.user as User).email.charAt(0).toUpperCase()
              ) : (
                <AccountCircleIcon />
              )}
            </Avatar>
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
            {!!auth.user && (
              <MenuItem component={Link} href="/admin">
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText>Admin</ListItemText>
              </MenuItem>
            )}
            {!!auth.user && (
              <MenuItem onClick={logout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText>Sign out</ListItemText>
              </MenuItem>
            )}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
