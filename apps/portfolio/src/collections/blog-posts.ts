import type { CollectionConfig } from "payload";
import slugify from "../utils/slugify";

export default {
  access: {
    create: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    description: "Manage blog posts and articles",
    group: "Content",
    useAsTitle: "title",
  },
  fields: [
    {
      admin: {
        description: "Allow comments on this post",
        position: "sidebar",
      },
      defaultValue: true,
      label: "Allow Comments",
      name: "allowComments",
      type: "checkbox",
    },
    {
      admin: {
        description: "Blog post author",
      },
      label: "Author",
      name: "author",
      relationTo: "users",
      type: "relationship",
    },
    {
      admin: {
        description: "Blog post categories",
      },
      hasMany: true,
      label: "Categories",
      name: "categories",
      relationTo: "categories",
      type: "relationship",
    },
    {
      admin: {
        description: "Main blog post content",
      },
      label: "Content",
      name: "content",
      required: true,
      type: "richText",
    },
    {
      admin: {
        description: "Short description for previews",
      },
      label: "Excerpt",
      name: "excerpt",
      type: "textarea",
    },
    {
      admin: {
        description: "Mark as featured post",
        position: "sidebar",
      },
      defaultValue: false,
      label: "Featured",
      name: "featured",
      type: "checkbox",
    },
    {
      admin: {
        description: "Main image for the blog post",
      },
      label: "Featured Image",
      name: "featuredImage",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "Date when the post was published",
        position: "sidebar",
      },
      label: "Published Date",
      name: "publishedDate",
      type: "date",
    },
    {
      admin: {
        description: "Estimated reading time in minutes",
        position: "sidebar",
      },
      label: "Reading Time",
      name: "readingTime",
      type: "number",
    },
    {
      admin: {
        description: "Related projects mentioned in the post",
      },
      hasMany: true,
      label: "Related Projects",
      name: "relatedProjects",
      relationTo: "projects",
      type: "relationship",
    },
    {
      admin: {
        description: "SEO settings for this blog post",
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
            description: "Image for social media sharing",
          },
          label: "Open Graph Image",
          name: "ogImage",
          relationTo: "media",
          type: "upload",
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
        description: "URL-friendly version of the title",
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [
          ({ data, value }: any): string =>
            value || (data?.title ? slugify(data.title) : value),
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
        description: "Publication status",
        position: "sidebar",
      },
      defaultValue: "draft",
      label: "Status",
      name: "status",
      options: [
        { label: "Archived", value: "archived" },
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Blog post tags",
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
        description: "Blog post title",
      },
      label: "Title",
      name: "title",
      required: true,
      type: "text",
    },
  ],
  labels: {
    plural: "Blog Posts",
    singular: "Blog Post",
  },
  slug: "blog-posts",
  versions: {
    drafts: true,
  },
} as CollectionConfig;
