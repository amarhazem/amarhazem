"use client";

import type { Auth, User } from "@/payload-types";
import { useLanguageStore } from "@/stores/language-store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DevicesIcon from "@mui/icons-material/Devices";
import LightModeIcon from "@mui/icons-material/LightMode";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useColorScheme } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import type { ReactNode } from "react";

interface DesktopAccountMenuProps {
  auth: Auth;
}

export default function DesktopAccountMenu({
  auth,
}: DesktopAccountMenuProps): ReactNode {
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
            <MenuItem sx={{ display: "flex", gap: "1rem" }}>
              <ToggleButtonGroup
                aria-label="theme mode"
                exclusive
                onChange={switchThemeMode}
                size="small"
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
              <ListItemText primary="Theme Mode" />
            </MenuItem>
            <MenuItem sx={{ display: "flex", gap: "1rem" }}>
              <ToggleButtonGroup
                aria-label="language"
                exclusive
                onChange={switchLanguage}
                size="small"
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
              <ListItemText primary="Language" />
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}
