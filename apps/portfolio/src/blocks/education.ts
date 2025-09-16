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
        description: "Description of the education section",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      fields: [
        {
          admin: {
            description: "Show only current education",
          },
          defaultValue: false,
          label: "Show Current Only",
          name: "currentOnly",
          type: "checkbox",
        },
        {
          admin: {
            description: "Show only featured education items",
          },
          defaultValue: false,
          label: "Show Featured Only",
          name: "featuredOnly",
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
            description: "How to display the education items",
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
              "Maximum number of education items to display (leave empty for all)",
          },
          label: "Limit Number",
          name: "limit",
          type: "number",
        },
        {
          admin: {
            description: "Display academic achievements",
          },
          defaultValue: true,
          label: "Show Achievements",
          name: "showAchievements",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display relevant coursework",
          },
          label: "Show Coursework",
          defaultValue: false,
          name: "showCoursework",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display education duration",
          },
          defaultValue: true,
          label: "Show Duration",
          name: "showDuration",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display education type (Bachelor's, Master's, etc.)",
          },
          defaultValue: true,
          label: "Show Education Type",
          name: "showEducationType",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display final grade or GPA",
          },
          defaultValue: true,
          label: "Show Grade/GPA",
          name: "showGrade",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display institution logos",
          },
          defaultValue: true,
          label: "Show Institution Logos",
          name: "showInstitutionLogos",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display institution location",
          },
          defaultValue: true,
          label: "Show Location",
          name: "showLocation",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display skills learned during education",
          },
          defaultValue: true,
          label: "Show Skills Learned",
          name: "showSkills",
          type: "checkbox",
        },
      ],
      label: "Display Options",
      name: "displayOptions",
      type: "group",
    },
    {
      admin: {
        description: "Select education items to display in this section",
      },
      hasMany: true,
      label: "Education Items",
      name: "educationItems",
      relationTo: "education",
      type: "relationship",
    },
    {
      fields: [
        {
          admin: {
            condition: (data) => data.filterByType,
            description: "Select which education types to display",
          },
          hasMany: true,
          label: "Education Types to Show",
          name: "educationTypes",
          options: [
            { label: "Associate Degree", value: "associate" },
            { label: "Bachelor's Degree", value: "bachelor" },
            { label: "Bootcamp", value: "bootcamp" },
            { label: "Certificate", value: "certificate" },
            { label: "Diploma", value: "diploma" },
            { label: "Master's Degree", value: "master" },
            { label: "Online Course", value: "online-course" },
            { label: "Other", value: "other" },
            { label: "PhD", value: "phd" },
            { label: "Workshop", value: "workshop" },
          ],
          type: "select",
        },
        {
          admin: {
            description: "Allow filtering by education type",
          },
          defaultValue: false,
          label: "Filter by Education Type",
          name: "filterByType",
          type: "checkbox",
        },
      ],
      label: "Filter Options",
      name: "filterOptions",
      type: "group",
    },
    {
      admin: {
        description: "Main title of the education section",
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
            condition: (data) => data.displayOptions?.layout === "timeline",
            description: "Timeline display style",
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
    plural: "Education Sections",
    singular: "Education Section",
  },
  slug: "education",
} as Block;
