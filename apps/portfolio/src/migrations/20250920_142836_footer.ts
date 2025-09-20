import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_footer_blocks_license_license_type" AS ENUM('apache', 'gpl', 'mit', 'proprietary');
  CREATE TABLE "footer_blocks_brand" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"app_name" varchar NOT NULL,
  	"logo_id" integer,
  	"block_name" varchar
  );

  CREATE TABLE "footer_blocks_license" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"license_type" "enum_footer_blocks_license_license_type" DEFAULT 'mit',
  	"license_text" varchar,
  	"license_url" varchar,
  	"block_name" varchar
  );

  CREATE TABLE "footer_blocks_spacer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"spacer" varchar DEFAULT 'spacer',
  	"block_name" varchar
  );

  CREATE TABLE "footer_blocks_version" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"version_number" varchar NOT NULL,
  	"changelog_url" varchar NOT NULL,
  	"link_text" varchar DEFAULT 'View changelog',
  	"block_name" varchar
  );

  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );

  ALTER TABLE "media" ADD COLUMN "prefix" varchar DEFAULT 'portfolio';
  ALTER TABLE "_media_v" ADD COLUMN "version_prefix" varchar DEFAULT 'portfolio';
  ALTER TABLE "footer_blocks_brand" ADD CONSTRAINT "footer_blocks_brand_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_brand" ADD CONSTRAINT "footer_blocks_brand_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_license" ADD CONSTRAINT "footer_blocks_license_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_spacer" ADD CONSTRAINT "footer_blocks_spacer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_version" ADD CONSTRAINT "footer_blocks_version_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "footer_blocks_brand_order_idx" ON "footer_blocks_brand" USING btree ("_order");
  CREATE INDEX "footer_blocks_brand_parent_id_idx" ON "footer_blocks_brand" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_brand_path_idx" ON "footer_blocks_brand" USING btree ("_path");
  CREATE INDEX "footer_blocks_brand_logo_idx" ON "footer_blocks_brand" USING btree ("logo_id");
  CREATE INDEX "footer_blocks_license_order_idx" ON "footer_blocks_license" USING btree ("_order");
  CREATE INDEX "footer_blocks_license_parent_id_idx" ON "footer_blocks_license" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_license_path_idx" ON "footer_blocks_license" USING btree ("_path");
  CREATE INDEX "footer_blocks_spacer_order_idx" ON "footer_blocks_spacer" USING btree ("_order");
  CREATE INDEX "footer_blocks_spacer_parent_id_idx" ON "footer_blocks_spacer" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_spacer_path_idx" ON "footer_blocks_spacer" USING btree ("_path");
  CREATE INDEX "footer_blocks_version_order_idx" ON "footer_blocks_version" USING btree ("_order");
  CREATE INDEX "footer_blocks_version_parent_id_idx" ON "footer_blocks_version" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_version_path_idx" ON "footer_blocks_version" USING btree ("_path");`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "footer_blocks_brand" CASCADE;
  DROP TABLE "footer_blocks_license" CASCADE;
  DROP TABLE "footer_blocks_spacer" CASCADE;
  DROP TABLE "footer_blocks_version" CASCADE;
  DROP TABLE "footer" CASCADE;
  ALTER TABLE "media" DROP COLUMN "prefix";
  ALTER TABLE "_media_v" DROP COLUMN "version_prefix";
  DROP TYPE "public"."enum_footer_blocks_license_license_type";`);
}
