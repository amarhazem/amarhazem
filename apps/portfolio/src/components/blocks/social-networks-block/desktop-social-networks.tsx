import { getSocialNetworksISR } from "@/data/social-networks";
import type { SocialNetwork } from "@/payload-types";
import sanitizeSvg from "@/utils/sanitize-svg";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import type { PaginatedDocs } from "payload";
import type { ReactNode } from "react";

export default async function DesktopSocialNetworks(): Promise<ReactNode> {
  const socialNetworks: PaginatedDocs<SocialNetwork> =
    await getSocialNetworksISR();

  return socialNetworks.docs.map(
    (socialNetwork: SocialNetwork): ReactNode => (
      <IconButton
        aria-label={socialNetwork.name}
        color="inherit"
        href={socialNetwork.url}
        key={socialNetwork.id}
        rel="noopener"
        sx={{ alignSelf: "center" }}
        target="_blank"
      >
        <SvgIcon viewBox={socialNetwork.viewBox}>
          <g
            dangerouslySetInnerHTML={{
              __html: sanitizeSvg(socialNetwork.icon),
            }}
          />
        </SvgIcon>
      </IconButton>
    ),
  );
}
