import type { Block } from "payload";

export default {
  fields: [
    {
      admin: {
        description: "ID for navigation",
      },
      label: "Anchor (#id)",
      name: "anchorId",
      type: "text",
    },
    {
      admin: {
        description: "Description of the skills section",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      fields: [
        {
          admin: {
            description: "Show only featured skills",
          },
          defaultValue: false,
          label: "Show Featured Only",
          name: "featuredOnly",
          type: "checkbox",
        },
        {
          admin: {
            description: "Group skills by their categories",
          },
          defaultValue: true,
          label: "Group by Category",
          name: "groupByCategory",
          type: "checkbox",
        },
        {
          admin: {
            condition: (data) => data.layout === "grid",
            description: "Number of skills per row (for grid layout)",
          },
          defaultValue: "4",
          label: "Items per Row",
          name: "itemsPerRow",
          options: [
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
          ],
          type: "select",
        },
        {
          admin: {
            description: "How to display the skills",
          },
          defaultValue: "grid",
          label: "Layout",
          name: "layout",
          options: [
            { label: "Grid", value: "grid" },
            { label: "List", value: "list" },
            { label: "Progress Bars", value: "progress" },
            { label: "Tags", value: "tags" },
          ],
          type: "select",
        },
        {
          admin: {
            description: "Display skill icons",
          },
          defaultValue: true,
          label: "Show Icons",
          name: "showIcons",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display skill level percentages",
          },
          defaultValue: true,
          label: "Show Percentage",
          name: "showPercentage",
          type: "checkbox",
        },
      ],
      label: "Display Options",
      name: "displayOptions",
      type: "group",
    },
    {
      admin: {
        description: "Main title of the skills section",
      },
      label: "Title",
      name: "heading",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Select skills to display in this section",
      },
      hasMany: true,
      label: "Skills",
      name: "skills",
      relationTo: "skills",
      type: "relationship",
    },
  ],
  labels: {
    plural: "Skills Sections",
    singular: "Skills Section",
  },
  slug: "skills",
} as Block;
