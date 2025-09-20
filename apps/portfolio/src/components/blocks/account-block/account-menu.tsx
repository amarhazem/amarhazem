import type { Auth } from "@/payload-types";
import payload from "@/utils/payload";
import { headers } from "next/headers";
import type { ReactNode } from "react";
import DesktopAccountMenu from "./desktop-account-menu";
import MobileAccountMenu from "./mobile-account-menu";

export default async function AccountMenu(): Promise<ReactNode> {
  const auth: Auth = await payload.auth({
    canSetHeaders: false,
    headers: await headers(),
  });

  return (
    <>
      <DesktopAccountMenu auth={auth} />
      <MobileAccountMenu auth={auth} />
    </>
  );
}
