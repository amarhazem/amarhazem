"use client";

import type { Auth, User } from "@/payload-types";
import { useLanguageStore } from "@/stores/language-store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DevicesIcon from "@mui/icons-material/Devices";
import LightModeIcon from "@mui/icons-material/LightMode";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useColorScheme } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Toolbar from "@mui/material/Toolbar";
import { type ReactNode, useState } from "react";

interface MobileAccountMenuProps {
  auth: Auth;
}

export default function MobileAccountMenu({
  auth,
}: MobileAccountMenuProps): ReactNode {
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, setMode } = useColorScheme();
  const { language, setLanguage } = useLanguageStore();

  function switchLanguage(
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newLanguage: any,
  ): void {
    if (newLanguage) {
      setLanguage(newLanguage);
    }
  }

  function switchThemeMode(
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newMode: any,
  ): void {
    setMode(newMode);
  }

  function toggleMenu(): void {
    setMenuOpen(!menuOpen);
  }

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
          <ListItem
            sx={{ justifyContent: "center", display: "flex", gap: "1rem" }}
          >
            <ToggleButtonGroup
              aria-label="theme mode"
              exclusive
              onChange={switchThemeMode}
              value={mode}
            >
              <ToggleButton aria-label="system" value="system">
                <DevicesIcon />
              </ToggleButton>
              <ToggleButton aria-label="light" value="light">
                <LightModeIcon />
              </ToggleButton>
              <ToggleButton aria-label="dark" value="dark">
                <DarkModeIcon />
              </ToggleButton>
            </ToggleButtonGroup>
            <ListItemText primary="Theme Mode" sx={{ flexGrow: 0 }} />
          </ListItem>
          <ListItem
            sx={{ justifyContent: "center", display: "flex", gap: "1rem" }}
          >
            <ToggleButtonGroup
              aria-label="theme mode"
              exclusive
              onChange={switchLanguage}
              value={language}
            >
              <ToggleButton aria-label="en" value="en">
                <SvgIcon viewBox="0 0 24 24">
                  <text
                    dominantBaseline="central"
                    fill="currentColor"
                    fontFamily="inherit"
                    fontSize="0.75em"
                    fontWeight={700}
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                  >
                    EN
                  </text>
                </SvgIcon>
              </ToggleButton>
              <ToggleButton aria-label="fr" value="fr">
                <SvgIcon viewBox="0 0 24 24">
                  <text
                    dominantBaseline="central"
                    fill="currentColor"
                    fontFamily="inherit"
                    fontSize="0.75em"
                    fontWeight={700}
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                  >
                    FR
                  </text>
                </SvgIcon>
              </ToggleButton>
              <ToggleButton aria-label="ja" value="ja">
                <SvgIcon viewBox="0 0 24 24">
                  <text
                    dominantBaseline="central"
                    fill="currentColor"
                    fontFamily="inherit"
                    fontSize="0.75em"
                    fontWeight={700}
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                  >
                    JA
                  </text>
                </SvgIcon>
              </ToggleButton>
            </ToggleButtonGroup>
            <ListItemText primary="Language" sx={{ flexGrow: 0 }} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
