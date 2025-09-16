import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  access: {
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  admin: {
    group: "Settings",
  },
  fields: [
    {
      label: "Site Information",
      name: "siteInfo",
      fields: [
        {
          admin: {
            description: "Name of your website",
          },
          label: "Site Name",
          name: "siteName",
          required: true,
          type: "text",
        },
        {
          admin: {
            description: "Short name for PWA manifest (max 12 characters)",
          },
          label: "Short Name",
          name: "shortName",
          type: "text",
        },
        {
          admin: {
            description: "Brief description of your website",
          },
          label: "Site Description",
          name: "siteDescription",
          type: "textarea",
        },
        {
          admin: {
            description: "Main logo for your website",
          },
          label: "Site Logo",
          name: "siteLogo",
          relationTo: "media",
          type: "upload",
        },
        {
          admin: {
            description: "Favicon for your website",
          },
          label: "Favicon",
          name: "favicon",
          relationTo: "media",
          type: "upload",
        },
        {
          admin: {
            description: "Theme color for browser UI (hex code)",
          },
          label: "Theme Color",
          name: "themeColor",
          type: "text",
        },
        {
          admin: {
            description: "Background color for splash screen (hex code)",
          },
          label: "Background Color",
          name: "backgroundColor",
          type: "text",
        },
        {
          admin: {
            description: "How the app should be displayed",
          },
          defaultValue: "standalone",
          label: "Display Mode",
          name: "displayMode",
          options: [
            { label: "Browser", value: "browser" },
            { label: "Fullscreen", value: "fullscreen" },
            { label: "Minimal UI", value: "minimal-ui" },
            { label: "Standalone", value: "standalone" },
          ],
          type: "select",
        },
        {
          admin: {
            description: "URL to load when app is launched",
          },
          defaultValue: "/",
          label: "Start URL",
          name: "startUrl",
          type: "text",
        },
        {
          admin: {
            description: "Navigation scope of the app",
          },
          defaultValue: "/",
          label: "Scope",
          name: "scope",
          type: "text",
        },
        {
          admin: {
            description: "Preferred orientation for the app",
          },
          defaultValue: "any",
          label: "Orientation",
          name: "orientation",
          options: [
            { label: "Any", value: "any" },
            { label: "Landscape", value: "landscape" },
            { label: "Portrait", value: "portrait" },
          ],
          type: "select",
        },
      ],
      type: "group",
    },
    {
      label: "Contact Information",
      name: "contactInfo",
      fields: [
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
            description: "City, Country",
          },
          label: "Location",
          name: "location",
          type: "text",
        },
      ],
      type: "group",
    },
    {
      label: "Social Media",
      name: "socialMedia",
      fields: [
        {
          admin: {
            description: "Default social networks to show in footer/header",
          },
          hasMany: true,
          label: "Default Social Networks",
          name: "defaultSocialNetworks",
          relationTo: "social-networks",
          type: "relationship",
        },
      ],
      type: "group",
    },
    {
      label: "SEO Settings",
      name: "seoSettings",
      fields: [
        {
          admin: {
            description: "Default title for pages without specific SEO title",
          },
          label: "Default Meta Title",
          name: "defaultMetaTitle",
          type: "text",
        },
        {
          admin: {
            description:
              "Default description for pages without specific SEO description",
          },
          label: "Default Meta Description",
          name: "defaultMetaDescription",
          type: "textarea",
        },
        {
          admin: {
            description: "Default keywords for SEO",
          },
          label: "Default Keywords",
          name: "defaultKeywords",
          type: "text",
        },
        {
          admin: {
            description: "Google Analytics tracking ID",
          },
          label: "Google Analytics ID",
          name: "googleAnalyticsId",
          type: "text",
        },
        {
          admin: {
            description: "Google Tag Manager ID",
          },
          label: "Google Tag Manager ID",
          name: "googleTagManagerId",
          type: "text",
        },
      ],
      type: "group",
    },
    {
      label: "Appearance",
      name: "appearance",
      fields: [
        {
          admin: {
            description: "Primary brand color (hex code)",
          },
          label: "Primary Color",
          name: "primaryColor",
          type: "text",
        },
        {
          admin: {
            description: "Secondary brand color (hex code)",
          },
          label: "Secondary Color",
          name: "secondaryColor",
          type: "text",
        },
        {
          admin: {
            description: "Accent color (hex code)",
          },
          label: "Accent Color",
          name: "accentColor",
          type: "text",
        },
        {
          admin: {
            description: "Main font family for the website",
          },
          defaultValue: "inter",
          label: "Font Family",
          name: "fontFamily",
          options: [
            { label: "Inter", value: "inter" },
            { label: "Lato", value: "lato" },
            { label: "Montserrat", value: "montserrat" },
            { label: "Open Sans", value: "open-sans" },
            { label: "Poppins", value: "poppins" },
            { label: "Roboto", value: "roboto" },
          ],
          type: "select",
        },
      ],
      type: "group",
    },
    {
      label: "Navigation",
      name: "navigation",
      fields: [
        {
          admin: {
            description: "Pages to show in main navigation",
          },
          hasMany: true,
          label: "Main Navigation",
          name: "mainNavigation",
          relationTo: "pages",
          type: "relationship",
        },
        {
          admin: {
            description: "Pages to show in footer navigation",
          },
          hasMany: true,
          label: "Footer Navigation",
          name: "footerNavigation",
          relationTo: "pages",
          type: "relationship",
        },
      ],
      type: "group",
    },
  ],
  slug: "site-settings",
  versions: {
    drafts: true,
  },
};
