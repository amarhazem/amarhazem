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
    description: "Manage education and certifications",
    group: "Content",
    useAsTitle: "degree",
  },
  fields: [
    {
      admin: {
        description: "Academic achievements, honors, or awards",
      },
      label: "Achievements",
      name: "achievements",
      fields: [
        {
          label: "Achievement",
          name: "achievement",
          required: true,
          type: "text",
        },
        {
          label: "Date",
          name: "date",
          type: "date",
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
        description: "Show this education on the website",
      },
      defaultValue: true,
      label: "Active",
      name: "active",
      type: "checkbox",
    },
    {
      admin: {
        description: "Image of the certificate or degree",
      },
      label: "Certificate/Degree Image",
      name: "certificateImage",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "Key courses or subjects studied",
      },
      label: "Relevant Coursework",
      name: "coursework",
      fields: [
        {
          label: "Course Name",
          name: "courseName",
          required: true,
          type: "text",
        },
        {
          label: "Description",
          name: "description",
          type: "textarea",
        },
        {
          label: "Grade",
          name: "grade",
          type: "text",
        },
      ],
      type: "array",
    },
    {
      admin: {
        description: "Currently pursuing this education",
      },
      defaultValue: false,
      label: "Current",
      name: "current",
      type: "checkbox",
    },
    {
      admin: {
        description: "Degree, diploma, or qualification name",
      },
      label: "Degree/Qualification",
      name: "degree",
      required: true,
      type: "text",
    },
    {
      admin: {
        description: "Description of the education program",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description: "Order for displaying education (smaller = higher)",
      },
      label: "Display Order",
      name: "displayOrder",
      type: "number",
    },
    {
      admin: {
        description: "Type of education or qualification",
      },
      label: "Education Type",
      name: "educationType",
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
        description: "End date or graduation date",
      },
      label: "End Date",
      name: "endDate",
      type: "date",
    },
    {
      admin: {
        description: "Mark as featured education",
      },
      defaultValue: false,
      label: "Featured",
      name: "featured",
      type: "checkbox",
    },
    {
      admin: {
        description: "Field or major of study",
      },
      label: "Field of Study",
      name: "fieldOfStudy",
      type: "text",
    },
    {
      admin: {
        description: "Final grade, GPA, or result",
      },
      label: "Grade/GPA",
      name: "grade",
      type: "text",
    },
    {
      admin: {
        description: "Educational institution where this degree was obtained",
      },
      label: "Institution",
      name: "institution",
      relationTo: "institutions",
      required: true,
      type: "relationship",
    },
    {
      admin: {
        description: "City, Country of the institution",
      },
      label: "Location",
      name: "location",
      type: "text",
    },
    {
      admin: {
        description: "Start date of the education program",
      },
      label: "Start Date",
      name: "startDate",
      type: "date",
    },
    {
      admin: {
        description: "Projects completed during this education",
      },
      hasMany: true,
      label: "Projects",
      name: "projects",
      relationTo: "projects",
      type: "relationship",
    },
    {
      admin: {
        description: "Skills acquired during this education",
      },
      hasMany: true,
      label: "Skills Learned",
      name: "skillsLearned",
      relationTo: "skills",
      type: "relationship",
    },
    {
      admin: {
        description: "Tags to categorize education",
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
    plural: "Education",
    singular: "Education",
  },
  slug: "education",
  trash: true,
  versions: {
    autosave: true,
    drafts: true,
  },
} as CollectionConfig;
