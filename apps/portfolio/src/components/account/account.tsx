import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { type ReactNode, Suspense } from "react";
import AccountMenu from "./account-menu";

export default function Account(): ReactNode {
  return (
    <>
      <Suspense
        fallback={
          <Button color="inherit" sx={{ display: { xs: "none", md: "flex" } }}>
            <Avatar sx={{ height: 32, width: 32 }}>
              <AccountCircleIcon />
            </Avatar>
          </Button>
        }
      >
        <AccountMenu />
      </Suspense>
    </>
  );
}
