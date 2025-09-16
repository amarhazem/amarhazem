import { CollectionBeforeChangeHook } from "payload";

export default function updateLastLogin(
  data: any,
  operation: any,
): CollectionBeforeChangeHook {
  if (operation === "update" && data.email) {
    data.lastLogin = new Date();
    data.loginCount = (data.loginCount || 0) + 1;
  }

  return data;
}
