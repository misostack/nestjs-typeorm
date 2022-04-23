import { DATABASE_CONFIG } from 'src/config/environment';

export const generateTableName = (name) => {
  return `${DATABASE_CONFIG.MAIN_DB_TABLE_PREFIX}_${name}`;
};
