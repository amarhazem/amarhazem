import * as migration_20250916_172020_initial_schema from "./20250916_172020_initial_schema";
import * as migration_20250920_142836_footer from "./20250920_142836_footer";

export const migrations = [
  {
    up: migration_20250916_172020_initial_schema.up,
    down: migration_20250916_172020_initial_schema.down,
    name: "20250916_172020_initial_schema",
  },
  {
    up: migration_20250920_142836_footer.up,
    down: migration_20250920_142836_footer.down,
    name: "20250920_142836_footer",
  },
];
