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
      admin: {
        description: "Select blog posts to display in this section",
      },
      hasMany: true,
      label: "Blog Posts",
      name: "blogPosts",
      relationTo: "blog-posts",
      type: "relationship",
    },
    {
      admin: {
        description: "Description of the blog section",
      },
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      fields: [
        {
          admin: {
            description: "Show only featured blog posts",
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
            description: "Number of posts per row (for grid/cards layout)",
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
            description: "How to display the blog posts",
          },
          defaultValue: "grid",
          label: "Layout",
          name: "layout",
          options: [
            { label: "Cards", value: "cards" },
            { label: "Carousel", value: "carousel" },
            { label: "Grid", value: "grid" },
            { label: "List", value: "list" },
            { label: "Masonry", value: "masonry" },
          ],
          type: "select",
        },
        {
          admin: {
            description:
              "Maximum number of blog posts to display (leave empty for all)",
          },
          label: "Limit Number",
          name: "limit",
          type: "number",
        },
        {
          admin: {
            description: "Show only published blog posts",
          },
          defaultValue: true,
          label: "Show Published Only",
          name: "publishedOnly",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display post authors",
          },
          defaultValue: true,
          label: "Show Authors",
          name: "showAuthors",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display post categories",
          },
          defaultValue: true,
          label: "Show Categories",
          name: "showCategories",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display publication dates",
          },
          defaultValue: true,
          label: "Show Publication Dates",
          name: "showDates",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display post excerpts",
          },
          defaultValue: true,
          label: "Show Excerpts",
          name: "showExcerpts",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display featured images",
          },
          defaultValue: true,
          label: "Show Featured Images",
          name: "showFeaturedImages",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display estimated reading time",
          },
          defaultValue: true,
          label: "Show Reading Time",
          name: "showReadingTime",
          type: "checkbox",
        },
        {
          admin: {
            description: "Display post tags",
          },
          defaultValue: false,
          label: "Show Tags",
          name: "showTags",
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
            description: "Allow users to filter blog posts",
          },
          defaultValue: false,
          label: "Enable Filtering",
          name: "enableFiltering",
          type: "checkbox",
        },
        {
          admin: {
            condition: (data) => data.enableFiltering,
            description: "Allow filtering by author",
          },
          defaultValue: false,
          label: "Filter by Author",
          name: "filterByAuthor",
          type: "checkbox",
        },
        {
          admin: {
            condition: (data) => data.enableFiltering,
            description: "Allow filtering by category",
          },
          defaultValue: true,
          label: "Filter by Category",
          name: "filterByCategory",
          type: "checkbox",
        },
        {
          admin: {
            condition: (data) => data.enableFiltering,
            description: "Allow filtering by publication date",
          },
          defaultValue: true,
          label: "Filter by Date",
          name: "filterByDate",
          type: "checkbox",
        },
        {
          admin: {
            condition: (data) => data.enableFiltering,
            description: "Allow filtering by tags",
          },
          defaultValue: false,
          label: "Filter by Tags",
          name: "filterByTags",
          type: "checkbox",
        },
      ],
      label: "Filter Options",
      name: "filterOptions",
      type: "group",
    },
    {
      admin: {
        description: "Main title of the blog section",
      },
      label: "Title",
      name: "heading",
      required: true,
      type: "text",
    },
    {
      fields: [
        {
          admin: {
            description: "Enable pagination for blog posts",
          },
          defaultValue: true,
          label: "Enable Pagination",
          name: "enabled",
          type: "checkbox",
        },
        {
          admin: {
            condition: (data) => data.enabled,
            description: "Number of posts per page",
          },
          defaultValue: 6,
          label: "Posts per Page",
          name: "postsPerPage",
          type: "number",
        },
        {
          admin: {
            description: "Show 'Load More' button instead of page numbers",
            condition: (data) => data.enabled,
          },
          defaultValue: false,
          label: "Show Load More Button",
          name: "showLoadMore",
          type: "checkbox",
        },
      ],
      label: "Pagination",
      name: "pagination",
      type: "group",
    },
    {
      fields: [
        {
          admin: {
            condition: (data) => data.showCta,
            description: "Call to action button link",
          },
          defaultValue: "/blog",
          label: "CTA Link",
          name: "link",
          type: "text",
        },
        {
          admin: {
            description: "Show call to action button",
          },
          defaultValue: false,
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
          defaultValue: "View All Posts",
          label: "CTA Text",
          name: "text",
          type: "text",
        },
      ],
      label: "Call to Action",
      name: "cta",
      type: "group",
    },
  ],
  labels: {
    plural: "Blog Sections",
    singular: "Blog Section",
  },
  slug: "blog-posts",
} as Block;
