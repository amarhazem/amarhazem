import type { CollectionConfig } from "payload";

export default {
  access: {
    create: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    description:
      "Manage educational institutions, companies, and organizations",
    group: "Content",
    useAsTitle: "name",
  },
  fields: [
    {
      admin: {
        description: "Make this institution visible on the website",
      },
      defaultValue: true,
      label: "Active",
      name: "active",
      type: "checkbox",
    },
    {
      admin: {
        description: "Contact information for the institution",
      },
      fields: [
        {
          label: "Address",
          name: "address",
          type: "textarea",
        },
        {
          label: "Email",
          name: "email",
          type: "email",
        },
        {
          label: "Phone",
          name: "phone",
          type: "text",
        },
      ],
      label: "Contact Information",
      name: "contactInfo",
      type: "group",
    },
    {
      admin: {
        description: "Country where the institution is based",
      },
      label: "Country",
      name: "country",
      type: "text",
    },
    {
      admin: {
        description: "Brief description of the institution",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description: "Detailed information about the institution",
      },
      label: "Detailed Description",
      name: "detailedDescription",
      type: "richText",
    },
    {
      admin: {
        description: "Mark as featured institution",
      },
      defaultValue: false,
      label: "Featured",
      name: "featured",
      type: "checkbox",
    },
    {
      admin: {
        description: "Year the institution was founded",
      },
      label: "Founded Year",
      name: "foundedYear",
      type: "number",
    },
    {
      admin: {
        description: "Additional images of the institution",
      },
      fields: [
        {
          label: "Caption",
          name: "caption",
          type: "text",
        },
        {
          label: "Image",
          name: "image",
          relationTo: "media",
          required: true,
          type: "upload",
        },
      ],
      label: "Gallery",
      name: "gallery",
      type: "array",
    },
    {
      admin: {
        description: "Industry or sector the institution operates in",
      },
      label: "Industry",
      name: "industry",
      type: "text",
    },
    {
      admin: {
        description: "Size of the institution",
      },
      defaultValue: "medium",
      label: "Institution Size",
      name: "institutionSize",
      options: [
        { label: "Enterprise (1000+)", value: "enterprise" },
        { label: "Large (201-1000)", value: "large" },
        { label: "Medium (51-200)", value: "medium" },
        { label: "Startup (1-10)", value: "startup" },
        { label: "Small (11-50)", value: "small" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Type of institution",
      },
      defaultValue: "company",
      label: "Institution Type",
      name: "institutionType",
      options: [
        { label: "Company", value: "company" },
        { label: "Educational Institution", value: "educational" },
        { label: "Government", value: "government" },
        { label: "Non-profit", value: "non-profit" },
        { label: "Organization", value: "organization" },
        { label: "Research Center", value: "research" },
        { label: "Startup", value: "startup" },
        { label: "University", value: "university" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Physical location or headquarters",
      },
      label: "Location",
      name: "location",
      type: "text",
    },
    {
      admin: {
        description: "Institution logo or emblem",
      },
      label: "Logo",
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      admin: {
        description: "Name of the institution",
      },
      label: "Institution Name",
      name: "name",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "SEO settings for this institution",
      },
      fields: [
        {
          admin: {
            description: "Description for search engines (optional)",
          },
          label: "Meta Description",
          name: "description",
          type: "textarea",
        },
        {
          admin: {
            description: "Keywords separated by commas",
          },
          label: "Keywords",
          name: "keywords",
          type: "text",
        },
        {
          admin: {
            description: "Title for search engines (optional)",
          },
          label: "SEO Title",
          name: "title",
          type: "text",
        },
      ],
      label: "SEO",
      name: "seo",
      type: "group",
    },
    {
      admin: {
        description: "URL-friendly version of the institution name",
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [
          ({ data, value }: any): string =>
            value ||
            (data?.name
              ? data.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, "")
              : value),
        ],
      },
      index: true,
      label: "Slug",
      name: "slug",
      type: "text",
      unique: true,
    },
    {
      admin: {
        description: "Social media profiles",
      },
      fields: [
        {
          label: "Platform",
          name: "platform",
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "Twitter", value: "twitter" },
            { label: "YouTube", value: "youtube" },
          ],
          required: true,
          type: "select",
        },
        {
          label: "URL",
          name: "url",
          required: true,
          type: "text",
        },
      ],
      label: "Social Media",
      name: "socialMedia",
      type: "array",
    },
    {
      admin: {
        description: "Tags to categorize and search institutions",
      },
      fields: [
        {
          label: "Tag",
          name: "tag",
          required: true,
          type: "text",
        },
      ],
      label: "Tags",
      name: "tags",
      type: "array",
    },
    {
      admin: {
        description: "Official website URL",
      },
      label: "Website",
      name: "website",
      type: "text",
    },
  ],
  slug: "institutions",
  versions: {
    drafts: true,
  },
} as CollectionConfig;
