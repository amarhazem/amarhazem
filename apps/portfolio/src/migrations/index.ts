import * as migration_20250909_203121 from './20250909_203121';

export const migrations = [
  {
    up: migration_20250909_203121.up,
    down: migration_20250909_203121.down,
    name: '20250909_203121'
  },
];
