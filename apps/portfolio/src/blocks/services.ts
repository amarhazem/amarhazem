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
      fields: [
        {
          admin: {
            condition: (data) => data.showCta,
            description: "Call to action button link",
          },
          defaultValue: "/contact",
          label: "CTA Link",
          name: "link",
          type: "text",
        },
        {
          admin: {
            description: "Show call to action button",
          },
          defaultValue: true,
          label: "Show CTA",
          name: "showCta",
          type: "checkbox",
        },
        {
          admin: {
            condition: (data) => data.showCta,
            description: "Call to action button style",
          },
          defaultValue: "primary",
          label: "CTA Style",
          name: "style",
          options: [
            { label: "Outlined", value: "outlined" },
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
          type: "select",
        },
        {
          admin: {
            condition: (data) => data.showCta,
            description: "Call to action button text",
          },
          defaultValue: "Get Started",
          label: "CTA Text",
          name: "text",
          type: "text",
        },
      ],
      label: "Call to Action",
      name: "cta",
      type: "group",
    },
    {
      admin: {
        description: "Description of the services section",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      fields: [
        {
          admin: {
            description: "Show only available services",
          },
          defaultValue: true,
          label: "Show Available Only",
          name: "availableOnly",
          type: "checkbox",
        },
        {
          admin: {
            description: "Show only featured services",
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
            description: "Number of services per row (for grid/cards layout)",
          },
          defaultValue: "3",
          label: "Items per Row",
          name: "itemsPerRow",
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
          ],
          type: "select",
        },
        {
          admin: {
            description: "How to display the services",
          },
          defaultValue: "grid",
          label: "Layout",
          name: "layout",
          options: [
            { label: "Grid", value: "grid" },
            { label: "List", value: "list" },
            { label: "Cards", value: "cards" },
            { label: "Tabs", value: "tabs" },
            { label: "Accordion", value: "accordion" },
          ],
          type: "select",
        },
        {
          admin: {
            description:
              "Maximum number of services to display (leave empty for all)",
          },
          label: "Limit Number",
          name: "limit",
          type: "number",
        },
        {
          admin: {
            description: "Display service features",
          },
          defaultValue: true,
          label: "Show Features",
          name: "showFeatures",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display service icons",
          },
          defaultValue: true,
          label: "Show Icons",
          name: "showIcons",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display service images",
          },
          defaultValue: true,
          label: "Show Images",
          name: "showImages",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display pricing information",
          },
          defaultValue: true,
          label: "Show Pricing",
          name: "showPricing",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display service delivery process",
          },
          label: "Show Process",
          defaultValue: false,
          name: "showProcess",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display related projects",
          },
          defaultValue: false,
          label: "Show Related Projects",
          name: "showRelatedProjects",
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
        {
          admin: {
            description: "Display related testimonials",
          },
          label: "Show Testimonials",
          defaultValue: false,
          name: "showTestimonials",
          type: "checkbox",
        },
      ],
      label: "Display Options",
      name: "displayOptions",
      type: "group",
    },
    {
      fields: [
        {
          admin: {
            description: "Allow users to filter services",
          },
          defaultValue: false,
          label: "Enable Filtering",
          name: "enableFiltering",
          type: "checkbox",
        },
        {
          admin: {
            condition: (data) => data.enableFiltering,
            description: "Allow filtering by availability",
          },
          defaultValue: true,
          label: "Filter by Availability",
          name: "filterByAvailability",
          type: "checkbox",
        },
        {
          admin: {
            condition: (data) => data.enableFiltering,
            description: "Allow filtering by price range",
          },
          defaultValue: false,
          label: "Filter by Price Range",
          name: "filterByPrice",
          type: "checkbox",
        },
        {
          admin: {
            condition: (data) => data.enableFiltering,
            description: "Allow filtering by service type",
          },
          defaultValue: true,
          label: "Filter by Service Type",
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
        description: "Main title of the services section",
      },
      label: "Title",
      name: "heading",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Select services to display in this section",
      },
      hasMany: true,
      label: "Services",
      name: "services",
      relationTo: "services",
      type: "relationship",
    },
  ],
  labels: {
    plural: "Services Sections",
    singular: "Services Section",
  },
  slug: "services",
} as Block;
