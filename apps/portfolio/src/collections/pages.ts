import type { CollectionConfig } from "payload";
import About from "../blocks/about";
import Blog from "../blocks/blog";
import Contact from "../blocks/contact";
import Education from "../blocks/education";
import Experience from "../blocks/experience";
import Hero from "../blocks/hero";
import Projects from "../blocks/projects";
import Services from "../blocks/services";
import Skills from "../blocks/skills";
import Testimonials from "../blocks/testimonials";
import slugify from "../utils/slugify";

export const Pages: CollectionConfig = {
  access: {
    create: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    description: "Manage site pages",
    group: "Content",
    useAsTitle: "title",
  },
  fields: [
    {
      admin: {
        description: "Page author",
        position: "sidebar",
      },
      label: "Author",
      name: "author",
      type: "text",
    },
    {
      admin: {
        description: "Short description of the page (optional)",
      },
      label: "Short Description",
      name: "excerpt",
      type: "textarea",
    },
    {
      admin: {
        description: "Main image of the page (optional)",
      },
      label: "Featured Image",
      name: "featuredImage",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "Page publication date",
        position: "sidebar",
      },
      label: "Publication Date",
      name: "publishedDate",
      type: "date",
    },
    {
      admin: {
        description: "Compose the page with different sections",
      },
      blocks: [
        About,
        Blog,
        Contact,
        Education,
        Experience,
        Hero,
        Projects,
        Services,
        Skills,
        Testimonials,
      ],
      label: "Sections",
      labels: {
        singular: "Section",
        plural: "Sections",
      },
      name: "sections",
      required: true,
      type: "blocks",
    },
    {
      admin: {
        description: "SEO and social media settings",
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
            description: "Allow search engines to follow links",
          },
          defaultValue: true,
          label: "Follow Links",
          name: "followLinks",
          type: "checkbox",
        },
        {
          admin: {
            description: "Allow indexing by Google, etc.",
          },
          defaultValue: true,
          label: "Index by Search Engines",
          name: "indexable",
          type: "checkbox",
        },
        {
          admin: {
            description: "Keywords separated by commas",
          },
          label: "SEO Keywords",
          name: "keywords",
          type: "text",
        },
        {
          admin: {
            description: "Image for social networks",
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
        description: "Leave blank to auto-generate from title",
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
        description: "Page status",
        position: "sidebar",
      },
      defaultValue: "draft",
      label: "Publication Status",
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
        description: "Tags to organize pages",
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
        description: "Main title of the page",
      },
      label: "Page Title",
      name: "title",
      required: true,
      type: "text",
    },
  ],
  slug: "pages",
  versions: {
    drafts: true,
  },
};
