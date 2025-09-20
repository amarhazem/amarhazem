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
    description: "Manage services offered",
    group: "Content",
    useAsTitle: "name",
  },
  fields: [
    {
      admin: {
        description: "Name of the service",
      },
      label: "Service Name",
      name: "name",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "URL-friendly version of the service name",
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
        description: "Brief description of the service",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description: "Detailed service information",
      },
      label: "Detailed Description",
      name: "detailedDescription",
      type: "richText",
    },
    {
      admin: {
        description: "Icon class or emoji for the service",
      },
      label: "Icon",
      name: "icon",
      type: "text",
    },
    {
      admin: {
        description: "Service image or illustration",
      },
      label: "Image",
      name: "image",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "Type of service",
      },
      label: "Service Type",
      name: "serviceType",
      options: [
        { label: "Consulting", value: "consulting" },
        { label: "Maintenance", value: "maintenance" },
        { label: "Mobile Development", value: "mobile-development" },
        { label: "Other", value: "other" },
        { label: "Training", value: "training" },
        { label: "UI/UX Design", value: "ui-ux-design" },
        { label: "Web Development", value: "web-development" },
      ],
      type: "select",
    },
    {
      label: "Pricing",
      name: "pricing",
      fields: [
        {
          defaultValue: "custom",
          label: "Price Type",
          name: "type",
          options: [
            { label: "Custom Quote", value: "custom" },
            { label: "Fixed Price", value: "fixed" },
            { label: "Hourly Rate", value: "hourly" },
            { label: "Monthly Retainer", value: "monthly" },
            { label: "Project-based", value: "project" },
          ],
          type: "select",
        },
        {
          admin: {
            description: "Price amount (leave empty for custom quotes)",
          },
          label: "Price",
          name: "price",
          type: "number",
        },
        {
          defaultValue: "USD",
          label: "Currency",
          name: "currency",
          options: [
            { label: "CAD (C$)", value: "CAD" },
            { label: "EUR (€)", value: "EUR" },
            { label: "GBP (£)", value: "GBP" },
            { label: "USD ($)", value: "USD" },
          ],
          type: "select",
        },
        {
          admin: {
            description: "Additional pricing information",
          },
          label: "Price Note",
          name: "note",
          type: "text",
        },
      ],
      type: "group",
    },
    {
      admin: {
        description: "Key features of this service",
      },
      label: "Features",
      name: "features",
      fields: [
        {
          label: "Feature",
          name: "feature",
          required: true,
          type: "text",
        },
        {
          label: "Description",
          name: "description",
          type: "textarea",
        },
      ],
      type: "array",
    },
    {
      admin: {
        description: "Service delivery process steps",
      },
      fields: [
        {
          label: "Step Number",
          name: "stepNumber",
          required: true,
          type: "number",
        },
        {
          label: "Step Title",
          name: "title",
          required: true,
          type: "text",
        },
        {
          label: "Step Description",
          name: "description",
          required: true,
          type: "textarea",
        },
        {
          admin: {
            description: "Estimated duration",
          },
          label: "Duration",
          name: "duration",
          type: "text",
        },
      ],
      label: "Process",
      name: "process",
      type: "array",
    },
    {
      admin: {
        description: "Technologies used in this service",
      },
      hasMany: true,
      label: "Technologies",
      name: "technologies",
      relationTo: "skills",
      type: "relationship",
    },
    {
      admin: {
        description: "Example projects for this service",
      },
      hasMany: true,
      label: "Related Projects",
      name: "relatedProjects",
      relationTo: "projects",
      type: "relationship",
    },
    {
      admin: {
        description: "Testimonials related to this service",
      },
      hasMany: true,
      label: "Testimonials",
      name: "testimonials",
      relationTo: "testimonials",
      type: "relationship",
    },
    {
      admin: {
        description: "Typical delivery time",
      },
      label: "Delivery Time",
      name: "deliveryTime",
      type: "text",
    },
    {
      admin: {
        description: "Current availability of this service",
      },
      defaultValue: "available",
      label: "Availability",
      name: "availability",
      options: [
        { label: "Available", value: "available" },
        { label: "Coming Soon", value: "coming-soon" },
        { label: "Limited", value: "limited" },
        { label: "Not Available", value: "not-available" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Mark as featured service",
      },
      defaultValue: false,
      label: "Featured",
      name: "featured",
      type: "checkbox",
    },
    {
      admin: {
        description: "Show this service on the website",
      },
      defaultValue: true,
      label: "Active",
      name: "active",
      type: "checkbox",
    },
    {
      admin: {
        description: "Order for displaying services (smaller = higher)",
      },
      label: "Display Order",
      name: "displayOrder",
      type: "number",
    },
    {
      admin: {
        description: "Tags to categorize services",
      },
      label: "Tags",
      name: "tags",
      fields: [
        {
          label: "Tag",
          name: "tag",
          required: true,
          type: "text",
        },
      ],
      type: "array",
    },
  ],
  labels: {
    plural: "Services",
    singular: "Service",
  },
  slug: "services",
  trash: true,
  versions: {
    autosave: true,
    drafts: true,
  },
} as CollectionConfig;
