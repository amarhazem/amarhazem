import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  access: {
    create: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    description: "Manage content categories",
    group: "Content",
    useAsTitle: "name",
  },
  fields: [
    {
      admin: {
        description: "Name of the category",
      },
      label: "Category Name",
      name: "name",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "URL-friendly version of the category name",
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
        description: "Brief description of the category",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description: "Hexadecimal color for the category",
      },
      label: "Color",
      name: "color",
      type: "text",
    },
    {
      admin: {
        description: "Icon class or emoji for the category",
      },
      label: "Icon",
      name: "icon",
      type: "text",
    },
    {
      admin: {
        description: "Category image or illustration",
      },
      label: "Image",
      name: "image",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "Type of content this category applies to",
      },
      defaultValue: "general",
      label: "Category Type",
      name: "categoryType",
      options: [
        { label: "Blog", value: "blog" },
        { label: "General", value: "general" },
        { label: "Project", value: "project" },
        { label: "Service", value: "service" },
        { label: "Skill", value: "skill" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Parent category (for hierarchical categories)",
      },
      label: "Parent Category",
      name: "parent",
      relationTo: "categories",
      type: "relationship",
    },
    {
      admin: {
        description: "Mark as featured category",
      },
      defaultValue: false,
      label: "Featured",
      name: "featured",
      type: "checkbox",
    },
    {
      admin: {
        description: "Show this category on the website",
      },
      defaultValue: true,
      label: "Active",
      name: "active",
      type: "checkbox",
    },
    {
      admin: {
        description: "Order for displaying categories (smaller = higher)",
      },
      label: "Display Order",
      name: "displayOrder",
      type: "number",
    },
    {
      admin: {
        description: "SEO settings for this category",
      },
      label: "SEO",
      name: "seo",
      fields: [
        {
          admin: {
            description: "Title for search engines (optional)",
          },
          label: "SEO Title",
          name: "title",
          type: "text",
        },
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
      ],
      type: "group",
    },
  ],
  slug: "categories",
  versions: {
    drafts: true,
  },
};
