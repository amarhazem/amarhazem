import { CollectionBeforeChangeHook } from "payload";

export default function sanitizeData(data: any): CollectionBeforeChangeHook {
  Object.keys(data).forEach((key: string): void => {
    if (typeof data[key] === "string") {
      data[key] = data[key].trim();
    }
  });

  return data;
}
