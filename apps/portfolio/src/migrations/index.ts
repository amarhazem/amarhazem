import * as migration_20250916_172020_initial_schema from './20250916_172020_initial_schema';

export const migrations = [
  {
    up: migration_20250916_172020_initial_schema.up,
    down: migration_20250916_172020_initial_schema.down,
    name: '20250916_172020_initial_schema'
  },
];
