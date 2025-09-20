import { getAppsISR } from "@/data/apps";
import type { App } from "@/payload-types";
import sanitizeSvg from "@/utils/sanitize-svg";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import type { PaginatedDocs } from "payload";
import type { ReactNode } from "react";

export default async function MobileApps(): Promise<ReactNode> {
  const apps: PaginatedDocs<App> = await getAppsISR();

  if (apps.totalDocs === 0) {
    return (
      <ListItem disablePadding sx={{ justifyContent: "center" }}>
        <ListItemText
          primary="🚧 New apps are coming soon"
          secondary="Stay tuned!"
          sx={{ flexGrow: 0, textAlign: "center" }}
        />
      </ListItem>
    );
  }

  return apps.docs.map(
    (app: App): ReactNode => (
      <ListItem disablePadding key={app.id}>
        <ListItemButton
          href={app.url}
          rel="noopener"
          sx={{ justifyContent: "center" }}
          target="_blank"
        >
          <ListItemIcon>
            <SvgIcon viewBox={app.viewBox}>
              <g
                dangerouslySetInnerHTML={{
                  __html: sanitizeSvg(app.icon),
                }}
              />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary={app.name} sx={{ flexGrow: 0 }} />
        </ListItemButton>
      </ListItem>
    ),
  );
}
