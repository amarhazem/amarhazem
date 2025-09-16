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
        description: "Description of the experience section",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      fields: [
        {
          admin: {
            description: "Show only featured experience items",
          },
          defaultValue: false,
          label: "Show Featured Only",
          name: "featuredOnly",
          type: "checkbox",
        },
        {
          admin: {
            description: "Show only current positions",
          },
          defaultValue: false,
          label: "Show Current Only",
          name: "currentOnly",
          type: "checkbox",
        },
        {
          admin: {
            condition: (data) =>
              data.layout === "grid" || data.layout === "cards",
            description: "Number of items per row (for grid/cards layout)",
          },
          defaultValue: "1",
          label: "Items per Row",
          name: "itemsPerRow",
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
          ],
          type: "select",
        },
        {
          admin: {
            description: "How to display the experience items",
          },
          defaultValue: "timeline",
          label: "Layout",
          name: "layout",
          options: [
            { label: "Cards", value: "cards" },
            { label: "Grid", value: "grid" },
            { label: "List", value: "list" },
            { label: "Timeline", value: "timeline" },
          ],
          type: "select",
        },
        {
          admin: {
            description:
              "Maximum number of experience items to display (leave empty for all)",
          },
          label: "Limit Number",
          name: "limit",
          type: "number",
        },
        {
          admin: {
            description: "Display key achievements",
          },
          defaultValue: true,
          label: "Show Achievements",
          name: "showAchievements",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display company logos",
          },
          defaultValue: true,
          label: "Show Company Logos",
          name: "showCompanyLogos",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display employment duration",
          },
          defaultValue: true,
          label: "Show Duration",
          name: "showDuration",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display employment type (Full-time, Contract, etc.)",
          },
          defaultValue: true,
          label: "Show Employment Type",
          name: "showEmploymentType",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display work location",
          },
          defaultValue: true,
          label: "Show Location",
          name: "showLocation",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display technologies used",
          },
          defaultValue: true,
          label: "Show Technologies",
          name: "showTechnologies",
          type: "checkbox",
        },
      ],
      label: "Display Options",
      name: "displayOptions",
      type: "group",
    },
    {
      admin: {
        description: "Select experience items to display in this section",
      },
      hasMany: true,
      label: "Experience Items",
      name: "experienceItems",
      relationTo: "experience",
      type: "relationship",
    },
    {
      admin: {
        description: "Main title of the experience section",
      },
      label: "Title",
      name: "heading",
      required: true,
      type: "text",
    },
    {
      admin: {
        condition: (data) => data.displayOptions?.layout === "timeline",
      },
      fields: [
        {
          admin: {
            condition: (data) => data.displayOptions?.layout === "timeline",
            description: "Color of the timeline line (hex code)",
          },
          label: "Timeline Color",
          name: "lineColor",
          type: "text",
        },
        {
          admin: {
            condition: (data) => data.displayOptions?.layout === "timeline",
            description: "Show connecting line in timeline",
          },
          defaultValue: true,
          label: "Show Timeline Line",
          name: "showLine",
          type: "checkbox",
        },
        {
          admin: {
            description: "Timeline display style",
            condition: (data) => data.displayOptions?.layout === "timeline",
          },
          defaultValue: "vertical",
          label: "Timeline Style",
          name: "style",
          options: [
            { label: "Alternating", value: "alternating" },
            { label: "Horizontal", value: "horizontal" },
            { label: "Vertical", value: "vertical" },
          ],
          type: "select",
        },
      ],
      label: "Timeline Options",
      name: "timelineOptions",
      type: "group",
    },
  ],
  labels: {
    plural: "Experience Sections",
    singular: "Experience Section",
  },
  slug: "experience",
} as Block;
