import type { CollectionConfig } from "payload";

export default {
  access: {
    create: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    description: "Manage companies and organizations",
    group: "Content",
    useAsTitle: "name",
  },
  fields: [
    {
      admin: {
        description: "Show this company on the website",
      },
      defaultValue: true,
      label: "Active",
      name: "active",
      type: "checkbox",
    },
    {
      admin: {
        description: "Number of employees",
      },
      label: "Company Size",
      name: "companySize",
      options: [
        { label: "1-10 employees", value: "1-10" },
        { label: "11-50 employees", value: "11-50" },
        { label: "51-200 employees", value: "51-200" },
        { label: "201-500 employees", value: "201-500" },
        { label: "501-1000 employees", value: "501-1000" },
        { label: "1000+ employees", value: "1000+" },
      ],
      type: "select",
    },
    {
      fields: [
        {
          admin: {
            description: "Physical address",
          },
          label: "Address",
          name: "address",
          type: "textarea",
        },
        {
          admin: {
            description: "Main contact email",
          },
          label: "Email",
          name: "email",
          type: "text",
        },
        {
          admin: {
            description: "Contact phone number",
          },
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
        description: "Brief description of the company",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description: "Detailed company information",
      },
      label: "Detailed Description",
      name: "detailedDescription",
      type: "richText",
    },
    {
      admin: {
        description: "Mark as featured company",
      },
      defaultValue: false,
      label: "Featured",
      name: "featured",
      type: "checkbox",
    },
    {
      admin: {
        description: "Year the company was founded",
      },
      label: "Founded Year",
      name: "foundedYear",
      type: "number",
    },
    {
      admin: {
        description: "Company headquarters location",
      },
      label: "Headquarters",
      name: "headquarters",
      type: "text",
    },
    {
      admin: {
        description: "Company industry sector",
      },
      label: "Industry",
      name: "industry",
      options: [
        { label: "Consulting", value: "consulting" },
        { label: "E-commerce", value: "ecommerce" },
        { label: "Education", value: "education" },
        { label: "Finance", value: "finance" },
        { label: "Government", value: "government" },
        { label: "Healthcare", value: "healthcare" },
        { label: "Manufacturing", value: "manufacturing" },
        { label: "Media", value: "media" },
        { label: "Non-profit", value: "non-profit" },
        { label: "Other", value: "other" },
        { label: "Real Estate", value: "real-estate" },
        { label: "Technology", value: "technology" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Company logo",
      },
      label: "Logo",
      name: "logo",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "Name of the company or organization",
      },
      label: "Company Name",
      name: "name",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Projects completed for this company",
      },
      hasMany: true,
      label: "Projects",
      name: "projects",
      relationTo: "projects",
      type: "relationship",
    },
    {
      admin: {
        description: "URL-friendly version of the company name",
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
        description: "Social media links",
      },
      fields: [
        {
          admin: {
            description: "Facebook page URL",
          },
          label: "Facebook",
          name: "facebook",
          type: "text",
        },
        {
          admin: {
            description: "Instagram profile URL",
          },
          label: "Instagram",
          name: "instagram",
          type: "text",
        },
        {
          admin: {
            description: "LinkedIn company page URL",
          },
          label: "LinkedIn",
          name: "linkedin",
          type: "text",
        },
        {
          admin: {
            description: "Twitter handle or URL",
          },
          label: "Twitter",
          name: "twitter",
          type: "text",
        },
      ],
      label: "Social Media",
      name: "socialMedia",
      type: "group",
    },
    {
      admin: {
        description: "Tags to categorize companies",
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
        description: "Testimonials from this company",
      },
      hasMany: true,
      label: "Testimonials",
      name: "testimonials",
      relationTo: "testimonials",
      type: "relationship",
    },
    {
      admin: {
        description: "Company website URL",
      },
      label: "Website",
      name: "website",
      type: "text",
    },
  ],
  slug: "companies",
  versions: {
    drafts: true,
  },
} as CollectionConfig;
