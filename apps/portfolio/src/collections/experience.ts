import type { CollectionConfig } from "payload";

export default {
  access: {
    create: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    description: "Manage work experience and employment history",
    group: "Content",
    useAsTitle: "jobTitle",
  },
  fields: [
    {
      admin: {
        description: "Key achievements in this role",
      },
      fields: [
        {
          label: "Achievement",
          name: "achievement",
          required: true,
          type: "text",
        },
        {
          label: "Description",
          name: "description",
          type: "textarea",
        },
        {
          admin: {
            description: "Quantifiable impact",
          },
          label: "Impact",
          name: "impact",
          type: "text",
        },
      ],
      label: "Achievements",
      name: "achievements",
      type: "array",
    },
    {
      admin: {
        description: "Show this experience on the website",
      },
      defaultValue: true,
      label: "Active",
      name: "active",
      type: "checkbox",
    },
    {
      admin: {
        description: "Company where you worked",
      },
      label: "Company",
      name: "company",
      relationTo: "companies",
      type: "relationship",
    },
    {
      admin: {
        description: "Currently working in this position",
      },
      defaultValue: false,
      label: "Current",
      name: "current",
      type: "checkbox",
    },
    {
      admin: {
        description: "Brief description of the role",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description:
          "Detailed description of responsibilities and achievements",
      },
      label: "Detailed Description",
      name: "detailedDescription",
      type: "richText",
    },
    {
      admin: {
        description: "Order for displaying experience (smaller = higher)",
      },
      label: "Display Order",
      name: "displayOrder",
      type: "number",
    },
    {
      admin: {
        description: "End date of employment",
      },
      label: "End Date",
      name: "endDate",
      type: "date",
    },
    {
      admin: {
        description: "Type of employment",
      },
      label: "Employment Type",
      name: "employmentType",
      options: [
        { label: "Consulting", value: "consulting" },
        { label: "Contract", value: "contract" },
        { label: "Freelance", value: "freelance" },
        { label: "Full-time", value: "full-time" },
        { label: "Internship", value: "internship" },
        { label: "Other", value: "other" },
        { label: "Part-time", value: "part-time" },
        { label: "Volunteer", value: "volunteer" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Mark as featured experience",
      },
      defaultValue: false,
      label: "Featured",
      name: "featured",
      type: "checkbox",
    },
    {
      admin: {
        description: "Job title or position",
      },
      label: "Job Title",
      name: "jobTitle",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Work location (City, Country or Remote)",
      },
      label: "Location",
      name: "location",
      type: "text",
    },
    {
      admin: {
        description: "Projects worked on in this role",
      },
      hasMany: true,
      label: "Projects",
      name: "projects",
      relationTo: "projects",
      type: "relationship",
    },
    {
      admin: {
        description: "Reason for leaving this position (optional)",
      },
      label: "Reason for Leaving",
      name: "reasonForLeaving",
      type: "text",
    },
    {
      admin: {
        description: "Professional references from this experience",
      },
      label: "References",
      name: "references",
      fields: [
        {
          label: "Email",
          name: "email",
          type: "text",
        },
        {
          label: "Name",
          name: "name",
          required: true,
          type: "text",
        },
        {
          label: "Phone",
          name: "phone",
          type: "text",
        },
        {
          label: "Position",
          name: "position",
          type: "text",
        },
      ],
      type: "array",
    },
    {
      admin: {
        description: "Work arrangement",
      },
      label: "Remote Work",
      name: "remoteWork",
      options: [
        { label: "Hybrid", value: "hybrid" },
        { label: "On-site", value: "on-site" },
        { label: "Remote", value: "remote" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Who you reported to",
      },
      label: "Reporting To",
      name: "reportingTo",
      type: "text",
    },
    {
      admin: {
        description: "Key responsibilities in this role",
      },
      fields: [
        {
          label: "Description",
          name: "description",
          type: "textarea",
        },
        {
          label: "Responsibility",
          name: "responsibility",
          required: true,
          type: "text",
        },
      ],
      label: "Responsibilities",
      name: "responsibilities",
      type: "array",
    },
    {
      admin: {
        description: "Salary range (optional, e.g. $80k-100k)",
      },
      label: "Salary Range",
      name: "salaryRange",
      type: "text",
    },
    {
      admin: {
        description: "Skills developed during this experience",
      },
      hasMany: true,
      label: "Skills Developed",
      name: "skillsDeveloped",
      relationTo: "skills",
      type: "relationship",
    },
    {
      admin: {
        description: "Start date of employment",
      },
      label: "Start Date",
      name: "startDate",
      required: true,
      type: "date",
    },
    {
      admin: {
        description: "Size of the team you worked with",
      },
      label: "Team Size",
      name: "teamSize",
      type: "number",
    },
    {
      admin: {
        description: "Technologies and tools used in this role",
      },
      hasMany: true,
      label: "Technologies Used",
      name: "technologiesUsed",
      relationTo: "skills",
      type: "relationship",
    },
    {
      admin: {
        description: "Tags to categorize experience",
      },
      label: "Tags",
      name: "tags",
      fields: [
        {
          label: "Tag",
          name: "tag",
          type: "text",
          required: true,
        },
      ],
      type: "array",
    },
  ],
  labels: {
    plural: "Experience",
    singular: "Experience",
  },
  slug: "experience",
  versions: {
    drafts: true,
  },
} as CollectionConfig;
