import * as migration_20250920_234741_initial from "./20250920_234741_initial";

export const migrations = [
  {
    up: migration_20250920_234741_initial.up,
    down: migration_20250920_234741_initial.down,
    name: "20250920_234741_initial",
  },
];
