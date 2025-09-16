import type { Block } from "payload";

export default {
  fields: [
    {
      admin: {
        description: "Physical address (optional)",
      },
      label: "Address",
      name: "address",
      type: "textarea",
    },
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
        description: "Contact form configuration",
      },
      fields: [
        {
          admin: {
            description: "Description text above the form",
          },
          label: "Form Description",
          name: "description",
          type: "textarea",
        },
        {
          admin: {
            description: "Show contact form in this section",
          },
          defaultValue: true,
          label: "Enable Contact Form",
          name: "enabled",
          type: "checkbox",
        },
        {
          admin: {
            description: "Title for the contact form",
          },
          defaultValue: "Get in Touch",
          label: "Form Title",
          name: "title",
          type: "text",
        },
      ],
      label: "Contact Form",
      name: "contactForm",
      type: "group",
    },
    {
      admin: {
        description: "Description of the contact section",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      admin: {
        description: "Contact email address",
      },
      label: "Email",
      name: "email",
      type: "text",
    },
    {
      admin: {
        description: "Main title of the contact section",
      },
      label: "Title",
      name: "heading",
      type: "text",
    },
    {
      admin: {
        description: "Social media and contact links",
      },
      fields: [
        {
          admin: {
            description: "URL of the social link",
          },
          label: "Link URL",
          name: "href",
          required: true,
          type: "text",
        },
        {
          admin: {
            description: "Icon class or emoji for the link",
          },
          label: "Icon",
          name: "icon",
          type: "text",
        },
        {
          admin: {
            description: "Display text for the link",
          },
          label: "Link Label",
          name: "label",
          required: true,
          type: "text",
        },
        {
          admin: {
            description: "Open link in a new tab",
          },
          defaultValue: true,
          label: "Open in New Tab",
          name: "openInNewTab",
          type: "checkbox",
        },
      ],
      label: "Social Links",
      name: "links",
      type: "array",
    },
    {
      admin: {
        description: "Contact phone number (optional)",
      },
      label: "Phone",
      name: "phone",
      type: "text",
    },
  ],
  labels: {
    plural: "Contact Sections",
    singular: "Contact Section",
  },
  slug: "contact",
} as Block;
