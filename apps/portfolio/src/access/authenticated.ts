import type { User } from "@/payload-types";
import type { AccessArgs } from "payload";

export default function ({ req: { user } }: AccessArgs<User>): boolean {
  return Boolean(user);
}
