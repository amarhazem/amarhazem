"use client";

import type { Auth, User } from "@/payload-types";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { type ReactNode, useState } from "react";

interface MobileAccountMenuProps {
  auth: Auth;
}

export default function MobileAccountMenu({
  auth,
}: MobileAccountMenuProps): ReactNode {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const logout = async (): Promise<void> => {
    await fetch("/api/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <Button
        aria-label="Open account"
        color="inherit"
        onClick={toggleMenu}
        sx={{ display: { md: "none" } }}
      >
        <Avatar sx={{ height: 32, width: 32 }}>
          {auth.user ? (
            (auth.user as User).email.charAt(0).toUpperCase()
          ) : (
            <AccountCircleIcon />
          )}
        </Avatar>
      </Button>
      <Drawer
        anchor="top"
        onClose={() => {
          setMenuOpen(false);
        }}
        open={menuOpen}
      >
        <Toolbar />
        <List>
          {!!auth.user && (
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/admin">
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText>Admin</ListItemText>
              </ListItemButton>
            </ListItem>
          )}
          {!!auth.user && (
            <ListItem disablePadding>
              <ListItemButton onClick={logout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText>Sign out</ListItemText>
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
}
