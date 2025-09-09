import { getAppsISR } from "@/data/apps";
import type { App } from "@/payload-types";
import sanitizeSvg from "@/utils/sanitize-svg";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import SvgIcon from "@mui/material/SvgIcon";
import type { PaginatedDocs } from "payload";
import type { ReactNode } from "react";

export default async function DesktopApps(): Promise<ReactNode> {
  const apps: PaginatedDocs<App> = await getAppsISR();

  if (apps.totalDocs === 0) {
    return (
      <MenuItem disabled sx={{ opacity: "1 !important" }}>
        <ListItemIcon>🚧</ListItemIcon>
        <ListItemText>New apps are coming soon. Stay tuned!</ListItemText>
      </MenuItem>
    );
  }

  return apps.docs.map(
    (app: App): ReactNode => (
      <MenuItem href={app.url} key={app.id} rel="noopener" target="_blank">
        <ListItemIcon>
          <SvgIcon viewBox={app.viewBox}>
            <g
              dangerouslySetInnerHTML={{
                __html: sanitizeSvg(app.icon),
              }}
            />
          </SvgIcon>
        </ListItemIcon>
        <ListItemText>{app.name}</ListItemText>
      </MenuItem>
    ),
  );
}
