import { CollectionBeforeChangeHook } from "payload";

export default function generateSlug(
  fieldName: string = "name",
): CollectionBeforeChangeHook {
  return async ({ data, operation }) => {
    if (operation === "create" || operation === "update") {
      if (data[fieldName] && !data.slug) {
        data.slug = data[fieldName]
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "");
      }
    }
    
    return data;
  };
}
