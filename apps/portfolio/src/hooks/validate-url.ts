import { CollectionBeforeChangeHook } from "payload";

export default function validateUrl(data: any): CollectionBeforeChangeHook {
  const urlFields = ["githubUrl", "projectUrl", "url", "website"];

  for (const field of urlFields) {
    if (data[field] && !data[field].startsWith("http")) {
      data[field] = `https://${data[field]}`;
    }
  }

  return data;
}
