import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Skeleton from "@mui/material/Skeleton";
import Toolbar from "@mui/material/Toolbar";
import { type ReactNode, Suspense } from "react";
import DesktopApps from "./desktop-apps";
import DesktopAppsMenu from "./desktop-apps-menu";
import MobileApps from "./mobile-apps";
import MobileAppsMenu from "./mobile-apps-menu";

export default function Apps(): ReactNode {
  return (
    <>
      <DesktopAppsMenu>
        <Suspense
          fallback={[...Array(3)].map(
            (_: unknown, index: number): ReactNode => (
              <MenuItem key={index}>
                <ListItemIcon>
                  <Skeleton height={24} variant="circular" width={24} />
                </ListItemIcon>
                <ListItemText>
                  <Skeleton height={24} variant="text" width={100} />
                </ListItemText>
              </MenuItem>
            ),
          )}
        >
          <DesktopApps />
        </Suspense>
      </DesktopAppsMenu>
      <MobileAppsMenu>
        <Toolbar />
        <List>
          <Suspense
            fallback={[...Array(3)].map(
              (_: unknown, index: number): ReactNode => (
                <ListItem disablePadding key={index}>
                  <ListItemIcon>
                    <Skeleton height={24} variant="circular" width={24} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Skeleton height={24} variant="text" width={100} />
                    }
                  />
                </ListItem>
              ),
            )}
          >
            <MobileApps />
          </Suspense>
        </List>
      </MobileAppsMenu>
    </>
  );
}
