"server-only";

import config from "@/payload.config";
import { getPayload } from "payload";

export default await getPayload({ config });
