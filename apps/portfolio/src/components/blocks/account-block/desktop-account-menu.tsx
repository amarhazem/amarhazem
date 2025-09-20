"use client";

import type { Auth, User } from "@/payload-types";
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

  const switchThemeMode = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newMode: any,
  ): void => {
    setMode(newMode);
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
            <MenuItem sx={{ display: "flex", gap: "1rem" }}>
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
              <ListItemText primary="Theme Mode" />
            </MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}
