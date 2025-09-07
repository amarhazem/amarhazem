import { getSocialNetworksISR } from "@/data/social-networks";
import type { SocialNetwork } from "@/payload-types";
import sanitizeSvg from "@/utils/sanitize-svg";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import type { PaginatedDocs } from "payload";
import type { ReactNode } from "react";

export default async function MobileSocialNetworks(): Promise<ReactNode> {
  const socialNetworks: PaginatedDocs<SocialNetwork> =
    await getSocialNetworksISR();

  return socialNetworks.docs.map(
    (socialNetwork: SocialNetwork): ReactNode => (
      <ListItem disablePadding key={socialNetwork.id}>
        <ListItemButton
          href={socialNetwork.url}
          rel="noopener"
          sx={{ justifyContent: "center" }}
          target="_blank"
        >
          <ListItemIcon>
            <SvgIcon viewBox={socialNetwork.viewBox}>
              <g
                dangerouslySetInnerHTML={{
                  __html: sanitizeSvg(socialNetwork.icon),
                }}
              />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary={socialNetwork.name} sx={{ flexGrow: 0 }} />
        </ListItemButton>
      </ListItem>
    ),
  );
}
