import type { CollectionConfig } from "payload";

export default {
  access: {
    create: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    description: "Manage skills and competencies",
    group: "Content",
    useAsTitle: "name",
  },
  fields: [
    {
      admin: {
        description: "Show this skill in the skills section",
      },
      defaultValue: true,
      label: "Active",
      name: "active",
      type: "checkbox",
    },
    {
      admin: {
        description: "Skill category for organization",
      },
      defaultValue: "frontend",
      label: "Category",
      name: "category",
      options: [
        { label: "Backend", value: "backend" },
        { label: "Database", value: "database" },
        { label: "Design", value: "design" },
        { label: "DevOps", value: "devops" },
        { label: "Frameworks", value: "frameworks" },
        { label: "Frontend", value: "frontend" },
        { label: "Full Stack", value: "fullstack" },
        { label: "Languages", value: "languages" },
        { label: "Mobile", value: "mobile" },
        { label: "Other", value: "other" },
        { label: "Tools", value: "tools" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Certifications related to this skill",
      },
      label: "Certifications",
      name: "certifications",
      fields: [
        {
          label: "Certificate URL",
          name: "certificateUrl",
          type: "text",
        },
        {
          label: "Date Obtained",
          name: "date",
          type: "date",
        },
        {
          label: "Expiry Date",
          name: "expiryDate",
          type: "date",
        },
        {
          label: "Certification Name",
          name: "name",
          required: true,
          type: "text",
        },
        {
          label: "Issuing Organization",
          name: "organization",
          required: true,
          type: "text",
        },
      ],
      type: "array",
    },
    {
      admin: {
        description: "Hexadecimal color for the skill",
      },
      label: "Color",
      name: "color",
      type: "text",
    },
    {
      admin: {
        description: "Brief description of your experience with this skill",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description: "Order for displaying skills (smaller = higher)",
      },
      label: "Display Order",
      name: "displayOrder",
      type: "number",
    },
    {
      admin: {
        description: "Mark as featured skill",
      },
      defaultValue: false,
      label: "Featured",
      name: "featured",
      type: "checkbox",
    },
    {
      admin: {
        description: "Icon class, emoji, or SVG code for the skill",
      },
      label: "Icon",
      name: "icon",
      type: "text",
    },
    {
      admin: {
        description: "Resources used to learn this skill",
      },
      label: "Learning Resources",
      name: "learningResources",
      fields: [
        {
          label: "Resource Type",
          name: "type",
          options: [
            { label: "Book", value: "book" },
            { label: "Course", value: "course" },
            { label: "Documentation", value: "documentation" },
            { label: "Other", value: "other" },
            { label: "Tutorial", value: "tutorial" },
            { label: "Video", value: "video" },
          ],
          required: true,
          type: "select",
        },
        {
          label: "Title",
          name: "title",
          required: true,
          type: "text",
        },
        {
          label: "URL",
          name: "url",
          type: "text",
        },
        {
          label: "Provider",
          name: "provider",
          type: "text",
        },
      ],
      type: "array",
    },
    {
      admin: {
        description: "Your proficiency level in this skill",
      },
      defaultValue: "intermediate",
      label: "Level",
      name: "level",
      options: [
        { label: "Advanced", value: "advanced" },
        { label: "Beginner", value: "beginner" },
        { label: "Expert", value: "expert" },
        { label: "Intermediate", value: "intermediate" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Name of the skill",
      },
      label: "Skill Name",
      name: "name",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Skill level as percentage (1-100)",
      },
      label: "Percentage",
      max: 100,
      min: 1,
      name: "percentage",
      type: "number",
    },
    {
      admin: {
        description: "Projects where this skill was used",
      },
      hasMany: true,
      label: "Projects Used In",
      name: "projectsUsedIn",
      relationTo: "projects",
      type: "relationship",
    },
    {
      admin: {
        description: "Tags to categorize and search skills",
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
        description: "Number of years working with this skill",
      },
      label: "Years of Experience",
      name: "yearsExperience",
      type: "number",
    },
  ],
  slug: "skills",
  versions: {
    drafts: true,
  },
} as CollectionConfig;
