import type { CollectionConfig } from "payload";

export default {
  access: {
    create: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
    read: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
  },
  admin: {
    description: "Manage user accounts and permissions",
    group: "Admin",
    useAsTitle: "email",
  },
  auth: {
    lockTime: 600 * 1000, // 10 minutes
    maxLoginAttempts: 5,
    tokenExpiration: 7200, // 2 hours
    verify: false,
  },
  fields: [
    {
      admin: {
        description: "User's profile picture",
      },
      label: "Avatar",
      name: "avatar",
      relationTo: "media",
      type: "upload",
    },
    {
      admin: {
        description: "Short biography or description",
      },
      label: "Bio",
      name: "bio",
      type: "textarea",
    },
    {
      admin: {
        description: "Name to display in the interface",
      },
      label: "Display Name",
      name: "displayName",
      type: "text",
    },
    {
      admin: {
        description: "User's first name",
      },
      label: "First Name",
      name: "firstName",
      type: "text",
    },
    {
      admin: {
        description: "Last time the user logged in",
        readOnly: true,
      },
      label: "Last Login",
      name: "lastLogin",
      type: "date",
    },
    {
      admin: {
        description: "User's last name",
      },
      label: "Last Name",
      name: "lastName",
      type: "text",
    },
    {
      admin: {
        description: "City, Country (optional)",
      },
      label: "Location",
      name: "location",
      type: "text",
    },
    {
      admin: {
        readOnly: true,
        description: "Total number of logins",
      },
      defaultValue: 0,
      label: "Login Count",
      name: "loginCount",
      type: "number",
    },
    {
      admin: {
        description: "Internal notes about this user (admin only)",
      },
      label: "Notes",
      name: "notes",
      type: "textarea",
    },
    {
      admin: {
        description: "Contact phone number (optional)",
      },
      label: "Phone Number",
      name: "phone",
      type: "text",
    },
    {
      admin: {
        description: "User preferences and settings",
      },
      fields: [
        {
          admin: {
            description: "Receive email notifications",
          },
          defaultValue: true,
          label: "Email Notifications",
          name: "emailNotifications",
          type: "checkbox",
        },
        {
          admin: {
            description: "Preferred interface language",
          },
          defaultValue: "en",
          label: "Language",
          name: "language",
          options: [
            { label: "English", value: "en" },
            { label: "French", value: "fr" },
            { label: "Japanese", value: "jp" },
          ],
          type: "select",
        },
        {
          admin: {
            description: "User's timezone",
          },
          defaultValue: "UTC",
          label: "Timezone",
          name: "timezone",
          type: "text",
        },
      ],
      label: "Preferences",
      name: "preferences",
      type: "group",
    },
    {
      admin: {
        description: "User's role and permissions level",
      },
      defaultValue: "subscriber",
      label: "Role",
      name: "role",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Author", value: "author" },
        { label: "Contributor", value: "contributor" },
        { label: "Editor", value: "editor" },
        { label: "Subscriber", value: "subscriber" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Social media profiles and links",
      },
      fields: [
        {
          admin: {
            description: "Social media platform name",
          },
          label: "Platform",
          name: "platform",
          required: true,
          type: "text",
        },
        {
          admin: {
            description: "Link to social media profile",
          },
          label: "URL",
          name: "url",
          required: true,
          type: "text",
        },
      ],
      label: "Social Links",
      name: "socialLinks",
      type: "array",
    },
    {
      admin: {
        description: "User account status",
      },
      defaultValue: "active",
      label: "User Status",
      name: "userStatus",
      options: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
        { label: "Pending", value: "pending" },
        { label: "Suspended", value: "suspended" },
      ],
      type: "select",
    },
    {
      admin: {
        description: "Personal or professional website URL",
      },
      label: "Website",
      name: "website",
      type: "text",
    },
  ],
  slug: "users",
  versions: {
    drafts: true,
  },
} as CollectionConfig;
