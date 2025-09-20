import type { CollectionConfig } from "payload";

export default {
  access: {
    create: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    description: "Manage client testimonials and reviews",
    group: "Content",
    useAsTitle: "clientName",
  },
  fields: [
    {
      admin: {
        description: "Full name of the client",
      },
      label: "Client Name",
      name: "clientName",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Profile photo of the client",
      },
      label: "Client Photo",
      name: "clientPhoto",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "Job title or position of the client",
      },
      label: "Client Position",
      name: "clientPosition",
      type: "text",
    },
    {
      admin: {
        description: "Company name where the client works",
      },
      label: "Company",
      name: "company",
      type: "text",
    },
    {
      admin: {
        description: "Company logo (optional)",
      },
      label: "Company Logo",
      name: "companyLogo",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "Company website URL (optional)",
      },
      label: "Company Website",
      name: "companyWebsite",
      type: "text",
    },
    {
      admin: {
        description: "The testimonial text from the client",
      },
      label: "Testimonial",
      name: "testimonial",
      required: true,
      type: "textarea",
    },
    {
      admin: {
        description: "Client rating (1-5 stars)",
      },
      defaultValue: "5",
      label: "Rating",
      name: "rating",
      options: [
        { label: "1 Star", value: "1" },
        { label: "2 Stars", value: "2" },
        { label: "3 Stars", value: "3" },
        { label: "4 Stars", value: "4" },
        { label: "5 Stars", value: "5" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Related project (if applicable)",
      },
      label: "Project",
      name: "project",
      relationTo: "projects",
      type: "relationship",
    },
    {
      admin: {
        description: "Link to the project or case study",
      },
      label: "Project Link",
      name: "projectLink",
      type: "text",
    },
    {
      admin: {
        description: "Date when the testimonial was given",
      },
      label: "Testimonial Date",
      name: "date",
      type: "date",
    },
    {
      admin: {
        description: "Type of service provided",
      },
      label: "Service Type",
      name: "serviceType",
      options: [
        { label: "Consulting", value: "consulting" },
        { label: "Maintenance", value: "maintenance" },
        { label: "Mobile Development", value: "mobile-development" },
        { label: "Other", value: "other" },
        { label: "UI/UX Design", value: "ui-ux-design" },
        { label: "Web Development", value: "web-development" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Duration of the project",
      },
      label: "Project Duration",
      name: "projectDuration",
      type: "text",
    },
    {
      admin: {
        description: "Project budget range (optional)",
      },
      label: "Project Budget",
      name: "projectBudget",
      options: [
        { label: "$5,000 - $10,000", value: "5k-10k" },
        { label: "$10,000 - $25,000", value: "10k-25k" },
        { label: "$25,000 - $50,000", value: "25k-50k" },
        { label: "$50,000 - $100,000", value: "50k-100k" },
        { label: "Not disclosed", value: "not-disclosed" },
        { label: "Over $100,000", value: "over-100k" },
        { label: "Under $5,000", value: "under-5k" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Mark as featured testimonial",
      },
      defaultValue: false,
      label: "Featured",
      name: "featured",
      type: "checkbox",
    },
    {
      admin: {
        description: "Show this testimonial on the website",
      },
      defaultValue: true,
      label: "Published",
      name: "published",
      type: "checkbox",
    },
    {
      admin: {
        description: "Order for displaying testimonials (smaller = higher)",
      },
      label: "Display Order",
      name: "displayOrder",
      type: "number",
    },
    {
      admin: {
        description: "Social proof and verification details",
      },
      fields: [
        {
          admin: {
            description: "Client's LinkedIn profile URL",
          },
          label: "LinkedIn Profile",
          name: "linkedinProfile",
          type: "text",
        },
        {
          admin: {
            description: "Client's Twitter handle",
          },
          label: "Twitter Handle",
          name: "twitterHandle",
          type: "text",
        },
        {
          admin: {
            description: "Mark if testimonial is verified",
          },
          defaultValue: false,
          label: "Verification Status",
          name: "verified",
          type: "checkbox",
        },
      ],
      label: "Social Proof",
      name: "socialProof",
      type: "group",
    },
    {
      admin: {
        description: "Tags to categorize testimonials",
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
  slug: "testimonials",
  versions: {
    drafts: true,
  },
} as CollectionConfig;
