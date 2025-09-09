import * as migration_20250909_203121 from './20250909_203121';
import * as migration_20250909_225650 from './20250909_225650';

export const migrations = [
  {
    up: migration_20250909_203121.up,
    down: migration_20250909_203121.down,
    name: '20250909_203121',
  },
  {
    up: migration_20250909_225650.up,
    down: migration_20250909_225650.down,
    name: '20250909_225650'
  },
];
