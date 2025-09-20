import { postgresAdapter } from "@payloadcms/db-postgres";
import { resendAdapter } from "@payloadcms/email-resend";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";
import Brand from "./blocks/brand";
import Hero from "./blocks/hero";
import License from "./blocks/license";
import Spacer from "./blocks/spacer";
import Version from "./blocks/version";
import Apps from "./collections/apps";
import BlogPosts from "./collections/blog-posts";
import Categories from "./collections/categories";
import Companies from "./collections/companies";
import Education from "./collections/education";
import Experience from "./collections/experience";
import Institutions from "./collections/institutions";
import Media from "./collections/media";
import Pages from "./collections/pages";
import Projects from "./collections/projects";
import Services from "./collections/services";
import Skills from "./collections/skills";
import SocialNetworks from "./collections/social-networks";
import Testimonials from "./collections/testimonials";
import Users from "./collections/users";
import Footer from "./globals/footer";
import SiteSettings from "./globals/site-settings";
import env from "./utils/env";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
  },
  blocks: [Brand, Hero, License, Spacer, Version],
  collections: [
    Apps,
    BlogPosts,
    Categories,
    Companies,
    Education,
    Experience,
    Institutions,
    Media,
    Pages,
    Projects,
    Services,
    Skills,
    SocialNetworks,
    Testimonials,
    Users,
  ],
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URL,
    },
  }),
  editor: lexicalEditor(),
  email: resendAdapter({
    defaultFromAddress: "contact@amarhazem.com",
    defaultFromName: "Amar Hazem",
    apiKey: env.RESEND_API_KEY,
  }),
  globals: [Footer, SiteSettings],
  plugins: [
    payloadCloudPlugin(),
    vercelBlobStorage({
      collections: {
        media: {
          prefix: "portfolio",
        },
      },
      token: env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  secret: env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
