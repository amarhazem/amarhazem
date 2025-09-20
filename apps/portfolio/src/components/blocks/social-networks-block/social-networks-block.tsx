import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
import Toolbar from "@mui/material/Toolbar";
import { type ReactNode, Suspense } from "react";
import DesktopSocialNetworks from "./desktop-social-networks";
import MobileSocialNetworks from "./mobile-social-networks";
import MobileSocialNetworksMenu from "./mobile-social-networks-menu";

export default function SocialNetworksBlock(): ReactNode {
  return (
    <>
      <Box
        aria-label="Social networks"
        component="nav"
        sx={{
          display: { xs: "none", md: "flex" },
          gap: "0.5rem",
          paddingInline: "1rem",
        }}
      >
        <Suspense
          fallback={[...Array(3)].map(
            (_: unknown, index: number): ReactNode => (
              <Skeleton height={40} key={index} variant="circular" width={40} />
            ),
          )}
        >
          <DesktopSocialNetworks />
        </Suspense>
      </Box>
      <MobileSocialNetworksMenu>
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
            <MobileSocialNetworks />
          </Suspense>
        </List>
      </MobileSocialNetworksMenu>
    </>
  );
}
