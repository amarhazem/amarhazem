import anyone from "@/access/anyone";
import authenticated from "@/access/authenticated";
import type { CollectionConfig } from "payload";

export default {
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    description: "Manage portfolio projects",
    group: "Content",
    useAsTitle: "name",
  },
  fields: [
    {
      admin: {
        description: "Key challenges faced during the project",
      },
      label: "Challenges",
      name: "challenges",
      type: "textarea",
    },
    {
      admin: {
        description: "Client or company name (if applicable)",
      },
      label: "Client/Company",
      name: "client",
      relationTo: "companies",
      type: "relationship",
    },
    {
      admin: {
        description: "Short description of the project",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description: "Detailed project description and features",
      },
      label: "Detailed Description",
      name: "detailedDescription",
      type: "richText",
    },
    {
      admin: {
        description: "Project completion date",
      },
      label: "End Date",
      name: "endDate",
      type: "date",
    },
    {
      admin: {
        description: "Mark as featured project",
      },
      defaultValue: false,
      label: "Featured",
      name: "featured",
      type: "checkbox",
    },
    {
      admin: {
        description: "Additional project images",
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
      label: "Project Gallery",
      name: "gallery",
      type: "array",
    },
    {
      admin: {
        description: "Link to the GitHub repository",
      },
      label: "GitHub URL",
      name: "githubUrl",
      type: "text",
    },
    {
      admin: {
        description: "Main project image or screenshot",
      },
      label: "Project Image",
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      admin: {
        description: "Name of the project",
      },
      label: "Project Name",
      name: "name",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Type of project",
      },
      defaultValue: "web-app",
      label: "Project Type",
      name: "projectType",
      options: [
        { label: "API", value: "api" },
        { label: "Desktop Application", value: "desktop-app" },
        { label: "Game", value: "game" },
        { label: "Library/Package", value: "library" },
        { label: "Mobile App", value: "mobile-app" },
        { label: "Other", value: "other" },
        { label: "Web Application", value: "web-app" },
        { label: "Website", value: "website" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Live demo or project website URL",
      },
      label: "Project URL",
      name: "projectUrl",
      type: "text",
    },
    {
      admin: {
        description: "Make this project visible on the website",
      },
      defaultValue: true,
      label: "Published",
      name: "published",
      type: "checkbox",
    },
    {
      admin: {
        description: "Your role in this project",
      },
      label: "My Role",
      name: "role",
      type: "text",
    },
    {
      admin: {
        description: "Project results and achievements",
      },
      label: "Results",
      name: "results",
      type: "textarea",
    },
    {
      admin: {
        description: "SEO settings for this project",
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
        description: "URL-friendly version of the project name",
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
        description: "Project start date",
      },
      label: "Start Date",
      name: "startDate",
      type: "date",
    },
    {
      admin: {
        description: "Current status of the project",
      },
      defaultValue: "completed",
      label: "Project Status",
      name: "projectStatus",
      options: [
        { label: "Archived", value: "archived" },
        { label: "Completed", value: "completed" },
        { label: "In Progress", value: "in-progress" },
        { label: "On Hold", value: "on-hold" },
        { label: "Planned", value: "planned" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Number of team members (if applicable)",
      },
      label: "Team Size",
      name: "teamSize",
      type: "number",
    },
    {
      admin: {
        description: "Technologies and tools used in this project",
      },
      fields: [
        {
          admin: {
            description: "Hexadecimal color for the technology",
          },
          label: "Color",
          name: "color",
          type: "text",
        },
        {
          admin: {
            description: "Name of the technology",
          },
          label: "Technology",
          name: "name",
          required: true,
          type: "text",
        },
      ],
      label: "Technologies",
      name: "technologies",
      type: "array",
    },
    {
      admin: {
        description: "Tags to categorize and search projects",
      },
      fields: [
        {
          label: "Tag",
          name: "tag",
          type: "text",
          required: true,
        },
      ],
      label: "Tags",
      name: "tags",
      type: "array",
    },
  ],
  labels: {
    plural: "Projects",
    singular: "Project",
  },
  slug: "projects",
  trash: true,
  versions: {
    autosave: true,
    drafts: true,
  },
} as CollectionConfig;
