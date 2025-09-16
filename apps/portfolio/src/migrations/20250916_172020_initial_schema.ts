import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_apps_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__apps_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_blog_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__blog_posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_categories_category_type" AS ENUM('blog', 'general', 'project', 'service', 'skill');
  CREATE TYPE "public"."enum_categories_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__categories_v_version_category_type" AS ENUM('blog', 'general', 'project', 'service', 'skill');
  CREATE TYPE "public"."enum__categories_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_companies_company_size" AS ENUM('1-10', '11-50', '51-200', '201-500', '501-1000', '1000+');
  CREATE TYPE "public"."enum_companies_industry" AS ENUM('consulting', 'ecommerce', 'education', 'finance', 'government', 'healthcare', 'manufacturing', 'media', 'non-profit', 'other', 'real-estate', 'technology');
  CREATE TYPE "public"."enum_companies_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__companies_v_version_company_size" AS ENUM('1-10', '11-50', '51-200', '201-500', '501-1000', '1000+');
  CREATE TYPE "public"."enum__companies_v_version_industry" AS ENUM('consulting', 'ecommerce', 'education', 'finance', 'government', 'healthcare', 'manufacturing', 'media', 'non-profit', 'other', 'real-estate', 'technology');
  CREATE TYPE "public"."enum__companies_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_education_education_type" AS ENUM('associate', 'bachelor', 'bootcamp', 'certificate', 'diploma', 'master', 'online-course', 'other', 'phd', 'workshop');
  CREATE TYPE "public"."enum_education_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__education_v_version_education_type" AS ENUM('associate', 'bachelor', 'bootcamp', 'certificate', 'diploma', 'master', 'online-course', 'other', 'phd', 'workshop');
  CREATE TYPE "public"."enum__education_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_experience_employment_type" AS ENUM('consulting', 'contract', 'freelance', 'full-time', 'internship', 'other', 'part-time', 'volunteer');
  CREATE TYPE "public"."enum_experience_remote_work" AS ENUM('hybrid', 'on-site', 'remote');
  CREATE TYPE "public"."enum_experience_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__experience_v_version_employment_type" AS ENUM('consulting', 'contract', 'freelance', 'full-time', 'internship', 'other', 'part-time', 'volunteer');
  CREATE TYPE "public"."enum__experience_v_version_remote_work" AS ENUM('hybrid', 'on-site', 'remote');
  CREATE TYPE "public"."enum__experience_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_institutions_social_media_platform" AS ENUM('facebook', 'instagram', 'linkedin', 'twitter', 'youtube');
  CREATE TYPE "public"."enum_institutions_institution_size" AS ENUM('enterprise', 'large', 'medium', 'startup', 'small');
  CREATE TYPE "public"."enum_institutions_institution_type" AS ENUM('company', 'educational', 'government', 'non-profit', 'organization', 'research', 'startup', 'university');
  CREATE TYPE "public"."enum_institutions_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__institutions_v_version_social_media_platform" AS ENUM('facebook', 'instagram', 'linkedin', 'twitter', 'youtube');
  CREATE TYPE "public"."enum__institutions_v_version_institution_size" AS ENUM('enterprise', 'large', 'medium', 'startup', 'small');
  CREATE TYPE "public"."enum__institutions_v_version_institution_type" AS ENUM('company', 'educational', 'government', 'non-profit', 'organization', 'research', 'startup', 'university');
  CREATE TYPE "public"."enum__institutions_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_media_category" AS ENUM('documents', 'icons', 'images', 'logos', 'other', 'videos');
  CREATE TYPE "public"."enum_media_usage_rights" AS ENUM('all-rights', 'creative-commons', 'custom', 'fair-use', 'public-domain');
  CREATE TYPE "public"."enum_media_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__media_v_version_category" AS ENUM('documents', 'icons', 'images', 'logos', 'other', 'videos');
  CREATE TYPE "public"."enum__media_v_version_usage_rights" AS ENUM('all-rights', 'creative-commons', 'custom', 'fair-use', 'public-domain');
  CREATE TYPE "public"."enum__media_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_pages_blocks_about_key_skills_level" AS ENUM('advanced', 'beginner', 'expert', 'intermediate');
  CREATE TYPE "public"."enum_pages_blocks_about_cta_style" AS ENUM('outlined', 'primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_about_layout_content_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_about_layout_image_position" AS ENUM('bottom', 'left', 'right', 'top');
  CREATE TYPE "public"."enum_pages_blocks_blog_posts_display_options_items_per_row" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_blog_posts_display_options_layout" AS ENUM('cards', 'carousel', 'grid', 'list', 'masonry');
  CREATE TYPE "public"."enum_pages_blocks_blog_posts_cta_style" AS ENUM('outlined', 'primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_education_filter_options_education_types" AS ENUM('associate', 'bachelor', 'bootcamp', 'certificate', 'diploma', 'master', 'online-course', 'other', 'phd', 'workshop');
  CREATE TYPE "public"."enum_pages_blocks_education_display_options_items_per_row" AS ENUM('1', '2', '3');
  CREATE TYPE "public"."enum_pages_blocks_education_display_options_layout" AS ENUM('cards', 'grid', 'list', 'timeline');
  CREATE TYPE "public"."enum_pages_blocks_education_timeline_options_style" AS ENUM('alternating', 'horizontal', 'vertical');
  CREATE TYPE "public"."enum_pages_blocks_experience_display_options_items_per_row" AS ENUM('1', '2', '3');
  CREATE TYPE "public"."enum_pages_blocks_experience_display_options_layout" AS ENUM('cards', 'grid', 'list', 'timeline');
  CREATE TYPE "public"."enum_pages_blocks_experience_timeline_options_style" AS ENUM('alternating', 'horizontal', 'vertical');
  CREATE TYPE "public"."enum_pages_blocks_hero_secondary_buttons_style" AS ENUM('outlined', 'primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_hero_animation_type" AS ENUM('none', 'fadeIn', 'slideDown', 'slideUp', 'zoomIn');
  CREATE TYPE "public"."enum_pages_blocks_hero_cta_style" AS ENUM('outlined', 'primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_hero_text_align" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_hero_text_color" AS ENUM('black', 'custom', 'white');
  CREATE TYPE "public"."enum_pages_blocks_projects_display_options_items_per_row" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_projects_display_options_layout" AS ENUM('carousel', 'grid', 'list');
  CREATE TYPE "public"."enum_pages_blocks_services_cta_style" AS ENUM('outlined', 'primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_services_display_options_items_per_row" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum_pages_blocks_services_display_options_layout" AS ENUM('grid', 'list', 'cards', 'tabs', 'accordion');
  CREATE TYPE "public"."enum_pages_blocks_skills_display_options_items_per_row" AS ENUM('2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum_pages_blocks_skills_display_options_layout" AS ENUM('grid', 'list', 'progress', 'tags');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_display_options_items_per_row" AS ENUM('1', '2', '3');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_display_options_layout" AS ENUM('carousel', 'grid', 'list', 'single');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_about_key_skills_level" AS ENUM('advanced', 'beginner', 'expert', 'intermediate');
  CREATE TYPE "public"."enum__pages_v_blocks_about_cta_style" AS ENUM('outlined', 'primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_about_layout_content_align" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_about_layout_image_position" AS ENUM('bottom', 'left', 'right', 'top');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_posts_display_options_items_per_row" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_posts_display_options_layout" AS ENUM('cards', 'carousel', 'grid', 'list', 'masonry');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_posts_cta_style" AS ENUM('outlined', 'primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_education_filter_options_education_types" AS ENUM('associate', 'bachelor', 'bootcamp', 'certificate', 'diploma', 'master', 'online-course', 'other', 'phd', 'workshop');
  CREATE TYPE "public"."enum__pages_v_blocks_education_display_options_items_per_row" AS ENUM('1', '2', '3');
  CREATE TYPE "public"."enum__pages_v_blocks_education_display_options_layout" AS ENUM('cards', 'grid', 'list', 'timeline');
  CREATE TYPE "public"."enum__pages_v_blocks_education_timeline_options_style" AS ENUM('alternating', 'horizontal', 'vertical');
  CREATE TYPE "public"."enum__pages_v_blocks_experience_display_options_items_per_row" AS ENUM('1', '2', '3');
  CREATE TYPE "public"."enum__pages_v_blocks_experience_display_options_layout" AS ENUM('cards', 'grid', 'list', 'timeline');
  CREATE TYPE "public"."enum__pages_v_blocks_experience_timeline_options_style" AS ENUM('alternating', 'horizontal', 'vertical');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_style" AS ENUM('outlined', 'primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_animation_type" AS ENUM('none', 'fadeIn', 'slideDown', 'slideUp', 'zoomIn');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_cta_style" AS ENUM('outlined', 'primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_text_align" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_text_color" AS ENUM('black', 'custom', 'white');
  CREATE TYPE "public"."enum__pages_v_blocks_projects_display_options_items_per_row" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_projects_display_options_layout" AS ENUM('carousel', 'grid', 'list');
  CREATE TYPE "public"."enum__pages_v_blocks_services_cta_style" AS ENUM('outlined', 'primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_services_display_options_items_per_row" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_services_display_options_layout" AS ENUM('grid', 'list', 'cards', 'tabs', 'accordion');
  CREATE TYPE "public"."enum__pages_v_blocks_skills_display_options_items_per_row" AS ENUM('2', '3', '4', '5', '6');
  CREATE TYPE "public"."enum__pages_v_blocks_skills_display_options_layout" AS ENUM('grid', 'list', 'progress', 'tags');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_display_options_items_per_row" AS ENUM('1', '2', '3');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_display_options_layout" AS ENUM('carousel', 'grid', 'list', 'single');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_projects_project_type" AS ENUM('api', 'desktop-app', 'game', 'library', 'mobile-app', 'other', 'web-app', 'website');
  CREATE TYPE "public"."enum_projects_project_status" AS ENUM('archived', 'completed', 'in-progress', 'on-hold', 'planned');
  CREATE TYPE "public"."enum_projects_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__projects_v_version_project_type" AS ENUM('api', 'desktop-app', 'game', 'library', 'mobile-app', 'other', 'web-app', 'website');
  CREATE TYPE "public"."enum__projects_v_version_project_status" AS ENUM('archived', 'completed', 'in-progress', 'on-hold', 'planned');
  CREATE TYPE "public"."enum__projects_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_services_service_type" AS ENUM('consulting', 'maintenance', 'mobile-development', 'other', 'training', 'ui-ux-design', 'web-development');
  CREATE TYPE "public"."enum_services_pricing_type" AS ENUM('custom', 'fixed', 'hourly', 'monthly', 'project');
  CREATE TYPE "public"."enum_services_pricing_currency" AS ENUM('CAD', 'EUR', 'GBP', 'USD');
  CREATE TYPE "public"."enum_services_availability" AS ENUM('available', 'coming-soon', 'limited', 'not-available');
  CREATE TYPE "public"."enum_services_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__services_v_version_service_type" AS ENUM('consulting', 'maintenance', 'mobile-development', 'other', 'training', 'ui-ux-design', 'web-development');
  CREATE TYPE "public"."enum__services_v_version_pricing_type" AS ENUM('custom', 'fixed', 'hourly', 'monthly', 'project');
  CREATE TYPE "public"."enum__services_v_version_pricing_currency" AS ENUM('CAD', 'EUR', 'GBP', 'USD');
  CREATE TYPE "public"."enum__services_v_version_availability" AS ENUM('available', 'coming-soon', 'limited', 'not-available');
  CREATE TYPE "public"."enum__services_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_skills_learning_resources_type" AS ENUM('book', 'course', 'documentation', 'other', 'tutorial', 'video');
  CREATE TYPE "public"."enum_skills_category" AS ENUM('backend', 'database', 'design', 'devops', 'frameworks', 'frontend', 'fullstack', 'languages', 'mobile', 'other', 'tools');
  CREATE TYPE "public"."enum_skills_level" AS ENUM('advanced', 'beginner', 'expert', 'intermediate');
  CREATE TYPE "public"."enum_skills_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__skills_v_version_learning_resources_type" AS ENUM('book', 'course', 'documentation', 'other', 'tutorial', 'video');
  CREATE TYPE "public"."enum__skills_v_version_category" AS ENUM('backend', 'database', 'design', 'devops', 'frameworks', 'frontend', 'fullstack', 'languages', 'mobile', 'other', 'tools');
  CREATE TYPE "public"."enum__skills_v_version_level" AS ENUM('advanced', 'beginner', 'expert', 'intermediate');
  CREATE TYPE "public"."enum__skills_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_social_networks_platform_type" AS ENUM('creative', 'professional', 'other', 'social', 'technical');
  CREATE TYPE "public"."enum_social_networks_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__social_networks_v_version_platform_type" AS ENUM('creative', 'professional', 'other', 'social', 'technical');
  CREATE TYPE "public"."enum__social_networks_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_testimonials_rating" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum_testimonials_service_type" AS ENUM('consulting', 'maintenance', 'mobile-development', 'other', 'ui-ux-design', 'web-development');
  CREATE TYPE "public"."enum_testimonials_project_budget" AS ENUM('5k-10k', '10k-25k', '25k-50k', '50k-100k', 'not-disclosed', 'over-100k', 'under-5k');
  CREATE TYPE "public"."enum_testimonials_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__testimonials_v_version_rating" AS ENUM('1', '2', '3', '4', '5');
  CREATE TYPE "public"."enum__testimonials_v_version_service_type" AS ENUM('consulting', 'maintenance', 'mobile-development', 'other', 'ui-ux-design', 'web-development');
  CREATE TYPE "public"."enum__testimonials_v_version_project_budget" AS ENUM('5k-10k', '10k-25k', '25k-50k', '50k-100k', 'not-disclosed', 'over-100k', 'under-5k');
  CREATE TYPE "public"."enum__testimonials_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_users_preferences_language" AS ENUM('en', 'fr', 'jp');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'author', 'contributor', 'editor', 'subscriber');
  CREATE TYPE "public"."enum_users_user_status" AS ENUM('active', 'inactive', 'pending', 'suspended');
  CREATE TYPE "public"."enum_users_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__users_v_version_preferences_language" AS ENUM('en', 'fr', 'jp');
  CREATE TYPE "public"."enum__users_v_version_role" AS ENUM('admin', 'author', 'contributor', 'editor', 'subscriber');
  CREATE TYPE "public"."enum__users_v_version_user_status" AS ENUM('active', 'inactive', 'pending', 'suspended');
  CREATE TYPE "public"."enum__users_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_site_settings_site_info_display_mode" AS ENUM('browser', 'fullscreen', 'minimal-ui', 'standalone');
  CREATE TYPE "public"."enum_site_settings_site_info_orientation" AS ENUM('any', 'landscape', 'portrait');
  CREATE TYPE "public"."enum_site_settings_appearance_font_family" AS ENUM('inter', 'lato', 'montserrat', 'open-sans', 'poppins', 'roboto');
  CREATE TYPE "public"."enum_site_settings_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__site_settings_v_version_site_info_display_mode" AS ENUM('browser', 'fullscreen', 'minimal-ui', 'standalone');
  CREATE TYPE "public"."enum__site_settings_v_version_site_info_orientation" AS ENUM('any', 'landscape', 'portrait');
  CREATE TYPE "public"."enum__site_settings_v_version_appearance_font_family" AS ENUM('inter', 'lato', 'montserrat', 'open-sans', 'poppins', 'roboto');
  CREATE TYPE "public"."enum__site_settings_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "apps" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"active" boolean DEFAULT true,
  	"color" varchar,
  	"description" varchar,
  	"icon" varchar,
  	"name" varchar,
  	"open_in_new_tab" boolean DEFAULT true,
  	"position" numeric,
  	"url" varchar,
  	"view_box" varchar DEFAULT '0 0 24 24',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_apps_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_apps_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_active" boolean DEFAULT true,
  	"version_color" varchar,
  	"version_description" varchar,
  	"version_icon" varchar,
  	"version_name" varchar,
  	"version_open_in_new_tab" boolean DEFAULT true,
  	"version_position" numeric,
  	"version_url" varchar,
  	"version_view_box" varchar DEFAULT '0 0 24 24',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__apps_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "blog_posts_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "blog_posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"allow_comments" boolean DEFAULT true,
  	"author_id" integer,
  	"content" jsonb,
  	"excerpt" varchar,
  	"featured" boolean DEFAULT false,
  	"featured_image_id" integer,
  	"published_date" timestamp(3) with time zone,
  	"reading_time" numeric,
  	"seo_description" varchar,
  	"seo_keywords" varchar,
  	"seo_og_image_id" integer,
  	"seo_title" varchar,
  	"slug" varchar,
  	"status" "enum_blog_posts_status" DEFAULT 'draft',
  	"title" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_blog_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "blog_posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"categories_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE "_blog_posts_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blog_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_allow_comments" boolean DEFAULT true,
  	"version_author_id" integer,
  	"version_content" jsonb,
  	"version_excerpt" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_featured_image_id" integer,
  	"version_published_date" timestamp(3) with time zone,
  	"version_reading_time" numeric,
  	"version_seo_description" varchar,
  	"version_seo_keywords" varchar,
  	"version_seo_og_image_id" integer,
  	"version_seo_title" varchar,
  	"version_slug" varchar,
  	"version_status" "enum__blog_posts_v_version_status" DEFAULT 'draft',
  	"version_title" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__blog_posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_blog_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"categories_id" integer,
  	"projects_id" integer
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"slug" varchar,
  	"description" varchar,
  	"color" varchar,
  	"icon" varchar,
  	"image_id" integer,
  	"category_type" "enum_categories_category_type" DEFAULT 'general',
  	"parent_id" integer,
  	"featured" boolean DEFAULT false,
  	"active" boolean DEFAULT true,
  	"display_order" numeric,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_keywords" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_categories_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_categories_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_description" varchar,
  	"version_color" varchar,
  	"version_icon" varchar,
  	"version_image_id" integer,
  	"version_category_type" "enum__categories_v_version_category_type" DEFAULT 'general',
  	"version_parent_id" integer,
  	"version_featured" boolean DEFAULT false,
  	"version_active" boolean DEFAULT true,
  	"version_display_order" numeric,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_keywords" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__categories_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "companies_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "companies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"active" boolean DEFAULT true,
  	"company_size" "enum_companies_company_size",
  	"contact_info_address" varchar,
  	"contact_info_email" varchar,
  	"contact_info_phone" varchar,
  	"description" varchar,
  	"detailed_description" jsonb,
  	"featured" boolean DEFAULT false,
  	"founded_year" numeric,
  	"headquarters" varchar,
  	"industry" "enum_companies_industry",
  	"logo_id" integer,
  	"name" varchar,
  	"slug" varchar,
  	"social_media_facebook" varchar,
  	"social_media_instagram" varchar,
  	"social_media_linkedin" varchar,
  	"social_media_twitter" varchar,
  	"website" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_companies_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "companies_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"testimonials_id" integer
  );
  
  CREATE TABLE "_companies_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_companies_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_active" boolean DEFAULT true,
  	"version_company_size" "enum__companies_v_version_company_size",
  	"version_contact_info_address" varchar,
  	"version_contact_info_email" varchar,
  	"version_contact_info_phone" varchar,
  	"version_description" varchar,
  	"version_detailed_description" jsonb,
  	"version_featured" boolean DEFAULT false,
  	"version_founded_year" numeric,
  	"version_headquarters" varchar,
  	"version_industry" "enum__companies_v_version_industry",
  	"version_logo_id" integer,
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_social_media_facebook" varchar,
  	"version_social_media_instagram" varchar,
  	"version_social_media_linkedin" varchar,
  	"version_social_media_twitter" varchar,
  	"version_website" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__companies_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_companies_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"testimonials_id" integer
  );
  
  CREATE TABLE "education_achievements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"achievement" varchar,
  	"date" timestamp(3) with time zone,
  	"description" varchar
  );
  
  CREATE TABLE "education_coursework" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"course_name" varchar,
  	"description" varchar,
  	"grade" varchar
  );
  
  CREATE TABLE "education_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "education" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"active" boolean DEFAULT true,
  	"certificate_image_id" integer,
  	"current" boolean DEFAULT false,
  	"degree" varchar,
  	"description" varchar,
  	"display_order" numeric,
  	"education_type" "enum_education_education_type",
  	"end_date" timestamp(3) with time zone,
  	"featured" boolean DEFAULT false,
  	"field_of_study" varchar,
  	"grade" varchar,
  	"institution_id" integer,
  	"location" varchar,
  	"start_date" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_education_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "education_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"skills_id" integer
  );
  
  CREATE TABLE "_education_v_version_achievements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"achievement" varchar,
  	"date" timestamp(3) with time zone,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v_version_coursework" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"course_name" varchar,
  	"description" varchar,
  	"grade" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_active" boolean DEFAULT true,
  	"version_certificate_image_id" integer,
  	"version_current" boolean DEFAULT false,
  	"version_degree" varchar,
  	"version_description" varchar,
  	"version_display_order" numeric,
  	"version_education_type" "enum__education_v_version_education_type",
  	"version_end_date" timestamp(3) with time zone,
  	"version_featured" boolean DEFAULT false,
  	"version_field_of_study" varchar,
  	"version_grade" varchar,
  	"version_institution_id" integer,
  	"version_location" varchar,
  	"version_start_date" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__education_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_education_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"skills_id" integer
  );
  
  CREATE TABLE "experience_achievements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"achievement" varchar,
  	"description" varchar,
  	"impact" varchar
  );
  
  CREATE TABLE "experience_references" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email" varchar,
  	"name" varchar,
  	"phone" varchar,
  	"position" varchar
  );
  
  CREATE TABLE "experience_responsibilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"responsibility" varchar
  );
  
  CREATE TABLE "experience_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "experience" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"active" boolean DEFAULT true,
  	"company_id" integer,
  	"current" boolean DEFAULT false,
  	"description" varchar,
  	"detailed_description" jsonb,
  	"display_order" numeric,
  	"end_date" timestamp(3) with time zone,
  	"employment_type" "enum_experience_employment_type",
  	"featured" boolean DEFAULT false,
  	"job_title" varchar,
  	"location" varchar,
  	"reason_for_leaving" varchar,
  	"remote_work" "enum_experience_remote_work",
  	"reporting_to" varchar,
  	"salary_range" varchar,
  	"start_date" timestamp(3) with time zone,
  	"team_size" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_experience_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "experience_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"skills_id" integer
  );
  
  CREATE TABLE "_experience_v_version_achievements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"achievement" varchar,
  	"description" varchar,
  	"impact" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_experience_v_version_references" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"email" varchar,
  	"name" varchar,
  	"phone" varchar,
  	"position" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_experience_v_version_responsibilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"responsibility" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_experience_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_experience_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_active" boolean DEFAULT true,
  	"version_company_id" integer,
  	"version_current" boolean DEFAULT false,
  	"version_description" varchar,
  	"version_detailed_description" jsonb,
  	"version_display_order" numeric,
  	"version_end_date" timestamp(3) with time zone,
  	"version_employment_type" "enum__experience_v_version_employment_type",
  	"version_featured" boolean DEFAULT false,
  	"version_job_title" varchar,
  	"version_location" varchar,
  	"version_reason_for_leaving" varchar,
  	"version_remote_work" "enum__experience_v_version_remote_work",
  	"version_reporting_to" varchar,
  	"version_salary_range" varchar,
  	"version_start_date" timestamp(3) with time zone,
  	"version_team_size" numeric,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__experience_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_experience_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer,
  	"skills_id" integer
  );
  
  CREATE TABLE "institutions_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"caption" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "institutions_social_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_institutions_social_media_platform",
  	"url" varchar
  );
  
  CREATE TABLE "institutions_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "institutions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"active" boolean DEFAULT true,
  	"contact_info_address" varchar,
  	"contact_info_email" varchar,
  	"contact_info_phone" varchar,
  	"country" varchar,
  	"description" varchar,
  	"detailed_description" jsonb,
  	"featured" boolean DEFAULT false,
  	"founded_year" numeric,
  	"industry" varchar,
  	"institution_size" "enum_institutions_institution_size" DEFAULT 'medium',
  	"institution_type" "enum_institutions_institution_type" DEFAULT 'company',
  	"location" varchar,
  	"logo_id" integer,
  	"name" varchar,
  	"seo_description" varchar,
  	"seo_keywords" varchar,
  	"seo_title" varchar,
  	"slug" varchar,
  	"website" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_institutions_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_institutions_v_version_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"caption" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_institutions_v_version_social_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__institutions_v_version_social_media_platform",
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_institutions_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_institutions_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_active" boolean DEFAULT true,
  	"version_contact_info_address" varchar,
  	"version_contact_info_email" varchar,
  	"version_contact_info_phone" varchar,
  	"version_country" varchar,
  	"version_description" varchar,
  	"version_detailed_description" jsonb,
  	"version_featured" boolean DEFAULT false,
  	"version_founded_year" numeric,
  	"version_industry" varchar,
  	"version_institution_size" "enum__institutions_v_version_institution_size" DEFAULT 'medium',
  	"version_institution_type" "enum__institutions_v_version_institution_type" DEFAULT 'company',
  	"version_location" varchar,
  	"version_logo_id" integer,
  	"version_name" varchar,
  	"version_seo_description" varchar,
  	"version_seo_keywords" varchar,
  	"version_seo_title" varchar,
  	"version_slug" varchar,
  	"version_website" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__institutions_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "media_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" varchar,
  	"category" "enum_media_category" DEFAULT 'images',
  	"copyright" varchar,
  	"creator" varchar,
  	"description" varchar,
  	"featured" boolean DEFAULT false,
  	"published" boolean DEFAULT true,
  	"usage_rights" "enum_media_usage_rights" DEFAULT 'all-rights',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_media_status" DEFAULT 'draft',
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_tablet_url" varchar,
  	"sizes_tablet_width" numeric,
  	"sizes_tablet_height" numeric,
  	"sizes_tablet_mime_type" varchar,
  	"sizes_tablet_filesize" numeric,
  	"sizes_tablet_filename" varchar,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar
  );
  
  CREATE TABLE "_media_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_media_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_alt" varchar,
  	"version_caption" varchar,
  	"version_category" "enum__media_v_version_category" DEFAULT 'images',
  	"version_copyright" varchar,
  	"version_creator" varchar,
  	"version_description" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_published" boolean DEFAULT true,
  	"version_usage_rights" "enum__media_v_version_usage_rights" DEFAULT 'all-rights',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__media_v_version_status" DEFAULT 'draft',
  	"version_url" varchar,
  	"version_thumbnail_u_r_l" varchar,
  	"version_filename" varchar,
  	"version_mime_type" varchar,
  	"version_filesize" numeric,
  	"version_width" numeric,
  	"version_height" numeric,
  	"version_focal_x" numeric,
  	"version_focal_y" numeric,
  	"version_sizes_card_url" varchar,
  	"version_sizes_card_width" numeric,
  	"version_sizes_card_height" numeric,
  	"version_sizes_card_mime_type" varchar,
  	"version_sizes_card_filesize" numeric,
  	"version_sizes_card_filename" varchar,
  	"version_sizes_tablet_url" varchar,
  	"version_sizes_tablet_width" numeric,
  	"version_sizes_tablet_height" numeric,
  	"version_sizes_tablet_mime_type" varchar,
  	"version_sizes_tablet_filesize" numeric,
  	"version_sizes_tablet_filename" varchar,
  	"version_sizes_thumbnail_url" varchar,
  	"version_sizes_thumbnail_width" numeric,
  	"version_sizes_thumbnail_height" numeric,
  	"version_sizes_thumbnail_mime_type" varchar,
  	"version_sizes_thumbnail_filesize" numeric,
  	"version_sizes_thumbnail_filename" varchar,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "pages_blocks_about_additional_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"caption" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_about_key_skills" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"level" "enum_pages_blocks_about_key_skills_level" DEFAULT 'intermediate',
  	"skill" varchar
  );
  
  CREATE TABLE "pages_blocks_about_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"body" jsonb,
  	"cta_href" varchar,
  	"cta_label" varchar,
  	"cta_open_in_new_tab" boolean DEFAULT false,
  	"cta_style" "enum_pages_blocks_about_cta_style" DEFAULT 'primary',
  	"heading" varchar,
  	"layout_background_color" varchar,
  	"layout_content_align" "enum_pages_blocks_about_layout_content_align" DEFAULT 'left',
  	"layout_image_position" "enum_pages_blocks_about_layout_image_position" DEFAULT 'right',
  	"profile_image_id" integer,
  	"subtitle" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_blog_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"description" varchar,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_items_per_row" "enum_pages_blocks_blog_posts_display_options_items_per_row" DEFAULT '3',
  	"display_options_layout" "enum_pages_blocks_blog_posts_display_options_layout" DEFAULT 'grid',
  	"display_options_limit" numeric,
  	"display_options_published_only" boolean DEFAULT true,
  	"display_options_show_authors" boolean DEFAULT true,
  	"display_options_show_categories" boolean DEFAULT true,
  	"display_options_show_dates" boolean DEFAULT true,
  	"display_options_show_excerpts" boolean DEFAULT true,
  	"display_options_show_featured_images" boolean DEFAULT true,
  	"display_options_show_reading_time" boolean DEFAULT true,
  	"display_options_show_tags" boolean DEFAULT false,
  	"filter_options_enable_filtering" boolean DEFAULT false,
  	"filter_options_filter_by_author" boolean DEFAULT false,
  	"filter_options_filter_by_category" boolean DEFAULT true,
  	"filter_options_filter_by_date" boolean DEFAULT true,
  	"filter_options_filter_by_tags" boolean DEFAULT false,
  	"heading" varchar,
  	"pagination_enabled" boolean DEFAULT true,
  	"pagination_posts_per_page" numeric DEFAULT 6,
  	"pagination_show_load_more" boolean DEFAULT false,
  	"cta_link" varchar DEFAULT '/blog',
  	"cta_show_cta" boolean DEFAULT false,
  	"cta_style" "enum_pages_blocks_blog_posts_cta_style" DEFAULT 'primary',
  	"cta_text" varchar DEFAULT 'View All Posts',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"icon" varchar,
  	"label" varchar,
  	"open_in_new_tab" boolean DEFAULT true
  );
  
  CREATE TABLE "pages_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"address" varchar,
  	"anchor_id" varchar,
  	"contact_form_description" varchar,
  	"contact_form_enabled" boolean DEFAULT true,
  	"contact_form_title" varchar DEFAULT 'Get in Touch',
  	"description" varchar,
  	"email" varchar,
  	"heading" varchar,
  	"phone" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_education_filter_options_education_types" (
  	"order" integer NOT NULL,
  	"parent_id" varchar NOT NULL,
  	"value" "enum_pages_blocks_education_filter_options_education_types",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_education" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"description" varchar,
  	"display_options_current_only" boolean DEFAULT false,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_items_per_row" "enum_pages_blocks_education_display_options_items_per_row" DEFAULT '1',
  	"display_options_layout" "enum_pages_blocks_education_display_options_layout" DEFAULT 'timeline',
  	"display_options_limit" numeric,
  	"display_options_show_achievements" boolean DEFAULT true,
  	"display_options_show_coursework" boolean DEFAULT false,
  	"display_options_show_duration" boolean DEFAULT true,
  	"display_options_show_education_type" boolean DEFAULT true,
  	"display_options_show_grade" boolean DEFAULT true,
  	"display_options_show_institution_logos" boolean DEFAULT true,
  	"display_options_show_location" boolean DEFAULT true,
  	"display_options_show_skills" boolean DEFAULT true,
  	"filter_options_filter_by_type" boolean DEFAULT false,
  	"heading" varchar,
  	"timeline_options_line_color" varchar,
  	"timeline_options_show_line" boolean DEFAULT true,
  	"timeline_options_style" "enum_pages_blocks_education_timeline_options_style" DEFAULT 'vertical',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_experience" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"description" varchar,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_current_only" boolean DEFAULT false,
  	"display_options_items_per_row" "enum_pages_blocks_experience_display_options_items_per_row" DEFAULT '1',
  	"display_options_layout" "enum_pages_blocks_experience_display_options_layout" DEFAULT 'timeline',
  	"display_options_limit" numeric,
  	"display_options_show_achievements" boolean DEFAULT true,
  	"display_options_show_company_logos" boolean DEFAULT true,
  	"display_options_show_duration" boolean DEFAULT true,
  	"display_options_show_employment_type" boolean DEFAULT true,
  	"display_options_show_location" boolean DEFAULT true,
  	"display_options_show_technologies" boolean DEFAULT true,
  	"heading" varchar,
  	"timeline_options_line_color" varchar,
  	"timeline_options_show_line" boolean DEFAULT true,
  	"timeline_options_style" "enum_pages_blocks_experience_timeline_options_style" DEFAULT 'vertical',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_secondary_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"label" varchar,
  	"open_in_new_tab" boolean DEFAULT false,
  	"style" "enum_pages_blocks_hero_secondary_buttons_style" DEFAULT 'secondary'
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"animation_delay" numeric DEFAULT 0,
  	"animation_type" "enum_pages_blocks_hero_animation_type" DEFAULT 'fadeIn',
  	"background_color" varchar,
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"cta_href" varchar,
  	"cta_open_in_new_tab" boolean DEFAULT false,
  	"cta_style" "enum_pages_blocks_hero_cta_style" DEFAULT 'primary',
  	"cta_label" varchar,
  	"custom_text_color" varchar,
  	"subtitle" varchar,
  	"text_align" "enum_pages_blocks_hero_text_align" DEFAULT 'center',
  	"text_color" "enum_pages_blocks_hero_text_color" DEFAULT 'white',
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"description" varchar,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_items_per_row" "enum_pages_blocks_projects_display_options_items_per_row" DEFAULT '3',
  	"display_options_layout" "enum_pages_blocks_projects_display_options_layout" DEFAULT 'grid',
  	"display_options_limit" numeric,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"cta_link" varchar DEFAULT '/contact',
  	"cta_show_cta" boolean DEFAULT true,
  	"cta_style" "enum_pages_blocks_services_cta_style" DEFAULT 'primary',
  	"cta_text" varchar DEFAULT 'Get Started',
  	"description" varchar,
  	"display_options_available_only" boolean DEFAULT true,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_items_per_row" "enum_pages_blocks_services_display_options_items_per_row" DEFAULT '3',
  	"display_options_layout" "enum_pages_blocks_services_display_options_layout" DEFAULT 'grid',
  	"display_options_limit" numeric,
  	"display_options_show_features" boolean DEFAULT true,
  	"display_options_show_icons" boolean DEFAULT true,
  	"display_options_show_images" boolean DEFAULT true,
  	"display_options_show_pricing" boolean DEFAULT true,
  	"display_options_show_process" boolean DEFAULT false,
  	"display_options_show_related_projects" boolean DEFAULT false,
  	"display_options_show_technologies" boolean DEFAULT true,
  	"display_options_show_testimonials" boolean DEFAULT false,
  	"filter_options_enable_filtering" boolean DEFAULT false,
  	"filter_options_filter_by_availability" boolean DEFAULT true,
  	"filter_options_filter_by_price" boolean DEFAULT false,
  	"filter_options_filter_by_type" boolean DEFAULT true,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_skills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"description" varchar,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_group_by_category" boolean DEFAULT true,
  	"display_options_items_per_row" "enum_pages_blocks_skills_display_options_items_per_row" DEFAULT '4',
  	"display_options_layout" "enum_pages_blocks_skills_display_options_layout" DEFAULT 'grid',
  	"display_options_show_icons" boolean DEFAULT true,
  	"display_options_show_percentage" boolean DEFAULT true,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"description" varchar,
  	"display_options_auto_rotate" boolean DEFAULT true,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_items_per_row" "enum_pages_blocks_testimonials_display_options_items_per_row" DEFAULT '1',
  	"display_options_layout" "enum_pages_blocks_testimonials_display_options_layout" DEFAULT 'carousel',
  	"display_options_rotation_speed" numeric DEFAULT 5,
  	"display_options_show_company" boolean DEFAULT true,
  	"display_options_show_photos" boolean DEFAULT true,
  	"display_options_show_ratings" boolean DEFAULT true,
  	"heading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"author" varchar,
  	"excerpt" varchar,
  	"featured_image_id" integer,
  	"published_date" timestamp(3) with time zone,
  	"seo_description" varchar,
  	"seo_follow_links" boolean DEFAULT true,
  	"seo_indexable" boolean DEFAULT true,
  	"seo_keywords" varchar,
  	"seo_og_image_id" integer,
  	"seo_title" varchar,
  	"slug" varchar,
  	"status" "enum_pages_status" DEFAULT 'draft',
  	"title" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blog_posts_id" integer,
  	"education_id" integer,
  	"experience_id" integer,
  	"projects_id" integer,
  	"services_id" integer,
  	"skills_id" integer,
  	"testimonials_id" integer
  );
  
  CREATE TABLE "_pages_v_blocks_about_additional_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"caption" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_about_key_skills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"level" "enum__pages_v_blocks_about_key_skills_level" DEFAULT 'intermediate',
  	"skill" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_about_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"body" jsonb,
  	"cta_href" varchar,
  	"cta_label" varchar,
  	"cta_open_in_new_tab" boolean DEFAULT false,
  	"cta_style" "enum__pages_v_blocks_about_cta_style" DEFAULT 'primary',
  	"heading" varchar,
  	"layout_background_color" varchar,
  	"layout_content_align" "enum__pages_v_blocks_about_layout_content_align" DEFAULT 'left',
  	"layout_image_position" "enum__pages_v_blocks_about_layout_image_position" DEFAULT 'right',
  	"profile_image_id" integer,
  	"subtitle" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"description" varchar,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_items_per_row" "enum__pages_v_blocks_blog_posts_display_options_items_per_row" DEFAULT '3',
  	"display_options_layout" "enum__pages_v_blocks_blog_posts_display_options_layout" DEFAULT 'grid',
  	"display_options_limit" numeric,
  	"display_options_published_only" boolean DEFAULT true,
  	"display_options_show_authors" boolean DEFAULT true,
  	"display_options_show_categories" boolean DEFAULT true,
  	"display_options_show_dates" boolean DEFAULT true,
  	"display_options_show_excerpts" boolean DEFAULT true,
  	"display_options_show_featured_images" boolean DEFAULT true,
  	"display_options_show_reading_time" boolean DEFAULT true,
  	"display_options_show_tags" boolean DEFAULT false,
  	"filter_options_enable_filtering" boolean DEFAULT false,
  	"filter_options_filter_by_author" boolean DEFAULT false,
  	"filter_options_filter_by_category" boolean DEFAULT true,
  	"filter_options_filter_by_date" boolean DEFAULT true,
  	"filter_options_filter_by_tags" boolean DEFAULT false,
  	"heading" varchar,
  	"pagination_enabled" boolean DEFAULT true,
  	"pagination_posts_per_page" numeric DEFAULT 6,
  	"pagination_show_load_more" boolean DEFAULT false,
  	"cta_link" varchar DEFAULT '/blog',
  	"cta_show_cta" boolean DEFAULT false,
  	"cta_style" "enum__pages_v_blocks_blog_posts_cta_style" DEFAULT 'primary',
  	"cta_text" varchar DEFAULT 'View All Posts',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"icon" varchar,
  	"label" varchar,
  	"open_in_new_tab" boolean DEFAULT true,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"address" varchar,
  	"anchor_id" varchar,
  	"contact_form_description" varchar,
  	"contact_form_enabled" boolean DEFAULT true,
  	"contact_form_title" varchar DEFAULT 'Get in Touch',
  	"description" varchar,
  	"email" varchar,
  	"heading" varchar,
  	"phone" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_education_filter_options_education_types" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__pages_v_blocks_education_filter_options_education_types",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_education" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"description" varchar,
  	"display_options_current_only" boolean DEFAULT false,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_items_per_row" "enum__pages_v_blocks_education_display_options_items_per_row" DEFAULT '1',
  	"display_options_layout" "enum__pages_v_blocks_education_display_options_layout" DEFAULT 'timeline',
  	"display_options_limit" numeric,
  	"display_options_show_achievements" boolean DEFAULT true,
  	"display_options_show_coursework" boolean DEFAULT false,
  	"display_options_show_duration" boolean DEFAULT true,
  	"display_options_show_education_type" boolean DEFAULT true,
  	"display_options_show_grade" boolean DEFAULT true,
  	"display_options_show_institution_logos" boolean DEFAULT true,
  	"display_options_show_location" boolean DEFAULT true,
  	"display_options_show_skills" boolean DEFAULT true,
  	"filter_options_filter_by_type" boolean DEFAULT false,
  	"heading" varchar,
  	"timeline_options_line_color" varchar,
  	"timeline_options_show_line" boolean DEFAULT true,
  	"timeline_options_style" "enum__pages_v_blocks_education_timeline_options_style" DEFAULT 'vertical',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_experience" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"description" varchar,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_current_only" boolean DEFAULT false,
  	"display_options_items_per_row" "enum__pages_v_blocks_experience_display_options_items_per_row" DEFAULT '1',
  	"display_options_layout" "enum__pages_v_blocks_experience_display_options_layout" DEFAULT 'timeline',
  	"display_options_limit" numeric,
  	"display_options_show_achievements" boolean DEFAULT true,
  	"display_options_show_company_logos" boolean DEFAULT true,
  	"display_options_show_duration" boolean DEFAULT true,
  	"display_options_show_employment_type" boolean DEFAULT true,
  	"display_options_show_location" boolean DEFAULT true,
  	"display_options_show_technologies" boolean DEFAULT true,
  	"heading" varchar,
  	"timeline_options_line_color" varchar,
  	"timeline_options_show_line" boolean DEFAULT true,
  	"timeline_options_style" "enum__pages_v_blocks_experience_timeline_options_style" DEFAULT 'vertical',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_secondary_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"label" varchar,
  	"open_in_new_tab" boolean DEFAULT false,
  	"style" "enum__pages_v_blocks_hero_secondary_buttons_style" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"animation_delay" numeric DEFAULT 0,
  	"animation_type" "enum__pages_v_blocks_hero_animation_type" DEFAULT 'fadeIn',
  	"background_color" varchar,
  	"background_image_id" integer,
  	"background_video_id" integer,
  	"cta_href" varchar,
  	"cta_open_in_new_tab" boolean DEFAULT false,
  	"cta_style" "enum__pages_v_blocks_hero_cta_style" DEFAULT 'primary',
  	"cta_label" varchar,
  	"custom_text_color" varchar,
  	"subtitle" varchar,
  	"text_align" "enum__pages_v_blocks_hero_text_align" DEFAULT 'center',
  	"text_color" "enum__pages_v_blocks_hero_text_color" DEFAULT 'white',
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"description" varchar,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_items_per_row" "enum__pages_v_blocks_projects_display_options_items_per_row" DEFAULT '3',
  	"display_options_layout" "enum__pages_v_blocks_projects_display_options_layout" DEFAULT 'grid',
  	"display_options_limit" numeric,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"cta_link" varchar DEFAULT '/contact',
  	"cta_show_cta" boolean DEFAULT true,
  	"cta_style" "enum__pages_v_blocks_services_cta_style" DEFAULT 'primary',
  	"cta_text" varchar DEFAULT 'Get Started',
  	"description" varchar,
  	"display_options_available_only" boolean DEFAULT true,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_items_per_row" "enum__pages_v_blocks_services_display_options_items_per_row" DEFAULT '3',
  	"display_options_layout" "enum__pages_v_blocks_services_display_options_layout" DEFAULT 'grid',
  	"display_options_limit" numeric,
  	"display_options_show_features" boolean DEFAULT true,
  	"display_options_show_icons" boolean DEFAULT true,
  	"display_options_show_images" boolean DEFAULT true,
  	"display_options_show_pricing" boolean DEFAULT true,
  	"display_options_show_process" boolean DEFAULT false,
  	"display_options_show_related_projects" boolean DEFAULT false,
  	"display_options_show_technologies" boolean DEFAULT true,
  	"display_options_show_testimonials" boolean DEFAULT false,
  	"filter_options_enable_filtering" boolean DEFAULT false,
  	"filter_options_filter_by_availability" boolean DEFAULT true,
  	"filter_options_filter_by_price" boolean DEFAULT false,
  	"filter_options_filter_by_type" boolean DEFAULT true,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_skills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"description" varchar,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_group_by_category" boolean DEFAULT true,
  	"display_options_items_per_row" "enum__pages_v_blocks_skills_display_options_items_per_row" DEFAULT '4',
  	"display_options_layout" "enum__pages_v_blocks_skills_display_options_layout" DEFAULT 'grid',
  	"display_options_show_icons" boolean DEFAULT true,
  	"display_options_show_percentage" boolean DEFAULT true,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"description" varchar,
  	"display_options_auto_rotate" boolean DEFAULT true,
  	"display_options_featured_only" boolean DEFAULT false,
  	"display_options_items_per_row" "enum__pages_v_blocks_testimonials_display_options_items_per_row" DEFAULT '1',
  	"display_options_layout" "enum__pages_v_blocks_testimonials_display_options_layout" DEFAULT 'carousel',
  	"display_options_rotation_speed" numeric DEFAULT 5,
  	"display_options_show_company" boolean DEFAULT true,
  	"display_options_show_photos" boolean DEFAULT true,
  	"display_options_show_ratings" boolean DEFAULT true,
  	"heading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_author" varchar,
  	"version_excerpt" varchar,
  	"version_featured_image_id" integer,
  	"version_published_date" timestamp(3) with time zone,
  	"version_seo_description" varchar,
  	"version_seo_follow_links" boolean DEFAULT true,
  	"version_seo_indexable" boolean DEFAULT true,
  	"version_seo_keywords" varchar,
  	"version_seo_og_image_id" integer,
  	"version_seo_title" varchar,
  	"version_slug" varchar,
  	"version_status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"version_title" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blog_posts_id" integer,
  	"education_id" integer,
  	"experience_id" integer,
  	"projects_id" integer,
  	"services_id" integer,
  	"skills_id" integer,
  	"testimonials_id" integer
  );
  
  CREATE TABLE "projects_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"caption" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "projects_technologies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "projects_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"challenges" varchar,
  	"client_id" integer,
  	"description" varchar,
  	"detailed_description" jsonb,
  	"end_date" timestamp(3) with time zone,
  	"featured" boolean DEFAULT false,
  	"github_url" varchar,
  	"image_id" integer,
  	"name" varchar,
  	"project_type" "enum_projects_project_type" DEFAULT 'web-app',
  	"project_url" varchar,
  	"published" boolean DEFAULT true,
  	"role" varchar,
  	"results" varchar,
  	"seo_description" varchar,
  	"seo_keywords" varchar,
  	"seo_title" varchar,
  	"slug" varchar,
  	"start_date" timestamp(3) with time zone,
  	"project_status" "enum_projects_project_status" DEFAULT 'completed',
  	"team_size" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_projects_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_projects_v_version_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"caption" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_version_technologies" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color" varchar,
  	"name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_projects_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_challenges" varchar,
  	"version_client_id" integer,
  	"version_description" varchar,
  	"version_detailed_description" jsonb,
  	"version_end_date" timestamp(3) with time zone,
  	"version_featured" boolean DEFAULT false,
  	"version_github_url" varchar,
  	"version_image_id" integer,
  	"version_name" varchar,
  	"version_project_type" "enum__projects_v_version_project_type" DEFAULT 'web-app',
  	"version_project_url" varchar,
  	"version_published" boolean DEFAULT true,
  	"version_role" varchar,
  	"version_results" varchar,
  	"version_seo_description" varchar,
  	"version_seo_keywords" varchar,
  	"version_seo_title" varchar,
  	"version_slug" varchar,
  	"version_start_date" timestamp(3) with time zone,
  	"version_project_status" "enum__projects_v_version_project_status" DEFAULT 'completed',
  	"version_team_size" numeric,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__projects_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "services_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "services_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_number" numeric,
  	"title" varchar,
  	"description" varchar,
  	"duration" varchar
  );
  
  CREATE TABLE "services_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"slug" varchar,
  	"description" varchar,
  	"detailed_description" jsonb,
  	"icon" varchar,
  	"image_id" integer,
  	"service_type" "enum_services_service_type",
  	"pricing_type" "enum_services_pricing_type" DEFAULT 'custom',
  	"pricing_price" numeric,
  	"pricing_currency" "enum_services_pricing_currency" DEFAULT 'USD',
  	"pricing_note" varchar,
  	"delivery_time" varchar,
  	"availability" "enum_services_availability" DEFAULT 'available',
  	"featured" boolean DEFAULT false,
  	"active" boolean DEFAULT true,
  	"display_order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_services_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "services_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer,
  	"projects_id" integer,
  	"testimonials_id" integer
  );
  
  CREATE TABLE "_services_v_version_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_version_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"step_number" numeric,
  	"title" varchar,
  	"description" varchar,
  	"duration" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_description" varchar,
  	"version_detailed_description" jsonb,
  	"version_icon" varchar,
  	"version_image_id" integer,
  	"version_service_type" "enum__services_v_version_service_type",
  	"version_pricing_type" "enum__services_v_version_pricing_type" DEFAULT 'custom',
  	"version_pricing_price" numeric,
  	"version_pricing_currency" "enum__services_v_version_pricing_currency" DEFAULT 'USD',
  	"version_pricing_note" varchar,
  	"version_delivery_time" varchar,
  	"version_availability" "enum__services_v_version_availability" DEFAULT 'available',
  	"version_featured" boolean DEFAULT false,
  	"version_active" boolean DEFAULT true,
  	"version_display_order" numeric,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__services_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_services_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer,
  	"projects_id" integer,
  	"testimonials_id" integer
  );
  
  CREATE TABLE "skills_certifications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"certificate_url" varchar,
  	"date" timestamp(3) with time zone,
  	"expiry_date" timestamp(3) with time zone,
  	"name" varchar,
  	"organization" varchar
  );
  
  CREATE TABLE "skills_learning_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_skills_learning_resources_type",
  	"title" varchar,
  	"url" varchar,
  	"provider" varchar
  );
  
  CREATE TABLE "skills_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "skills" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"active" boolean DEFAULT true,
  	"category" "enum_skills_category" DEFAULT 'frontend',
  	"color" varchar,
  	"description" varchar,
  	"display_order" numeric,
  	"featured" boolean DEFAULT false,
  	"icon" varchar,
  	"level" "enum_skills_level" DEFAULT 'intermediate',
  	"name" varchar,
  	"percentage" numeric,
  	"years_experience" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_skills_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "skills_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer
  );
  
  CREATE TABLE "_skills_v_version_certifications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"certificate_url" varchar,
  	"date" timestamp(3) with time zone,
  	"expiry_date" timestamp(3) with time zone,
  	"name" varchar,
  	"organization" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_skills_v_version_learning_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__skills_v_version_learning_resources_type",
  	"title" varchar,
  	"url" varchar,
  	"provider" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_skills_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_skills_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_active" boolean DEFAULT true,
  	"version_category" "enum__skills_v_version_category" DEFAULT 'frontend',
  	"version_color" varchar,
  	"version_description" varchar,
  	"version_display_order" numeric,
  	"version_featured" boolean DEFAULT false,
  	"version_icon" varchar,
  	"version_level" "enum__skills_v_version_level" DEFAULT 'intermediate',
  	"version_name" varchar,
  	"version_percentage" numeric,
  	"version_years_experience" numeric,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__skills_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_skills_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer
  );
  
  CREATE TABLE "social_networks" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"active" boolean DEFAULT true,
  	"color" varchar,
  	"description" varchar,
  	"follow_count" numeric,
  	"hover_color" varchar,
  	"icon" varchar,
  	"name" varchar,
  	"open_in_new_tab" boolean DEFAULT true,
  	"platform_type" "enum_social_networks_platform_type" DEFAULT 'social',
  	"position" numeric,
  	"url" varchar,
  	"username" varchar,
  	"view_box" varchar DEFAULT '0 0 24 24',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_social_networks_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_social_networks_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_active" boolean DEFAULT true,
  	"version_color" varchar,
  	"version_description" varchar,
  	"version_follow_count" numeric,
  	"version_hover_color" varchar,
  	"version_icon" varchar,
  	"version_name" varchar,
  	"version_open_in_new_tab" boolean DEFAULT true,
  	"version_platform_type" "enum__social_networks_v_version_platform_type" DEFAULT 'social',
  	"version_position" numeric,
  	"version_url" varchar,
  	"version_username" varchar,
  	"version_view_box" varchar DEFAULT '0 0 24 24',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__social_networks_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "testimonials_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"client_name" varchar,
  	"client_photo_id" integer,
  	"client_position" varchar,
  	"company" varchar,
  	"company_logo_id" integer,
  	"company_website" varchar,
  	"testimonial" varchar,
  	"rating" "enum_testimonials_rating" DEFAULT '5',
  	"project_id" integer,
  	"project_link" varchar,
  	"date" timestamp(3) with time zone,
  	"service_type" "enum_testimonials_service_type",
  	"project_duration" varchar,
  	"project_budget" "enum_testimonials_project_budget",
  	"featured" boolean DEFAULT false,
  	"published" boolean DEFAULT true,
  	"display_order" numeric,
  	"social_proof_linkedin_profile" varchar,
  	"social_proof_twitter_handle" varchar,
  	"social_proof_verified" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_testimonials_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_testimonials_v_version_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_testimonials_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_client_name" varchar,
  	"version_client_photo_id" integer,
  	"version_client_position" varchar,
  	"version_company" varchar,
  	"version_company_logo_id" integer,
  	"version_company_website" varchar,
  	"version_testimonial" varchar,
  	"version_rating" "enum__testimonials_v_version_rating" DEFAULT '5',
  	"version_project_id" integer,
  	"version_project_link" varchar,
  	"version_date" timestamp(3) with time zone,
  	"version_service_type" "enum__testimonials_v_version_service_type",
  	"version_project_duration" varchar,
  	"version_project_budget" "enum__testimonials_v_version_project_budget",
  	"version_featured" boolean DEFAULT false,
  	"version_published" boolean DEFAULT true,
  	"version_display_order" numeric,
  	"version_social_proof_linkedin_profile" varchar,
  	"version_social_proof_twitter_handle" varchar,
  	"version_social_proof_verified" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__testimonials_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "users_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"avatar_id" integer,
  	"bio" varchar,
  	"display_name" varchar,
  	"first_name" varchar,
  	"last_login" timestamp(3) with time zone,
  	"last_name" varchar,
  	"location" varchar,
  	"login_count" numeric DEFAULT 0,
  	"notes" varchar,
  	"phone" varchar,
  	"preferences_email_notifications" boolean DEFAULT true,
  	"preferences_language" "enum_users_preferences_language" DEFAULT 'en',
  	"preferences_timezone" varchar DEFAULT 'UTC',
  	"role" "enum_users_role" DEFAULT 'subscriber',
  	"user_status" "enum_users_user_status" DEFAULT 'active',
  	"website" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_users_status" DEFAULT 'draft',
  	"email" varchar,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "_users_v_version_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" varchar,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_users_v_version_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_users_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_avatar_id" integer,
  	"version_bio" varchar,
  	"version_display_name" varchar,
  	"version_first_name" varchar,
  	"version_last_login" timestamp(3) with time zone,
  	"version_last_name" varchar,
  	"version_location" varchar,
  	"version_login_count" numeric DEFAULT 0,
  	"version_notes" varchar,
  	"version_phone" varchar,
  	"version_preferences_email_notifications" boolean DEFAULT true,
  	"version_preferences_language" "enum__users_v_version_preferences_language" DEFAULT 'en',
  	"version_preferences_timezone" varchar DEFAULT 'UTC',
  	"version_role" "enum__users_v_version_role" DEFAULT 'subscriber',
  	"version_user_status" "enum__users_v_version_user_status" DEFAULT 'active',
  	"version_website" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__users_v_version_status" DEFAULT 'draft',
  	"version_email" varchar,
  	"version_reset_password_token" varchar,
  	"version_reset_password_expiration" timestamp(3) with time zone,
  	"version_salt" varchar,
  	"version_hash" varchar,
  	"version_login_attempts" numeric DEFAULT 0,
  	"version_lock_until" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"apps_id" integer,
  	"blog_posts_id" integer,
  	"categories_id" integer,
  	"companies_id" integer,
  	"education_id" integer,
  	"experience_id" integer,
  	"institutions_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"projects_id" integer,
  	"services_id" integer,
  	"skills_id" integer,
  	"social_networks_id" integer,
  	"testimonials_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_info_site_name" varchar,
  	"site_info_short_name" varchar,
  	"site_info_site_description" varchar,
  	"site_info_site_logo_id" integer,
  	"site_info_favicon_id" integer,
  	"site_info_theme_color" varchar,
  	"site_info_background_color" varchar,
  	"site_info_display_mode" "enum_site_settings_site_info_display_mode" DEFAULT 'standalone',
  	"site_info_start_url" varchar DEFAULT '/',
  	"site_info_scope" varchar DEFAULT '/',
  	"site_info_orientation" "enum_site_settings_site_info_orientation" DEFAULT 'any',
  	"contact_info_email" varchar,
  	"contact_info_phone" varchar,
  	"contact_info_address" varchar,
  	"contact_info_location" varchar,
  	"seo_settings_default_meta_title" varchar,
  	"seo_settings_default_meta_description" varchar,
  	"seo_settings_default_keywords" varchar,
  	"seo_settings_google_analytics_id" varchar,
  	"seo_settings_google_tag_manager_id" varchar,
  	"appearance_primary_color" varchar,
  	"appearance_secondary_color" varchar,
  	"appearance_accent_color" varchar,
  	"appearance_font_family" "enum_site_settings_appearance_font_family" DEFAULT 'inter',
  	"_status" "enum_site_settings_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"social_networks_id" integer,
  	"pages_id" integer
  );
  
  CREATE TABLE "_site_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_site_info_site_name" varchar,
  	"version_site_info_short_name" varchar,
  	"version_site_info_site_description" varchar,
  	"version_site_info_site_logo_id" integer,
  	"version_site_info_favicon_id" integer,
  	"version_site_info_theme_color" varchar,
  	"version_site_info_background_color" varchar,
  	"version_site_info_display_mode" "enum__site_settings_v_version_site_info_display_mode" DEFAULT 'standalone',
  	"version_site_info_start_url" varchar DEFAULT '/',
  	"version_site_info_scope" varchar DEFAULT '/',
  	"version_site_info_orientation" "enum__site_settings_v_version_site_info_orientation" DEFAULT 'any',
  	"version_contact_info_email" varchar,
  	"version_contact_info_phone" varchar,
  	"version_contact_info_address" varchar,
  	"version_contact_info_location" varchar,
  	"version_seo_settings_default_meta_title" varchar,
  	"version_seo_settings_default_meta_description" varchar,
  	"version_seo_settings_default_keywords" varchar,
  	"version_seo_settings_google_analytics_id" varchar,
  	"version_seo_settings_google_tag_manager_id" varchar,
  	"version_appearance_primary_color" varchar,
  	"version_appearance_secondary_color" varchar,
  	"version_appearance_accent_color" varchar,
  	"version_appearance_font_family" "enum__site_settings_v_version_appearance_font_family" DEFAULT 'inter',
  	"version__status" "enum__site_settings_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_site_settings_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"social_networks_id" integer,
  	"pages_id" integer
  );
  
  ALTER TABLE "_apps_v" ADD CONSTRAINT "_apps_v_parent_id_apps_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."apps"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_posts_tags" ADD CONSTRAINT "blog_posts_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_author_id_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_posts_rels" ADD CONSTRAINT "blog_posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_posts_rels" ADD CONSTRAINT "blog_posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_posts_rels" ADD CONSTRAINT "blog_posts_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_posts_v_version_tags" ADD CONSTRAINT "_blog_posts_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_posts_v" ADD CONSTRAINT "_blog_posts_v_parent_id_blog_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blog_posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_posts_v" ADD CONSTRAINT "_blog_posts_v_version_author_id_users_id_fk" FOREIGN KEY ("version_author_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_posts_v" ADD CONSTRAINT "_blog_posts_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_posts_v" ADD CONSTRAINT "_blog_posts_v_version_seo_og_image_id_media_id_fk" FOREIGN KEY ("version_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_posts_v_rels" ADD CONSTRAINT "_blog_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_blog_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_posts_v_rels" ADD CONSTRAINT "_blog_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_posts_v_rels" ADD CONSTRAINT "_blog_posts_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories" ADD CONSTRAINT "categories_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_categories_v" ADD CONSTRAINT "_categories_v_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_categories_v" ADD CONSTRAINT "_categories_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_categories_v" ADD CONSTRAINT "_categories_v_version_parent_id_categories_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "companies_tags" ADD CONSTRAINT "companies_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."companies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "companies" ADD CONSTRAINT "companies_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "companies_rels" ADD CONSTRAINT "companies_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."companies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "companies_rels" ADD CONSTRAINT "companies_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "companies_rels" ADD CONSTRAINT "companies_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_companies_v_version_tags" ADD CONSTRAINT "_companies_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_companies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_companies_v" ADD CONSTRAINT "_companies_v_parent_id_companies_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."companies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_companies_v" ADD CONSTRAINT "_companies_v_version_logo_id_media_id_fk" FOREIGN KEY ("version_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_companies_v_rels" ADD CONSTRAINT "_companies_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_companies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_companies_v_rels" ADD CONSTRAINT "_companies_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_companies_v_rels" ADD CONSTRAINT "_companies_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_achievements" ADD CONSTRAINT "education_achievements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_coursework" ADD CONSTRAINT "education_coursework_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_tags" ADD CONSTRAINT "education_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education" ADD CONSTRAINT "education_certificate_image_id_media_id_fk" FOREIGN KEY ("certificate_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "education" ADD CONSTRAINT "education_institution_id_institutions_id_fk" FOREIGN KEY ("institution_id") REFERENCES "public"."institutions"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_version_achievements" ADD CONSTRAINT "_education_v_version_achievements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_version_coursework" ADD CONSTRAINT "_education_v_version_coursework_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_version_tags" ADD CONSTRAINT "_education_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v" ADD CONSTRAINT "_education_v_parent_id_education_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."education"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v" ADD CONSTRAINT "_education_v_version_certificate_image_id_media_id_fk" FOREIGN KEY ("version_certificate_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v" ADD CONSTRAINT "_education_v_version_institution_id_institutions_id_fk" FOREIGN KEY ("version_institution_id") REFERENCES "public"."institutions"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_achievements" ADD CONSTRAINT "experience_achievements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_references" ADD CONSTRAINT "experience_references_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_responsibilities" ADD CONSTRAINT "experience_responsibilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_tags" ADD CONSTRAINT "experience_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience" ADD CONSTRAINT "experience_company_id_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."companies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "experience_rels" ADD CONSTRAINT "experience_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_rels" ADD CONSTRAINT "experience_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_rels" ADD CONSTRAINT "experience_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v_version_achievements" ADD CONSTRAINT "_experience_v_version_achievements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_experience_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v_version_references" ADD CONSTRAINT "_experience_v_version_references_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_experience_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v_version_responsibilities" ADD CONSTRAINT "_experience_v_version_responsibilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_experience_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v_version_tags" ADD CONSTRAINT "_experience_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_experience_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v" ADD CONSTRAINT "_experience_v_parent_id_experience_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."experience"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_experience_v" ADD CONSTRAINT "_experience_v_version_company_id_companies_id_fk" FOREIGN KEY ("version_company_id") REFERENCES "public"."companies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_experience_v_rels" ADD CONSTRAINT "_experience_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_experience_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v_rels" ADD CONSTRAINT "_experience_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_v_rels" ADD CONSTRAINT "_experience_v_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "institutions_gallery" ADD CONSTRAINT "institutions_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "institutions_gallery" ADD CONSTRAINT "institutions_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."institutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "institutions_social_media" ADD CONSTRAINT "institutions_social_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."institutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "institutions_tags" ADD CONSTRAINT "institutions_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."institutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "institutions" ADD CONSTRAINT "institutions_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_institutions_v_version_gallery" ADD CONSTRAINT "_institutions_v_version_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_institutions_v_version_gallery" ADD CONSTRAINT "_institutions_v_version_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_institutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_institutions_v_version_social_media" ADD CONSTRAINT "_institutions_v_version_social_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_institutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_institutions_v_version_tags" ADD CONSTRAINT "_institutions_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_institutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_institutions_v" ADD CONSTRAINT "_institutions_v_parent_id_institutions_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."institutions"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_institutions_v" ADD CONSTRAINT "_institutions_v_version_logo_id_media_id_fk" FOREIGN KEY ("version_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "media_tags" ADD CONSTRAINT "media_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_media_v_version_tags" ADD CONSTRAINT "_media_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_media_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_media_v" ADD CONSTRAINT "_media_v_parent_id_media_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_additional_images" ADD CONSTRAINT "pages_blocks_about_additional_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_additional_images" ADD CONSTRAINT "pages_blocks_about_additional_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_key_skills" ADD CONSTRAINT "pages_blocks_about_key_skills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about_stats" ADD CONSTRAINT "pages_blocks_about_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_about" ADD CONSTRAINT "pages_blocks_about_profile_image_id_media_id_fk" FOREIGN KEY ("profile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_about" ADD CONSTRAINT "pages_blocks_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_posts" ADD CONSTRAINT "pages_blocks_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_links" ADD CONSTRAINT "pages_blocks_contact_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_education_filter_options_education_types" ADD CONSTRAINT "pages_blocks_education_filter_options_education_types_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages_blocks_education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_education" ADD CONSTRAINT "pages_blocks_education_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_experience" ADD CONSTRAINT "pages_blocks_experience_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_secondary_buttons" ADD CONSTRAINT "pages_blocks_hero_secondary_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_projects" ADD CONSTRAINT "pages_blocks_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_services" ADD CONSTRAINT "pages_blocks_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_skills" ADD CONSTRAINT "pages_blocks_skills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_tags" ADD CONSTRAINT "pages_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_seo_og_image_id_media_id_fk" FOREIGN KEY ("seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_blog_posts_fk" FOREIGN KEY ("blog_posts_id") REFERENCES "public"."blog_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_experience_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about_additional_images" ADD CONSTRAINT "_pages_v_blocks_about_additional_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about_additional_images" ADD CONSTRAINT "_pages_v_blocks_about_additional_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about_key_skills" ADD CONSTRAINT "_pages_v_blocks_about_key_skills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about_stats" ADD CONSTRAINT "_pages_v_blocks_about_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about" ADD CONSTRAINT "_pages_v_blocks_about_profile_image_id_media_id_fk" FOREIGN KEY ("profile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_about" ADD CONSTRAINT "_pages_v_blocks_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_links" ADD CONSTRAINT "_pages_v_blocks_contact_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact" ADD CONSTRAINT "_pages_v_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_education_filter_options_education_types" ADD CONSTRAINT "_pages_v_blocks_education_filter_options_education_types_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v_blocks_education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_education" ADD CONSTRAINT "_pages_v_blocks_education_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_experience" ADD CONSTRAINT "_pages_v_blocks_experience_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_secondary_buttons" ADD CONSTRAINT "_pages_v_blocks_hero_secondary_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_background_video_id_media_id_fk" FOREIGN KEY ("background_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_projects" ADD CONSTRAINT "_pages_v_blocks_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_services" ADD CONSTRAINT "_pages_v_blocks_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_skills" ADD CONSTRAINT "_pages_v_blocks_skills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_tags" ADD CONSTRAINT "_pages_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_seo_og_image_id_media_id_fk" FOREIGN KEY ("version_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_blog_posts_fk" FOREIGN KEY ("blog_posts_id") REFERENCES "public"."blog_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_experience_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_gallery" ADD CONSTRAINT "projects_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects_gallery" ADD CONSTRAINT "projects_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_technologies" ADD CONSTRAINT "projects_technologies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects_tags" ADD CONSTRAINT "projects_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_client_id_companies_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."companies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "projects" ADD CONSTRAINT "projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_version_gallery" ADD CONSTRAINT "_projects_v_version_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v_version_gallery" ADD CONSTRAINT "_projects_v_version_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_technologies" ADD CONSTRAINT "_projects_v_version_technologies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v_version_tags" ADD CONSTRAINT "_projects_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_projects_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_parent_id_projects_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_client_id_companies_id_fk" FOREIGN KEY ("version_client_id") REFERENCES "public"."companies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_projects_v" ADD CONSTRAINT "_projects_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_features" ADD CONSTRAINT "services_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_process" ADD CONSTRAINT "services_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_tags" ADD CONSTRAINT "services_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_features" ADD CONSTRAINT "_services_v_version_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_process" ADD CONSTRAINT "_services_v_version_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_tags" ADD CONSTRAINT "_services_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_parent_id_services_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_certifications" ADD CONSTRAINT "skills_certifications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_learning_resources" ADD CONSTRAINT "skills_learning_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_tags" ADD CONSTRAINT "skills_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_rels" ADD CONSTRAINT "skills_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "skills_rels" ADD CONSTRAINT "skills_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_skills_v_version_certifications" ADD CONSTRAINT "_skills_v_version_certifications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_skills_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_skills_v_version_learning_resources" ADD CONSTRAINT "_skills_v_version_learning_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_skills_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_skills_v_version_tags" ADD CONSTRAINT "_skills_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_skills_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_skills_v" ADD CONSTRAINT "_skills_v_parent_id_skills_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."skills"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_skills_v_rels" ADD CONSTRAINT "_skills_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_skills_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_skills_v_rels" ADD CONSTRAINT "_skills_v_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_social_networks_v" ADD CONSTRAINT "_social_networks_v_parent_id_social_networks_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."social_networks"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials_tags" ADD CONSTRAINT "testimonials_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_client_photo_id_media_id_fk" FOREIGN KEY ("client_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v_version_tags" ADD CONSTRAINT "_testimonials_v_version_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_testimonials_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_parent_id_testimonials_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."testimonials"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_version_client_photo_id_media_id_fk" FOREIGN KEY ("version_client_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_version_company_logo_id_media_id_fk" FOREIGN KEY ("version_company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_version_project_id_projects_id_fk" FOREIGN KEY ("version_project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_social_links" ADD CONSTRAINT "users_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users" ADD CONSTRAINT "users_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_users_v_version_social_links" ADD CONSTRAINT "_users_v_version_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_users_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_users_v_version_sessions" ADD CONSTRAINT "_users_v_version_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_users_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_users_v" ADD CONSTRAINT "_users_v_parent_id_users_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_users_v" ADD CONSTRAINT "_users_v_version_avatar_id_media_id_fk" FOREIGN KEY ("version_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_apps_fk" FOREIGN KEY ("apps_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_posts_fk" FOREIGN KEY ("blog_posts_id") REFERENCES "public"."blog_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_companies_fk" FOREIGN KEY ("companies_id") REFERENCES "public"."companies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_experience_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experience"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_institutions_fk" FOREIGN KEY ("institutions_id") REFERENCES "public"."institutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_social_networks_fk" FOREIGN KEY ("social_networks_id") REFERENCES "public"."social_networks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_site_info_site_logo_id_media_id_fk" FOREIGN KEY ("site_info_site_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_site_info_favicon_id_media_id_fk" FOREIGN KEY ("site_info_favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_social_networks_fk" FOREIGN KEY ("social_networks_id") REFERENCES "public"."social_networks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_site_info_site_logo_id_media_id_fk" FOREIGN KEY ("version_site_info_site_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v" ADD CONSTRAINT "_site_settings_v_version_site_info_favicon_id_media_id_fk" FOREIGN KEY ("version_site_info_favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_site_settings_v_rels" ADD CONSTRAINT "_site_settings_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v_rels" ADD CONSTRAINT "_site_settings_v_rels_social_networks_fk" FOREIGN KEY ("social_networks_id") REFERENCES "public"."social_networks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v_rels" ADD CONSTRAINT "_site_settings_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "apps_updated_at_idx" ON "apps" USING btree ("updated_at");
  CREATE INDEX "apps_created_at_idx" ON "apps" USING btree ("created_at");
  CREATE INDEX "apps__status_idx" ON "apps" USING btree ("_status");
  CREATE INDEX "_apps_v_parent_idx" ON "_apps_v" USING btree ("parent_id");
  CREATE INDEX "_apps_v_version_version_updated_at_idx" ON "_apps_v" USING btree ("version_updated_at");
  CREATE INDEX "_apps_v_version_version_created_at_idx" ON "_apps_v" USING btree ("version_created_at");
  CREATE INDEX "_apps_v_version_version__status_idx" ON "_apps_v" USING btree ("version__status");
  CREATE INDEX "_apps_v_created_at_idx" ON "_apps_v" USING btree ("created_at");
  CREATE INDEX "_apps_v_updated_at_idx" ON "_apps_v" USING btree ("updated_at");
  CREATE INDEX "_apps_v_latest_idx" ON "_apps_v" USING btree ("latest");
  CREATE INDEX "blog_posts_tags_order_idx" ON "blog_posts_tags" USING btree ("_order");
  CREATE INDEX "blog_posts_tags_parent_id_idx" ON "blog_posts_tags" USING btree ("_parent_id");
  CREATE INDEX "blog_posts_author_idx" ON "blog_posts" USING btree ("author_id");
  CREATE INDEX "blog_posts_featured_image_idx" ON "blog_posts" USING btree ("featured_image_id");
  CREATE INDEX "blog_posts_seo_seo_og_image_idx" ON "blog_posts" USING btree ("seo_og_image_id");
  CREATE UNIQUE INDEX "blog_posts_slug_idx" ON "blog_posts" USING btree ("slug");
  CREATE INDEX "blog_posts_updated_at_idx" ON "blog_posts" USING btree ("updated_at");
  CREATE INDEX "blog_posts_created_at_idx" ON "blog_posts" USING btree ("created_at");
  CREATE INDEX "blog_posts__status_idx" ON "blog_posts" USING btree ("_status");
  CREATE INDEX "blog_posts_rels_order_idx" ON "blog_posts_rels" USING btree ("order");
  CREATE INDEX "blog_posts_rels_parent_idx" ON "blog_posts_rels" USING btree ("parent_id");
  CREATE INDEX "blog_posts_rels_path_idx" ON "blog_posts_rels" USING btree ("path");
  CREATE INDEX "blog_posts_rels_categories_id_idx" ON "blog_posts_rels" USING btree ("categories_id");
  CREATE INDEX "blog_posts_rels_projects_id_idx" ON "blog_posts_rels" USING btree ("projects_id");
  CREATE INDEX "_blog_posts_v_version_tags_order_idx" ON "_blog_posts_v_version_tags" USING btree ("_order");
  CREATE INDEX "_blog_posts_v_version_tags_parent_id_idx" ON "_blog_posts_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_blog_posts_v_parent_idx" ON "_blog_posts_v" USING btree ("parent_id");
  CREATE INDEX "_blog_posts_v_version_version_author_idx" ON "_blog_posts_v" USING btree ("version_author_id");
  CREATE INDEX "_blog_posts_v_version_version_featured_image_idx" ON "_blog_posts_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_blog_posts_v_version_seo_version_seo_og_image_idx" ON "_blog_posts_v" USING btree ("version_seo_og_image_id");
  CREATE INDEX "_blog_posts_v_version_version_slug_idx" ON "_blog_posts_v" USING btree ("version_slug");
  CREATE INDEX "_blog_posts_v_version_version_updated_at_idx" ON "_blog_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_blog_posts_v_version_version_created_at_idx" ON "_blog_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_blog_posts_v_version_version__status_idx" ON "_blog_posts_v" USING btree ("version__status");
  CREATE INDEX "_blog_posts_v_created_at_idx" ON "_blog_posts_v" USING btree ("created_at");
  CREATE INDEX "_blog_posts_v_updated_at_idx" ON "_blog_posts_v" USING btree ("updated_at");
  CREATE INDEX "_blog_posts_v_latest_idx" ON "_blog_posts_v" USING btree ("latest");
  CREATE INDEX "_blog_posts_v_rels_order_idx" ON "_blog_posts_v_rels" USING btree ("order");
  CREATE INDEX "_blog_posts_v_rels_parent_idx" ON "_blog_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_blog_posts_v_rels_path_idx" ON "_blog_posts_v_rels" USING btree ("path");
  CREATE INDEX "_blog_posts_v_rels_categories_id_idx" ON "_blog_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX "_blog_posts_v_rels_projects_id_idx" ON "_blog_posts_v_rels" USING btree ("projects_id");
  CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_image_idx" ON "categories" USING btree ("image_id");
  CREATE INDEX "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "categories__status_idx" ON "categories" USING btree ("_status");
  CREATE INDEX "_categories_v_parent_idx" ON "_categories_v" USING btree ("parent_id");
  CREATE INDEX "_categories_v_version_version_slug_idx" ON "_categories_v" USING btree ("version_slug");
  CREATE INDEX "_categories_v_version_version_image_idx" ON "_categories_v" USING btree ("version_image_id");
  CREATE INDEX "_categories_v_version_version_parent_idx" ON "_categories_v" USING btree ("version_parent_id");
  CREATE INDEX "_categories_v_version_version_updated_at_idx" ON "_categories_v" USING btree ("version_updated_at");
  CREATE INDEX "_categories_v_version_version_created_at_idx" ON "_categories_v" USING btree ("version_created_at");
  CREATE INDEX "_categories_v_version_version__status_idx" ON "_categories_v" USING btree ("version__status");
  CREATE INDEX "_categories_v_created_at_idx" ON "_categories_v" USING btree ("created_at");
  CREATE INDEX "_categories_v_updated_at_idx" ON "_categories_v" USING btree ("updated_at");
  CREATE INDEX "_categories_v_latest_idx" ON "_categories_v" USING btree ("latest");
  CREATE INDEX "companies_tags_order_idx" ON "companies_tags" USING btree ("_order");
  CREATE INDEX "companies_tags_parent_id_idx" ON "companies_tags" USING btree ("_parent_id");
  CREATE INDEX "companies_logo_idx" ON "companies" USING btree ("logo_id");
  CREATE UNIQUE INDEX "companies_slug_idx" ON "companies" USING btree ("slug");
  CREATE INDEX "companies_updated_at_idx" ON "companies" USING btree ("updated_at");
  CREATE INDEX "companies_created_at_idx" ON "companies" USING btree ("created_at");
  CREATE INDEX "companies__status_idx" ON "companies" USING btree ("_status");
  CREATE INDEX "companies_rels_order_idx" ON "companies_rels" USING btree ("order");
  CREATE INDEX "companies_rels_parent_idx" ON "companies_rels" USING btree ("parent_id");
  CREATE INDEX "companies_rels_path_idx" ON "companies_rels" USING btree ("path");
  CREATE INDEX "companies_rels_projects_id_idx" ON "companies_rels" USING btree ("projects_id");
  CREATE INDEX "companies_rels_testimonials_id_idx" ON "companies_rels" USING btree ("testimonials_id");
  CREATE INDEX "_companies_v_version_tags_order_idx" ON "_companies_v_version_tags" USING btree ("_order");
  CREATE INDEX "_companies_v_version_tags_parent_id_idx" ON "_companies_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_companies_v_parent_idx" ON "_companies_v" USING btree ("parent_id");
  CREATE INDEX "_companies_v_version_version_logo_idx" ON "_companies_v" USING btree ("version_logo_id");
  CREATE INDEX "_companies_v_version_version_slug_idx" ON "_companies_v" USING btree ("version_slug");
  CREATE INDEX "_companies_v_version_version_updated_at_idx" ON "_companies_v" USING btree ("version_updated_at");
  CREATE INDEX "_companies_v_version_version_created_at_idx" ON "_companies_v" USING btree ("version_created_at");
  CREATE INDEX "_companies_v_version_version__status_idx" ON "_companies_v" USING btree ("version__status");
  CREATE INDEX "_companies_v_created_at_idx" ON "_companies_v" USING btree ("created_at");
  CREATE INDEX "_companies_v_updated_at_idx" ON "_companies_v" USING btree ("updated_at");
  CREATE INDEX "_companies_v_latest_idx" ON "_companies_v" USING btree ("latest");
  CREATE INDEX "_companies_v_rels_order_idx" ON "_companies_v_rels" USING btree ("order");
  CREATE INDEX "_companies_v_rels_parent_idx" ON "_companies_v_rels" USING btree ("parent_id");
  CREATE INDEX "_companies_v_rels_path_idx" ON "_companies_v_rels" USING btree ("path");
  CREATE INDEX "_companies_v_rels_projects_id_idx" ON "_companies_v_rels" USING btree ("projects_id");
  CREATE INDEX "_companies_v_rels_testimonials_id_idx" ON "_companies_v_rels" USING btree ("testimonials_id");
  CREATE INDEX "education_achievements_order_idx" ON "education_achievements" USING btree ("_order");
  CREATE INDEX "education_achievements_parent_id_idx" ON "education_achievements" USING btree ("_parent_id");
  CREATE INDEX "education_coursework_order_idx" ON "education_coursework" USING btree ("_order");
  CREATE INDEX "education_coursework_parent_id_idx" ON "education_coursework" USING btree ("_parent_id");
  CREATE INDEX "education_tags_order_idx" ON "education_tags" USING btree ("_order");
  CREATE INDEX "education_tags_parent_id_idx" ON "education_tags" USING btree ("_parent_id");
  CREATE INDEX "education_certificate_image_idx" ON "education" USING btree ("certificate_image_id");
  CREATE INDEX "education_institution_idx" ON "education" USING btree ("institution_id");
  CREATE INDEX "education_updated_at_idx" ON "education" USING btree ("updated_at");
  CREATE INDEX "education_created_at_idx" ON "education" USING btree ("created_at");
  CREATE INDEX "education__status_idx" ON "education" USING btree ("_status");
  CREATE INDEX "education_rels_order_idx" ON "education_rels" USING btree ("order");
  CREATE INDEX "education_rels_parent_idx" ON "education_rels" USING btree ("parent_id");
  CREATE INDEX "education_rels_path_idx" ON "education_rels" USING btree ("path");
  CREATE INDEX "education_rels_projects_id_idx" ON "education_rels" USING btree ("projects_id");
  CREATE INDEX "education_rels_skills_id_idx" ON "education_rels" USING btree ("skills_id");
  CREATE INDEX "_education_v_version_achievements_order_idx" ON "_education_v_version_achievements" USING btree ("_order");
  CREATE INDEX "_education_v_version_achievements_parent_id_idx" ON "_education_v_version_achievements" USING btree ("_parent_id");
  CREATE INDEX "_education_v_version_coursework_order_idx" ON "_education_v_version_coursework" USING btree ("_order");
  CREATE INDEX "_education_v_version_coursework_parent_id_idx" ON "_education_v_version_coursework" USING btree ("_parent_id");
  CREATE INDEX "_education_v_version_tags_order_idx" ON "_education_v_version_tags" USING btree ("_order");
  CREATE INDEX "_education_v_version_tags_parent_id_idx" ON "_education_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_education_v_parent_idx" ON "_education_v" USING btree ("parent_id");
  CREATE INDEX "_education_v_version_version_certificate_image_idx" ON "_education_v" USING btree ("version_certificate_image_id");
  CREATE INDEX "_education_v_version_version_institution_idx" ON "_education_v" USING btree ("version_institution_id");
  CREATE INDEX "_education_v_version_version_updated_at_idx" ON "_education_v" USING btree ("version_updated_at");
  CREATE INDEX "_education_v_version_version_created_at_idx" ON "_education_v" USING btree ("version_created_at");
  CREATE INDEX "_education_v_version_version__status_idx" ON "_education_v" USING btree ("version__status");
  CREATE INDEX "_education_v_created_at_idx" ON "_education_v" USING btree ("created_at");
  CREATE INDEX "_education_v_updated_at_idx" ON "_education_v" USING btree ("updated_at");
  CREATE INDEX "_education_v_latest_idx" ON "_education_v" USING btree ("latest");
  CREATE INDEX "_education_v_rels_order_idx" ON "_education_v_rels" USING btree ("order");
  CREATE INDEX "_education_v_rels_parent_idx" ON "_education_v_rels" USING btree ("parent_id");
  CREATE INDEX "_education_v_rels_path_idx" ON "_education_v_rels" USING btree ("path");
  CREATE INDEX "_education_v_rels_projects_id_idx" ON "_education_v_rels" USING btree ("projects_id");
  CREATE INDEX "_education_v_rels_skills_id_idx" ON "_education_v_rels" USING btree ("skills_id");
  CREATE INDEX "experience_achievements_order_idx" ON "experience_achievements" USING btree ("_order");
  CREATE INDEX "experience_achievements_parent_id_idx" ON "experience_achievements" USING btree ("_parent_id");
  CREATE INDEX "experience_references_order_idx" ON "experience_references" USING btree ("_order");
  CREATE INDEX "experience_references_parent_id_idx" ON "experience_references" USING btree ("_parent_id");
  CREATE INDEX "experience_responsibilities_order_idx" ON "experience_responsibilities" USING btree ("_order");
  CREATE INDEX "experience_responsibilities_parent_id_idx" ON "experience_responsibilities" USING btree ("_parent_id");
  CREATE INDEX "experience_tags_order_idx" ON "experience_tags" USING btree ("_order");
  CREATE INDEX "experience_tags_parent_id_idx" ON "experience_tags" USING btree ("_parent_id");
  CREATE INDEX "experience_company_idx" ON "experience" USING btree ("company_id");
  CREATE INDEX "experience_updated_at_idx" ON "experience" USING btree ("updated_at");
  CREATE INDEX "experience_created_at_idx" ON "experience" USING btree ("created_at");
  CREATE INDEX "experience__status_idx" ON "experience" USING btree ("_status");
  CREATE INDEX "experience_rels_order_idx" ON "experience_rels" USING btree ("order");
  CREATE INDEX "experience_rels_parent_idx" ON "experience_rels" USING btree ("parent_id");
  CREATE INDEX "experience_rels_path_idx" ON "experience_rels" USING btree ("path");
  CREATE INDEX "experience_rels_projects_id_idx" ON "experience_rels" USING btree ("projects_id");
  CREATE INDEX "experience_rels_skills_id_idx" ON "experience_rels" USING btree ("skills_id");
  CREATE INDEX "_experience_v_version_achievements_order_idx" ON "_experience_v_version_achievements" USING btree ("_order");
  CREATE INDEX "_experience_v_version_achievements_parent_id_idx" ON "_experience_v_version_achievements" USING btree ("_parent_id");
  CREATE INDEX "_experience_v_version_references_order_idx" ON "_experience_v_version_references" USING btree ("_order");
  CREATE INDEX "_experience_v_version_references_parent_id_idx" ON "_experience_v_version_references" USING btree ("_parent_id");
  CREATE INDEX "_experience_v_version_responsibilities_order_idx" ON "_experience_v_version_responsibilities" USING btree ("_order");
  CREATE INDEX "_experience_v_version_responsibilities_parent_id_idx" ON "_experience_v_version_responsibilities" USING btree ("_parent_id");
  CREATE INDEX "_experience_v_version_tags_order_idx" ON "_experience_v_version_tags" USING btree ("_order");
  CREATE INDEX "_experience_v_version_tags_parent_id_idx" ON "_experience_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_experience_v_parent_idx" ON "_experience_v" USING btree ("parent_id");
  CREATE INDEX "_experience_v_version_version_company_idx" ON "_experience_v" USING btree ("version_company_id");
  CREATE INDEX "_experience_v_version_version_updated_at_idx" ON "_experience_v" USING btree ("version_updated_at");
  CREATE INDEX "_experience_v_version_version_created_at_idx" ON "_experience_v" USING btree ("version_created_at");
  CREATE INDEX "_experience_v_version_version__status_idx" ON "_experience_v" USING btree ("version__status");
  CREATE INDEX "_experience_v_created_at_idx" ON "_experience_v" USING btree ("created_at");
  CREATE INDEX "_experience_v_updated_at_idx" ON "_experience_v" USING btree ("updated_at");
  CREATE INDEX "_experience_v_latest_idx" ON "_experience_v" USING btree ("latest");
  CREATE INDEX "_experience_v_rels_order_idx" ON "_experience_v_rels" USING btree ("order");
  CREATE INDEX "_experience_v_rels_parent_idx" ON "_experience_v_rels" USING btree ("parent_id");
  CREATE INDEX "_experience_v_rels_path_idx" ON "_experience_v_rels" USING btree ("path");
  CREATE INDEX "_experience_v_rels_projects_id_idx" ON "_experience_v_rels" USING btree ("projects_id");
  CREATE INDEX "_experience_v_rels_skills_id_idx" ON "_experience_v_rels" USING btree ("skills_id");
  CREATE INDEX "institutions_gallery_order_idx" ON "institutions_gallery" USING btree ("_order");
  CREATE INDEX "institutions_gallery_parent_id_idx" ON "institutions_gallery" USING btree ("_parent_id");
  CREATE INDEX "institutions_gallery_image_idx" ON "institutions_gallery" USING btree ("image_id");
  CREATE INDEX "institutions_social_media_order_idx" ON "institutions_social_media" USING btree ("_order");
  CREATE INDEX "institutions_social_media_parent_id_idx" ON "institutions_social_media" USING btree ("_parent_id");
  CREATE INDEX "institutions_tags_order_idx" ON "institutions_tags" USING btree ("_order");
  CREATE INDEX "institutions_tags_parent_id_idx" ON "institutions_tags" USING btree ("_parent_id");
  CREATE INDEX "institutions_logo_idx" ON "institutions" USING btree ("logo_id");
  CREATE UNIQUE INDEX "institutions_slug_idx" ON "institutions" USING btree ("slug");
  CREATE INDEX "institutions_updated_at_idx" ON "institutions" USING btree ("updated_at");
  CREATE INDEX "institutions_created_at_idx" ON "institutions" USING btree ("created_at");
  CREATE INDEX "institutions__status_idx" ON "institutions" USING btree ("_status");
  CREATE INDEX "_institutions_v_version_gallery_order_idx" ON "_institutions_v_version_gallery" USING btree ("_order");
  CREATE INDEX "_institutions_v_version_gallery_parent_id_idx" ON "_institutions_v_version_gallery" USING btree ("_parent_id");
  CREATE INDEX "_institutions_v_version_gallery_image_idx" ON "_institutions_v_version_gallery" USING btree ("image_id");
  CREATE INDEX "_institutions_v_version_social_media_order_idx" ON "_institutions_v_version_social_media" USING btree ("_order");
  CREATE INDEX "_institutions_v_version_social_media_parent_id_idx" ON "_institutions_v_version_social_media" USING btree ("_parent_id");
  CREATE INDEX "_institutions_v_version_tags_order_idx" ON "_institutions_v_version_tags" USING btree ("_order");
  CREATE INDEX "_institutions_v_version_tags_parent_id_idx" ON "_institutions_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_institutions_v_parent_idx" ON "_institutions_v" USING btree ("parent_id");
  CREATE INDEX "_institutions_v_version_version_logo_idx" ON "_institutions_v" USING btree ("version_logo_id");
  CREATE INDEX "_institutions_v_version_version_slug_idx" ON "_institutions_v" USING btree ("version_slug");
  CREATE INDEX "_institutions_v_version_version_updated_at_idx" ON "_institutions_v" USING btree ("version_updated_at");
  CREATE INDEX "_institutions_v_version_version_created_at_idx" ON "_institutions_v" USING btree ("version_created_at");
  CREATE INDEX "_institutions_v_version_version__status_idx" ON "_institutions_v" USING btree ("version__status");
  CREATE INDEX "_institutions_v_created_at_idx" ON "_institutions_v" USING btree ("created_at");
  CREATE INDEX "_institutions_v_updated_at_idx" ON "_institutions_v" USING btree ("updated_at");
  CREATE INDEX "_institutions_v_latest_idx" ON "_institutions_v" USING btree ("latest");
  CREATE INDEX "media_tags_order_idx" ON "media_tags" USING btree ("_order");
  CREATE INDEX "media_tags_parent_id_idx" ON "media_tags" USING btree ("_parent_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE INDEX "media__status_idx" ON "media" USING btree ("_status");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_tablet_sizes_tablet_filename_idx" ON "media" USING btree ("sizes_tablet_filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "_media_v_version_tags_order_idx" ON "_media_v_version_tags" USING btree ("_order");
  CREATE INDEX "_media_v_version_tags_parent_id_idx" ON "_media_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_media_v_parent_idx" ON "_media_v" USING btree ("parent_id");
  CREATE INDEX "_media_v_version_version_updated_at_idx" ON "_media_v" USING btree ("version_updated_at");
  CREATE INDEX "_media_v_version_version_created_at_idx" ON "_media_v" USING btree ("version_created_at");
  CREATE INDEX "_media_v_version_version__status_idx" ON "_media_v" USING btree ("version__status");
  CREATE INDEX "_media_v_version_version_filename_idx" ON "_media_v" USING btree ("version_filename");
  CREATE INDEX "_media_v_version_sizes_card_version_sizes_card_filename_idx" ON "_media_v" USING btree ("version_sizes_card_filename");
  CREATE INDEX "_media_v_version_sizes_tablet_version_sizes_tablet_filen_idx" ON "_media_v" USING btree ("version_sizes_tablet_filename");
  CREATE INDEX "_media_v_version_sizes_thumbnail_version_sizes_thumbnail_idx" ON "_media_v" USING btree ("version_sizes_thumbnail_filename");
  CREATE INDEX "_media_v_created_at_idx" ON "_media_v" USING btree ("created_at");
  CREATE INDEX "_media_v_updated_at_idx" ON "_media_v" USING btree ("updated_at");
  CREATE INDEX "_media_v_latest_idx" ON "_media_v" USING btree ("latest");
  CREATE INDEX "pages_blocks_about_additional_images_order_idx" ON "pages_blocks_about_additional_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_additional_images_parent_id_idx" ON "pages_blocks_about_additional_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_additional_images_image_idx" ON "pages_blocks_about_additional_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_about_key_skills_order_idx" ON "pages_blocks_about_key_skills" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_key_skills_parent_id_idx" ON "pages_blocks_about_key_skills" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_stats_order_idx" ON "pages_blocks_about_stats" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_stats_parent_id_idx" ON "pages_blocks_about_stats" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_order_idx" ON "pages_blocks_about" USING btree ("_order");
  CREATE INDEX "pages_blocks_about_parent_id_idx" ON "pages_blocks_about" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_about_path_idx" ON "pages_blocks_about" USING btree ("_path");
  CREATE INDEX "pages_blocks_about_profile_image_idx" ON "pages_blocks_about" USING btree ("profile_image_id");
  CREATE INDEX "pages_blocks_blog_posts_order_idx" ON "pages_blocks_blog_posts" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog_posts_parent_id_idx" ON "pages_blocks_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog_posts_path_idx" ON "pages_blocks_blog_posts" USING btree ("_path");
  CREATE INDEX "pages_blocks_contact_links_order_idx" ON "pages_blocks_contact_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_links_parent_id_idx" ON "pages_blocks_contact_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_order_idx" ON "pages_blocks_contact" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_parent_id_idx" ON "pages_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_path_idx" ON "pages_blocks_contact" USING btree ("_path");
  CREATE INDEX "pages_blocks_education_filter_options_education_types_order_idx" ON "pages_blocks_education_filter_options_education_types" USING btree ("order");
  CREATE INDEX "pages_blocks_education_filter_options_education_types_parent_idx" ON "pages_blocks_education_filter_options_education_types" USING btree ("parent_id");
  CREATE INDEX "pages_blocks_education_order_idx" ON "pages_blocks_education" USING btree ("_order");
  CREATE INDEX "pages_blocks_education_parent_id_idx" ON "pages_blocks_education" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_education_path_idx" ON "pages_blocks_education" USING btree ("_path");
  CREATE INDEX "pages_blocks_experience_order_idx" ON "pages_blocks_experience" USING btree ("_order");
  CREATE INDEX "pages_blocks_experience_parent_id_idx" ON "pages_blocks_experience" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_experience_path_idx" ON "pages_blocks_experience" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_secondary_buttons_order_idx" ON "pages_blocks_hero_secondary_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_secondary_buttons_parent_id_idx" ON "pages_blocks_hero_secondary_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_background_image_idx" ON "pages_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_hero_background_video_idx" ON "pages_blocks_hero" USING btree ("background_video_id");
  CREATE INDEX "pages_blocks_projects_order_idx" ON "pages_blocks_projects" USING btree ("_order");
  CREATE INDEX "pages_blocks_projects_parent_id_idx" ON "pages_blocks_projects" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_projects_path_idx" ON "pages_blocks_projects" USING btree ("_path");
  CREATE INDEX "pages_blocks_services_order_idx" ON "pages_blocks_services" USING btree ("_order");
  CREATE INDEX "pages_blocks_services_parent_id_idx" ON "pages_blocks_services" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_services_path_idx" ON "pages_blocks_services" USING btree ("_path");
  CREATE INDEX "pages_blocks_skills_order_idx" ON "pages_blocks_skills" USING btree ("_order");
  CREATE INDEX "pages_blocks_skills_parent_id_idx" ON "pages_blocks_skills" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_skills_path_idx" ON "pages_blocks_skills" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonials_order_idx" ON "pages_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_parent_id_idx" ON "pages_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_path_idx" ON "pages_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "pages_tags_order_idx" ON "pages_tags" USING btree ("_order");
  CREATE INDEX "pages_tags_parent_id_idx" ON "pages_tags" USING btree ("_parent_id");
  CREATE INDEX "pages_featured_image_idx" ON "pages" USING btree ("featured_image_id");
  CREATE INDEX "pages_seo_seo_og_image_idx" ON "pages" USING btree ("seo_og_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_blog_posts_id_idx" ON "pages_rels" USING btree ("blog_posts_id");
  CREATE INDEX "pages_rels_education_id_idx" ON "pages_rels" USING btree ("education_id");
  CREATE INDEX "pages_rels_experience_id_idx" ON "pages_rels" USING btree ("experience_id");
  CREATE INDEX "pages_rels_projects_id_idx" ON "pages_rels" USING btree ("projects_id");
  CREATE INDEX "pages_rels_services_id_idx" ON "pages_rels" USING btree ("services_id");
  CREATE INDEX "pages_rels_skills_id_idx" ON "pages_rels" USING btree ("skills_id");
  CREATE INDEX "pages_rels_testimonials_id_idx" ON "pages_rels" USING btree ("testimonials_id");
  CREATE INDEX "_pages_v_blocks_about_additional_images_order_idx" ON "_pages_v_blocks_about_additional_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_about_additional_images_parent_id_idx" ON "_pages_v_blocks_about_additional_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_about_additional_images_image_idx" ON "_pages_v_blocks_about_additional_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_about_key_skills_order_idx" ON "_pages_v_blocks_about_key_skills" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_about_key_skills_parent_id_idx" ON "_pages_v_blocks_about_key_skills" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_about_stats_order_idx" ON "_pages_v_blocks_about_stats" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_about_stats_parent_id_idx" ON "_pages_v_blocks_about_stats" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_about_order_idx" ON "_pages_v_blocks_about" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_about_parent_id_idx" ON "_pages_v_blocks_about" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_about_path_idx" ON "_pages_v_blocks_about" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_about_profile_image_idx" ON "_pages_v_blocks_about" USING btree ("profile_image_id");
  CREATE INDEX "_pages_v_blocks_blog_posts_order_idx" ON "_pages_v_blocks_blog_posts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog_posts_parent_id_idx" ON "_pages_v_blocks_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog_posts_path_idx" ON "_pages_v_blocks_blog_posts" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_contact_links_order_idx" ON "_pages_v_blocks_contact_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_links_parent_id_idx" ON "_pages_v_blocks_contact_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_order_idx" ON "_pages_v_blocks_contact" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_parent_id_idx" ON "_pages_v_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_path_idx" ON "_pages_v_blocks_contact" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_education_filter_options_education_types_order_idx" ON "_pages_v_blocks_education_filter_options_education_types" USING btree ("order");
  CREATE INDEX "_pages_v_blocks_education_filter_options_education_types_parent_idx" ON "_pages_v_blocks_education_filter_options_education_types" USING btree ("parent_id");
  CREATE INDEX "_pages_v_blocks_education_order_idx" ON "_pages_v_blocks_education" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_education_parent_id_idx" ON "_pages_v_blocks_education" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_education_path_idx" ON "_pages_v_blocks_education" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_experience_order_idx" ON "_pages_v_blocks_experience" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_experience_parent_id_idx" ON "_pages_v_blocks_experience" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_experience_path_idx" ON "_pages_v_blocks_experience" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_secondary_buttons_order_idx" ON "_pages_v_blocks_hero_secondary_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_secondary_buttons_parent_id_idx" ON "_pages_v_blocks_hero_secondary_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_background_image_idx" ON "_pages_v_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "_pages_v_blocks_hero_background_video_idx" ON "_pages_v_blocks_hero" USING btree ("background_video_id");
  CREATE INDEX "_pages_v_blocks_projects_order_idx" ON "_pages_v_blocks_projects" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_projects_parent_id_idx" ON "_pages_v_blocks_projects" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_projects_path_idx" ON "_pages_v_blocks_projects" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_services_order_idx" ON "_pages_v_blocks_services" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_services_parent_id_idx" ON "_pages_v_blocks_services" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_services_path_idx" ON "_pages_v_blocks_services" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_skills_order_idx" ON "_pages_v_blocks_skills" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_skills_parent_id_idx" ON "_pages_v_blocks_skills" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_skills_path_idx" ON "_pages_v_blocks_skills" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonials_order_idx" ON "_pages_v_blocks_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_path_idx" ON "_pages_v_blocks_testimonials" USING btree ("_path");
  CREATE INDEX "_pages_v_version_tags_order_idx" ON "_pages_v_version_tags" USING btree ("_order");
  CREATE INDEX "_pages_v_version_tags_parent_id_idx" ON "_pages_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_featured_image_idx" ON "_pages_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_pages_v_version_seo_version_seo_og_image_idx" ON "_pages_v" USING btree ("version_seo_og_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_blog_posts_id_idx" ON "_pages_v_rels" USING btree ("blog_posts_id");
  CREATE INDEX "_pages_v_rels_education_id_idx" ON "_pages_v_rels" USING btree ("education_id");
  CREATE INDEX "_pages_v_rels_experience_id_idx" ON "_pages_v_rels" USING btree ("experience_id");
  CREATE INDEX "_pages_v_rels_projects_id_idx" ON "_pages_v_rels" USING btree ("projects_id");
  CREATE INDEX "_pages_v_rels_services_id_idx" ON "_pages_v_rels" USING btree ("services_id");
  CREATE INDEX "_pages_v_rels_skills_id_idx" ON "_pages_v_rels" USING btree ("skills_id");
  CREATE INDEX "_pages_v_rels_testimonials_id_idx" ON "_pages_v_rels" USING btree ("testimonials_id");
  CREATE INDEX "projects_gallery_order_idx" ON "projects_gallery" USING btree ("_order");
  CREATE INDEX "projects_gallery_parent_id_idx" ON "projects_gallery" USING btree ("_parent_id");
  CREATE INDEX "projects_gallery_image_idx" ON "projects_gallery" USING btree ("image_id");
  CREATE INDEX "projects_technologies_order_idx" ON "projects_technologies" USING btree ("_order");
  CREATE INDEX "projects_technologies_parent_id_idx" ON "projects_technologies" USING btree ("_parent_id");
  CREATE INDEX "projects_tags_order_idx" ON "projects_tags" USING btree ("_order");
  CREATE INDEX "projects_tags_parent_id_idx" ON "projects_tags" USING btree ("_parent_id");
  CREATE INDEX "projects_client_idx" ON "projects" USING btree ("client_id");
  CREATE INDEX "projects_image_idx" ON "projects" USING btree ("image_id");
  CREATE UNIQUE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX "projects__status_idx" ON "projects" USING btree ("_status");
  CREATE INDEX "_projects_v_version_gallery_order_idx" ON "_projects_v_version_gallery" USING btree ("_order");
  CREATE INDEX "_projects_v_version_gallery_parent_id_idx" ON "_projects_v_version_gallery" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_gallery_image_idx" ON "_projects_v_version_gallery" USING btree ("image_id");
  CREATE INDEX "_projects_v_version_technologies_order_idx" ON "_projects_v_version_technologies" USING btree ("_order");
  CREATE INDEX "_projects_v_version_technologies_parent_id_idx" ON "_projects_v_version_technologies" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_version_tags_order_idx" ON "_projects_v_version_tags" USING btree ("_order");
  CREATE INDEX "_projects_v_version_tags_parent_id_idx" ON "_projects_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_projects_v_parent_idx" ON "_projects_v" USING btree ("parent_id");
  CREATE INDEX "_projects_v_version_version_client_idx" ON "_projects_v" USING btree ("version_client_id");
  CREATE INDEX "_projects_v_version_version_image_idx" ON "_projects_v" USING btree ("version_image_id");
  CREATE INDEX "_projects_v_version_version_slug_idx" ON "_projects_v" USING btree ("version_slug");
  CREATE INDEX "_projects_v_version_version_updated_at_idx" ON "_projects_v" USING btree ("version_updated_at");
  CREATE INDEX "_projects_v_version_version_created_at_idx" ON "_projects_v" USING btree ("version_created_at");
  CREATE INDEX "_projects_v_version_version__status_idx" ON "_projects_v" USING btree ("version__status");
  CREATE INDEX "_projects_v_created_at_idx" ON "_projects_v" USING btree ("created_at");
  CREATE INDEX "_projects_v_updated_at_idx" ON "_projects_v" USING btree ("updated_at");
  CREATE INDEX "_projects_v_latest_idx" ON "_projects_v" USING btree ("latest");
  CREATE INDEX "services_features_order_idx" ON "services_features" USING btree ("_order");
  CREATE INDEX "services_features_parent_id_idx" ON "services_features" USING btree ("_parent_id");
  CREATE INDEX "services_process_order_idx" ON "services_process" USING btree ("_order");
  CREATE INDEX "services_process_parent_id_idx" ON "services_process" USING btree ("_parent_id");
  CREATE INDEX "services_tags_order_idx" ON "services_tags" USING btree ("_order");
  CREATE INDEX "services_tags_parent_id_idx" ON "services_tags" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "services_slug_idx" ON "services" USING btree ("slug");
  CREATE INDEX "services_image_idx" ON "services" USING btree ("image_id");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX "services__status_idx" ON "services" USING btree ("_status");
  CREATE INDEX "services_rels_order_idx" ON "services_rels" USING btree ("order");
  CREATE INDEX "services_rels_parent_idx" ON "services_rels" USING btree ("parent_id");
  CREATE INDEX "services_rels_path_idx" ON "services_rels" USING btree ("path");
  CREATE INDEX "services_rels_skills_id_idx" ON "services_rels" USING btree ("skills_id");
  CREATE INDEX "services_rels_projects_id_idx" ON "services_rels" USING btree ("projects_id");
  CREATE INDEX "services_rels_testimonials_id_idx" ON "services_rels" USING btree ("testimonials_id");
  CREATE INDEX "_services_v_version_features_order_idx" ON "_services_v_version_features" USING btree ("_order");
  CREATE INDEX "_services_v_version_features_parent_id_idx" ON "_services_v_version_features" USING btree ("_parent_id");
  CREATE INDEX "_services_v_version_process_order_idx" ON "_services_v_version_process" USING btree ("_order");
  CREATE INDEX "_services_v_version_process_parent_id_idx" ON "_services_v_version_process" USING btree ("_parent_id");
  CREATE INDEX "_services_v_version_tags_order_idx" ON "_services_v_version_tags" USING btree ("_order");
  CREATE INDEX "_services_v_version_tags_parent_id_idx" ON "_services_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_services_v_parent_idx" ON "_services_v" USING btree ("parent_id");
  CREATE INDEX "_services_v_version_version_slug_idx" ON "_services_v" USING btree ("version_slug");
  CREATE INDEX "_services_v_version_version_image_idx" ON "_services_v" USING btree ("version_image_id");
  CREATE INDEX "_services_v_version_version_updated_at_idx" ON "_services_v" USING btree ("version_updated_at");
  CREATE INDEX "_services_v_version_version_created_at_idx" ON "_services_v" USING btree ("version_created_at");
  CREATE INDEX "_services_v_version_version__status_idx" ON "_services_v" USING btree ("version__status");
  CREATE INDEX "_services_v_created_at_idx" ON "_services_v" USING btree ("created_at");
  CREATE INDEX "_services_v_updated_at_idx" ON "_services_v" USING btree ("updated_at");
  CREATE INDEX "_services_v_latest_idx" ON "_services_v" USING btree ("latest");
  CREATE INDEX "_services_v_rels_order_idx" ON "_services_v_rels" USING btree ("order");
  CREATE INDEX "_services_v_rels_parent_idx" ON "_services_v_rels" USING btree ("parent_id");
  CREATE INDEX "_services_v_rels_path_idx" ON "_services_v_rels" USING btree ("path");
  CREATE INDEX "_services_v_rels_skills_id_idx" ON "_services_v_rels" USING btree ("skills_id");
  CREATE INDEX "_services_v_rels_projects_id_idx" ON "_services_v_rels" USING btree ("projects_id");
  CREATE INDEX "_services_v_rels_testimonials_id_idx" ON "_services_v_rels" USING btree ("testimonials_id");
  CREATE INDEX "skills_certifications_order_idx" ON "skills_certifications" USING btree ("_order");
  CREATE INDEX "skills_certifications_parent_id_idx" ON "skills_certifications" USING btree ("_parent_id");
  CREATE INDEX "skills_learning_resources_order_idx" ON "skills_learning_resources" USING btree ("_order");
  CREATE INDEX "skills_learning_resources_parent_id_idx" ON "skills_learning_resources" USING btree ("_parent_id");
  CREATE INDEX "skills_tags_order_idx" ON "skills_tags" USING btree ("_order");
  CREATE INDEX "skills_tags_parent_id_idx" ON "skills_tags" USING btree ("_parent_id");
  CREATE INDEX "skills_updated_at_idx" ON "skills" USING btree ("updated_at");
  CREATE INDEX "skills_created_at_idx" ON "skills" USING btree ("created_at");
  CREATE INDEX "skills__status_idx" ON "skills" USING btree ("_status");
  CREATE INDEX "skills_rels_order_idx" ON "skills_rels" USING btree ("order");
  CREATE INDEX "skills_rels_parent_idx" ON "skills_rels" USING btree ("parent_id");
  CREATE INDEX "skills_rels_path_idx" ON "skills_rels" USING btree ("path");
  CREATE INDEX "skills_rels_projects_id_idx" ON "skills_rels" USING btree ("projects_id");
  CREATE INDEX "_skills_v_version_certifications_order_idx" ON "_skills_v_version_certifications" USING btree ("_order");
  CREATE INDEX "_skills_v_version_certifications_parent_id_idx" ON "_skills_v_version_certifications" USING btree ("_parent_id");
  CREATE INDEX "_skills_v_version_learning_resources_order_idx" ON "_skills_v_version_learning_resources" USING btree ("_order");
  CREATE INDEX "_skills_v_version_learning_resources_parent_id_idx" ON "_skills_v_version_learning_resources" USING btree ("_parent_id");
  CREATE INDEX "_skills_v_version_tags_order_idx" ON "_skills_v_version_tags" USING btree ("_order");
  CREATE INDEX "_skills_v_version_tags_parent_id_idx" ON "_skills_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_skills_v_parent_idx" ON "_skills_v" USING btree ("parent_id");
  CREATE INDEX "_skills_v_version_version_updated_at_idx" ON "_skills_v" USING btree ("version_updated_at");
  CREATE INDEX "_skills_v_version_version_created_at_idx" ON "_skills_v" USING btree ("version_created_at");
  CREATE INDEX "_skills_v_version_version__status_idx" ON "_skills_v" USING btree ("version__status");
  CREATE INDEX "_skills_v_created_at_idx" ON "_skills_v" USING btree ("created_at");
  CREATE INDEX "_skills_v_updated_at_idx" ON "_skills_v" USING btree ("updated_at");
  CREATE INDEX "_skills_v_latest_idx" ON "_skills_v" USING btree ("latest");
  CREATE INDEX "_skills_v_rels_order_idx" ON "_skills_v_rels" USING btree ("order");
  CREATE INDEX "_skills_v_rels_parent_idx" ON "_skills_v_rels" USING btree ("parent_id");
  CREATE INDEX "_skills_v_rels_path_idx" ON "_skills_v_rels" USING btree ("path");
  CREATE INDEX "_skills_v_rels_projects_id_idx" ON "_skills_v_rels" USING btree ("projects_id");
  CREATE INDEX "social_networks_updated_at_idx" ON "social_networks" USING btree ("updated_at");
  CREATE INDEX "social_networks_created_at_idx" ON "social_networks" USING btree ("created_at");
  CREATE INDEX "social_networks__status_idx" ON "social_networks" USING btree ("_status");
  CREATE INDEX "_social_networks_v_parent_idx" ON "_social_networks_v" USING btree ("parent_id");
  CREATE INDEX "_social_networks_v_version_version_updated_at_idx" ON "_social_networks_v" USING btree ("version_updated_at");
  CREATE INDEX "_social_networks_v_version_version_created_at_idx" ON "_social_networks_v" USING btree ("version_created_at");
  CREATE INDEX "_social_networks_v_version_version__status_idx" ON "_social_networks_v" USING btree ("version__status");
  CREATE INDEX "_social_networks_v_created_at_idx" ON "_social_networks_v" USING btree ("created_at");
  CREATE INDEX "_social_networks_v_updated_at_idx" ON "_social_networks_v" USING btree ("updated_at");
  CREATE INDEX "_social_networks_v_latest_idx" ON "_social_networks_v" USING btree ("latest");
  CREATE INDEX "testimonials_tags_order_idx" ON "testimonials_tags" USING btree ("_order");
  CREATE INDEX "testimonials_tags_parent_id_idx" ON "testimonials_tags" USING btree ("_parent_id");
  CREATE INDEX "testimonials_client_photo_idx" ON "testimonials" USING btree ("client_photo_id");
  CREATE INDEX "testimonials_company_logo_idx" ON "testimonials" USING btree ("company_logo_id");
  CREATE INDEX "testimonials_project_idx" ON "testimonials" USING btree ("project_id");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE INDEX "testimonials__status_idx" ON "testimonials" USING btree ("_status");
  CREATE INDEX "_testimonials_v_version_tags_order_idx" ON "_testimonials_v_version_tags" USING btree ("_order");
  CREATE INDEX "_testimonials_v_version_tags_parent_id_idx" ON "_testimonials_v_version_tags" USING btree ("_parent_id");
  CREATE INDEX "_testimonials_v_parent_idx" ON "_testimonials_v" USING btree ("parent_id");
  CREATE INDEX "_testimonials_v_version_version_client_photo_idx" ON "_testimonials_v" USING btree ("version_client_photo_id");
  CREATE INDEX "_testimonials_v_version_version_company_logo_idx" ON "_testimonials_v" USING btree ("version_company_logo_id");
  CREATE INDEX "_testimonials_v_version_version_project_idx" ON "_testimonials_v" USING btree ("version_project_id");
  CREATE INDEX "_testimonials_v_version_version_updated_at_idx" ON "_testimonials_v" USING btree ("version_updated_at");
  CREATE INDEX "_testimonials_v_version_version_created_at_idx" ON "_testimonials_v" USING btree ("version_created_at");
  CREATE INDEX "_testimonials_v_version_version__status_idx" ON "_testimonials_v" USING btree ("version__status");
  CREATE INDEX "_testimonials_v_created_at_idx" ON "_testimonials_v" USING btree ("created_at");
  CREATE INDEX "_testimonials_v_updated_at_idx" ON "_testimonials_v" USING btree ("updated_at");
  CREATE INDEX "_testimonials_v_latest_idx" ON "_testimonials_v" USING btree ("latest");
  CREATE INDEX "users_social_links_order_idx" ON "users_social_links" USING btree ("_order");
  CREATE INDEX "users_social_links_parent_id_idx" ON "users_social_links" USING btree ("_parent_id");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_avatar_idx" ON "users" USING btree ("avatar_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE INDEX "users__status_idx" ON "users" USING btree ("_status");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "_users_v_version_social_links_order_idx" ON "_users_v_version_social_links" USING btree ("_order");
  CREATE INDEX "_users_v_version_social_links_parent_id_idx" ON "_users_v_version_social_links" USING btree ("_parent_id");
  CREATE INDEX "_users_v_version_sessions_order_idx" ON "_users_v_version_sessions" USING btree ("_order");
  CREATE INDEX "_users_v_version_sessions_parent_id_idx" ON "_users_v_version_sessions" USING btree ("_parent_id");
  CREATE INDEX "_users_v_parent_idx" ON "_users_v" USING btree ("parent_id");
  CREATE INDEX "_users_v_version_version_avatar_idx" ON "_users_v" USING btree ("version_avatar_id");
  CREATE INDEX "_users_v_version_version_updated_at_idx" ON "_users_v" USING btree ("version_updated_at");
  CREATE INDEX "_users_v_version_version_created_at_idx" ON "_users_v" USING btree ("version_created_at");
  CREATE INDEX "_users_v_version_version__status_idx" ON "_users_v" USING btree ("version__status");
  CREATE INDEX "_users_v_version_version_email_idx" ON "_users_v" USING btree ("version_email");
  CREATE INDEX "_users_v_created_at_idx" ON "_users_v" USING btree ("created_at");
  CREATE INDEX "_users_v_updated_at_idx" ON "_users_v" USING btree ("updated_at");
  CREATE INDEX "_users_v_latest_idx" ON "_users_v" USING btree ("latest");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_apps_id_idx" ON "payload_locked_documents_rels" USING btree ("apps_id");
  CREATE INDEX "payload_locked_documents_rels_blog_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_posts_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_companies_id_idx" ON "payload_locked_documents_rels" USING btree ("companies_id");
  CREATE INDEX "payload_locked_documents_rels_education_id_idx" ON "payload_locked_documents_rels" USING btree ("education_id");
  CREATE INDEX "payload_locked_documents_rels_experience_id_idx" ON "payload_locked_documents_rels" USING btree ("experience_id");
  CREATE INDEX "payload_locked_documents_rels_institutions_id_idx" ON "payload_locked_documents_rels" USING btree ("institutions_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_skills_id_idx" ON "payload_locked_documents_rels" USING btree ("skills_id");
  CREATE INDEX "payload_locked_documents_rels_social_networks_id_idx" ON "payload_locked_documents_rels" USING btree ("social_networks_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_settings_site_info_site_info_site_logo_idx" ON "site_settings" USING btree ("site_info_site_logo_id");
  CREATE INDEX "site_settings_site_info_site_info_favicon_idx" ON "site_settings" USING btree ("site_info_favicon_id");
  CREATE INDEX "site_settings__status_idx" ON "site_settings" USING btree ("_status");
  CREATE INDEX "site_settings_rels_order_idx" ON "site_settings_rels" USING btree ("order");
  CREATE INDEX "site_settings_rels_parent_idx" ON "site_settings_rels" USING btree ("parent_id");
  CREATE INDEX "site_settings_rels_path_idx" ON "site_settings_rels" USING btree ("path");
  CREATE INDEX "site_settings_rels_social_networks_id_idx" ON "site_settings_rels" USING btree ("social_networks_id");
  CREATE INDEX "site_settings_rels_pages_id_idx" ON "site_settings_rels" USING btree ("pages_id");
  CREATE INDEX "_site_settings_v_version_site_info_version_site_info_sit_idx" ON "_site_settings_v" USING btree ("version_site_info_site_logo_id");
  CREATE INDEX "_site_settings_v_version_site_info_version_site_info_fav_idx" ON "_site_settings_v" USING btree ("version_site_info_favicon_id");
  CREATE INDEX "_site_settings_v_version_version__status_idx" ON "_site_settings_v" USING btree ("version__status");
  CREATE INDEX "_site_settings_v_created_at_idx" ON "_site_settings_v" USING btree ("created_at");
  CREATE INDEX "_site_settings_v_updated_at_idx" ON "_site_settings_v" USING btree ("updated_at");
  CREATE INDEX "_site_settings_v_latest_idx" ON "_site_settings_v" USING btree ("latest");
  CREATE INDEX "_site_settings_v_rels_order_idx" ON "_site_settings_v_rels" USING btree ("order");
  CREATE INDEX "_site_settings_v_rels_parent_idx" ON "_site_settings_v_rels" USING btree ("parent_id");
  CREATE INDEX "_site_settings_v_rels_path_idx" ON "_site_settings_v_rels" USING btree ("path");
  CREATE INDEX "_site_settings_v_rels_social_networks_id_idx" ON "_site_settings_v_rels" USING btree ("social_networks_id");
  CREATE INDEX "_site_settings_v_rels_pages_id_idx" ON "_site_settings_v_rels" USING btree ("pages_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "apps" CASCADE;
  DROP TABLE "_apps_v" CASCADE;
  DROP TABLE "blog_posts_tags" CASCADE;
  DROP TABLE "blog_posts" CASCADE;
  DROP TABLE "blog_posts_rels" CASCADE;
  DROP TABLE "_blog_posts_v_version_tags" CASCADE;
  DROP TABLE "_blog_posts_v" CASCADE;
  DROP TABLE "_blog_posts_v_rels" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "_categories_v" CASCADE;
  DROP TABLE "companies_tags" CASCADE;
  DROP TABLE "companies" CASCADE;
  DROP TABLE "companies_rels" CASCADE;
  DROP TABLE "_companies_v_version_tags" CASCADE;
  DROP TABLE "_companies_v" CASCADE;
  DROP TABLE "_companies_v_rels" CASCADE;
  DROP TABLE "education_achievements" CASCADE;
  DROP TABLE "education_coursework" CASCADE;
  DROP TABLE "education_tags" CASCADE;
  DROP TABLE "education" CASCADE;
  DROP TABLE "education_rels" CASCADE;
  DROP TABLE "_education_v_version_achievements" CASCADE;
  DROP TABLE "_education_v_version_coursework" CASCADE;
  DROP TABLE "_education_v_version_tags" CASCADE;
  DROP TABLE "_education_v" CASCADE;
  DROP TABLE "_education_v_rels" CASCADE;
  DROP TABLE "experience_achievements" CASCADE;
  DROP TABLE "experience_references" CASCADE;
  DROP TABLE "experience_responsibilities" CASCADE;
  DROP TABLE "experience_tags" CASCADE;
  DROP TABLE "experience" CASCADE;
  DROP TABLE "experience_rels" CASCADE;
  DROP TABLE "_experience_v_version_achievements" CASCADE;
  DROP TABLE "_experience_v_version_references" CASCADE;
  DROP TABLE "_experience_v_version_responsibilities" CASCADE;
  DROP TABLE "_experience_v_version_tags" CASCADE;
  DROP TABLE "_experience_v" CASCADE;
  DROP TABLE "_experience_v_rels" CASCADE;
  DROP TABLE "institutions_gallery" CASCADE;
  DROP TABLE "institutions_social_media" CASCADE;
  DROP TABLE "institutions_tags" CASCADE;
  DROP TABLE "institutions" CASCADE;
  DROP TABLE "_institutions_v_version_gallery" CASCADE;
  DROP TABLE "_institutions_v_version_social_media" CASCADE;
  DROP TABLE "_institutions_v_version_tags" CASCADE;
  DROP TABLE "_institutions_v" CASCADE;
  DROP TABLE "media_tags" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "_media_v_version_tags" CASCADE;
  DROP TABLE "_media_v" CASCADE;
  DROP TABLE "pages_blocks_about_additional_images" CASCADE;
  DROP TABLE "pages_blocks_about_key_skills" CASCADE;
  DROP TABLE "pages_blocks_about_stats" CASCADE;
  DROP TABLE "pages_blocks_about" CASCADE;
  DROP TABLE "pages_blocks_blog_posts" CASCADE;
  DROP TABLE "pages_blocks_contact_links" CASCADE;
  DROP TABLE "pages_blocks_contact" CASCADE;
  DROP TABLE "pages_blocks_education_filter_options_education_types" CASCADE;
  DROP TABLE "pages_blocks_education" CASCADE;
  DROP TABLE "pages_blocks_experience" CASCADE;
  DROP TABLE "pages_blocks_hero_secondary_buttons" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_projects" CASCADE;
  DROP TABLE "pages_blocks_services" CASCADE;
  DROP TABLE "pages_blocks_skills" CASCADE;
  DROP TABLE "pages_blocks_testimonials" CASCADE;
  DROP TABLE "pages_tags" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_about_additional_images" CASCADE;
  DROP TABLE "_pages_v_blocks_about_key_skills" CASCADE;
  DROP TABLE "_pages_v_blocks_about_stats" CASCADE;
  DROP TABLE "_pages_v_blocks_about" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_posts" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_links" CASCADE;
  DROP TABLE "_pages_v_blocks_contact" CASCADE;
  DROP TABLE "_pages_v_blocks_education_filter_options_education_types" CASCADE;
  DROP TABLE "_pages_v_blocks_education" CASCADE;
  DROP TABLE "_pages_v_blocks_experience" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_secondary_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_projects" CASCADE;
  DROP TABLE "_pages_v_blocks_services" CASCADE;
  DROP TABLE "_pages_v_blocks_skills" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials" CASCADE;
  DROP TABLE "_pages_v_version_tags" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "projects_gallery" CASCADE;
  DROP TABLE "projects_technologies" CASCADE;
  DROP TABLE "projects_tags" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "_projects_v_version_gallery" CASCADE;
  DROP TABLE "_projects_v_version_technologies" CASCADE;
  DROP TABLE "_projects_v_version_tags" CASCADE;
  DROP TABLE "_projects_v" CASCADE;
  DROP TABLE "services_features" CASCADE;
  DROP TABLE "services_process" CASCADE;
  DROP TABLE "services_tags" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "services_rels" CASCADE;
  DROP TABLE "_services_v_version_features" CASCADE;
  DROP TABLE "_services_v_version_process" CASCADE;
  DROP TABLE "_services_v_version_tags" CASCADE;
  DROP TABLE "_services_v" CASCADE;
  DROP TABLE "_services_v_rels" CASCADE;
  DROP TABLE "skills_certifications" CASCADE;
  DROP TABLE "skills_learning_resources" CASCADE;
  DROP TABLE "skills_tags" CASCADE;
  DROP TABLE "skills" CASCADE;
  DROP TABLE "skills_rels" CASCADE;
  DROP TABLE "_skills_v_version_certifications" CASCADE;
  DROP TABLE "_skills_v_version_learning_resources" CASCADE;
  DROP TABLE "_skills_v_version_tags" CASCADE;
  DROP TABLE "_skills_v" CASCADE;
  DROP TABLE "_skills_v_rels" CASCADE;
  DROP TABLE "social_networks" CASCADE;
  DROP TABLE "_social_networks_v" CASCADE;
  DROP TABLE "testimonials_tags" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "_testimonials_v_version_tags" CASCADE;
  DROP TABLE "_testimonials_v" CASCADE;
  DROP TABLE "users_social_links" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "_users_v_version_social_links" CASCADE;
  DROP TABLE "_users_v_version_sessions" CASCADE;
  DROP TABLE "_users_v" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "site_settings_rels" CASCADE;
  DROP TABLE "_site_settings_v" CASCADE;
  DROP TABLE "_site_settings_v_rels" CASCADE;
  DROP TYPE "public"."enum_apps_status";
  DROP TYPE "public"."enum__apps_v_version_status";
  DROP TYPE "public"."enum_blog_posts_status";
  DROP TYPE "public"."enum__blog_posts_v_version_status";
  DROP TYPE "public"."enum_categories_category_type";
  DROP TYPE "public"."enum_categories_status";
  DROP TYPE "public"."enum__categories_v_version_category_type";
  DROP TYPE "public"."enum__categories_v_version_status";
  DROP TYPE "public"."enum_companies_company_size";
  DROP TYPE "public"."enum_companies_industry";
  DROP TYPE "public"."enum_companies_status";
  DROP TYPE "public"."enum__companies_v_version_company_size";
  DROP TYPE "public"."enum__companies_v_version_industry";
  DROP TYPE "public"."enum__companies_v_version_status";
  DROP TYPE "public"."enum_education_education_type";
  DROP TYPE "public"."enum_education_status";
  DROP TYPE "public"."enum__education_v_version_education_type";
  DROP TYPE "public"."enum__education_v_version_status";
  DROP TYPE "public"."enum_experience_employment_type";
  DROP TYPE "public"."enum_experience_remote_work";
  DROP TYPE "public"."enum_experience_status";
  DROP TYPE "public"."enum__experience_v_version_employment_type";
  DROP TYPE "public"."enum__experience_v_version_remote_work";
  DROP TYPE "public"."enum__experience_v_version_status";
  DROP TYPE "public"."enum_institutions_social_media_platform";
  DROP TYPE "public"."enum_institutions_institution_size";
  DROP TYPE "public"."enum_institutions_institution_type";
  DROP TYPE "public"."enum_institutions_status";
  DROP TYPE "public"."enum__institutions_v_version_social_media_platform";
  DROP TYPE "public"."enum__institutions_v_version_institution_size";
  DROP TYPE "public"."enum__institutions_v_version_institution_type";
  DROP TYPE "public"."enum__institutions_v_version_status";
  DROP TYPE "public"."enum_media_category";
  DROP TYPE "public"."enum_media_usage_rights";
  DROP TYPE "public"."enum_media_status";
  DROP TYPE "public"."enum__media_v_version_category";
  DROP TYPE "public"."enum__media_v_version_usage_rights";
  DROP TYPE "public"."enum__media_v_version_status";
  DROP TYPE "public"."enum_pages_blocks_about_key_skills_level";
  DROP TYPE "public"."enum_pages_blocks_about_cta_style";
  DROP TYPE "public"."enum_pages_blocks_about_layout_content_align";
  DROP TYPE "public"."enum_pages_blocks_about_layout_image_position";
  DROP TYPE "public"."enum_pages_blocks_blog_posts_display_options_items_per_row";
  DROP TYPE "public"."enum_pages_blocks_blog_posts_display_options_layout";
  DROP TYPE "public"."enum_pages_blocks_blog_posts_cta_style";
  DROP TYPE "public"."enum_pages_blocks_education_filter_options_education_types";
  DROP TYPE "public"."enum_pages_blocks_education_display_options_items_per_row";
  DROP TYPE "public"."enum_pages_blocks_education_display_options_layout";
  DROP TYPE "public"."enum_pages_blocks_education_timeline_options_style";
  DROP TYPE "public"."enum_pages_blocks_experience_display_options_items_per_row";
  DROP TYPE "public"."enum_pages_blocks_experience_display_options_layout";
  DROP TYPE "public"."enum_pages_blocks_experience_timeline_options_style";
  DROP TYPE "public"."enum_pages_blocks_hero_secondary_buttons_style";
  DROP TYPE "public"."enum_pages_blocks_hero_animation_type";
  DROP TYPE "public"."enum_pages_blocks_hero_cta_style";
  DROP TYPE "public"."enum_pages_blocks_hero_text_align";
  DROP TYPE "public"."enum_pages_blocks_hero_text_color";
  DROP TYPE "public"."enum_pages_blocks_projects_display_options_items_per_row";
  DROP TYPE "public"."enum_pages_blocks_projects_display_options_layout";
  DROP TYPE "public"."enum_pages_blocks_services_cta_style";
  DROP TYPE "public"."enum_pages_blocks_services_display_options_items_per_row";
  DROP TYPE "public"."enum_pages_blocks_services_display_options_layout";
  DROP TYPE "public"."enum_pages_blocks_skills_display_options_items_per_row";
  DROP TYPE "public"."enum_pages_blocks_skills_display_options_layout";
  DROP TYPE "public"."enum_pages_blocks_testimonials_display_options_items_per_row";
  DROP TYPE "public"."enum_pages_blocks_testimonials_display_options_layout";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_about_key_skills_level";
  DROP TYPE "public"."enum__pages_v_blocks_about_cta_style";
  DROP TYPE "public"."enum__pages_v_blocks_about_layout_content_align";
  DROP TYPE "public"."enum__pages_v_blocks_about_layout_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_blog_posts_display_options_items_per_row";
  DROP TYPE "public"."enum__pages_v_blocks_blog_posts_display_options_layout";
  DROP TYPE "public"."enum__pages_v_blocks_blog_posts_cta_style";
  DROP TYPE "public"."enum__pages_v_blocks_education_filter_options_education_types";
  DROP TYPE "public"."enum__pages_v_blocks_education_display_options_items_per_row";
  DROP TYPE "public"."enum__pages_v_blocks_education_display_options_layout";
  DROP TYPE "public"."enum__pages_v_blocks_education_timeline_options_style";
  DROP TYPE "public"."enum__pages_v_blocks_experience_display_options_items_per_row";
  DROP TYPE "public"."enum__pages_v_blocks_experience_display_options_layout";
  DROP TYPE "public"."enum__pages_v_blocks_experience_timeline_options_style";
  DROP TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_style";
  DROP TYPE "public"."enum__pages_v_blocks_hero_animation_type";
  DROP TYPE "public"."enum__pages_v_blocks_hero_cta_style";
  DROP TYPE "public"."enum__pages_v_blocks_hero_text_align";
  DROP TYPE "public"."enum__pages_v_blocks_hero_text_color";
  DROP TYPE "public"."enum__pages_v_blocks_projects_display_options_items_per_row";
  DROP TYPE "public"."enum__pages_v_blocks_projects_display_options_layout";
  DROP TYPE "public"."enum__pages_v_blocks_services_cta_style";
  DROP TYPE "public"."enum__pages_v_blocks_services_display_options_items_per_row";
  DROP TYPE "public"."enum__pages_v_blocks_services_display_options_layout";
  DROP TYPE "public"."enum__pages_v_blocks_skills_display_options_items_per_row";
  DROP TYPE "public"."enum__pages_v_blocks_skills_display_options_layout";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_display_options_items_per_row";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_display_options_layout";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_projects_project_type";
  DROP TYPE "public"."enum_projects_project_status";
  DROP TYPE "public"."enum_projects_status";
  DROP TYPE "public"."enum__projects_v_version_project_type";
  DROP TYPE "public"."enum__projects_v_version_project_status";
  DROP TYPE "public"."enum__projects_v_version_status";
  DROP TYPE "public"."enum_services_service_type";
  DROP TYPE "public"."enum_services_pricing_type";
  DROP TYPE "public"."enum_services_pricing_currency";
  DROP TYPE "public"."enum_services_availability";
  DROP TYPE "public"."enum_services_status";
  DROP TYPE "public"."enum__services_v_version_service_type";
  DROP TYPE "public"."enum__services_v_version_pricing_type";
  DROP TYPE "public"."enum__services_v_version_pricing_currency";
  DROP TYPE "public"."enum__services_v_version_availability";
  DROP TYPE "public"."enum__services_v_version_status";
  DROP TYPE "public"."enum_skills_learning_resources_type";
  DROP TYPE "public"."enum_skills_category";
  DROP TYPE "public"."enum_skills_level";
  DROP TYPE "public"."enum_skills_status";
  DROP TYPE "public"."enum__skills_v_version_learning_resources_type";
  DROP TYPE "public"."enum__skills_v_version_category";
  DROP TYPE "public"."enum__skills_v_version_level";
  DROP TYPE "public"."enum__skills_v_version_status";
  DROP TYPE "public"."enum_social_networks_platform_type";
  DROP TYPE "public"."enum_social_networks_status";
  DROP TYPE "public"."enum__social_networks_v_version_platform_type";
  DROP TYPE "public"."enum__social_networks_v_version_status";
  DROP TYPE "public"."enum_testimonials_rating";
  DROP TYPE "public"."enum_testimonials_service_type";
  DROP TYPE "public"."enum_testimonials_project_budget";
  DROP TYPE "public"."enum_testimonials_status";
  DROP TYPE "public"."enum__testimonials_v_version_rating";
  DROP TYPE "public"."enum__testimonials_v_version_service_type";
  DROP TYPE "public"."enum__testimonials_v_version_project_budget";
  DROP TYPE "public"."enum__testimonials_v_version_status";
  DROP TYPE "public"."enum_users_preferences_language";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_users_user_status";
  DROP TYPE "public"."enum_users_status";
  DROP TYPE "public"."enum__users_v_version_preferences_language";
  DROP TYPE "public"."enum__users_v_version_role";
  DROP TYPE "public"."enum__users_v_version_user_status";
  DROP TYPE "public"."enum__users_v_version_status";
  DROP TYPE "public"."enum_site_settings_site_info_display_mode";
  DROP TYPE "public"."enum_site_settings_site_info_orientation";
  DROP TYPE "public"."enum_site_settings_appearance_font_family";
  DROP TYPE "public"."enum_site_settings_status";
  DROP TYPE "public"."enum__site_settings_v_version_site_info_display_mode";
  DROP TYPE "public"."enum__site_settings_v_version_site_info_orientation";
  DROP TYPE "public"."enum__site_settings_v_version_appearance_font_family";
  DROP TYPE "public"."enum__site_settings_v_version_status";`)
}
