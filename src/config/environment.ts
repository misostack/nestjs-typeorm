import 'dotenv/config';
export const DATABASE_CONFIG = {
  MAIN_DB_TYPE: 'mysql',
  MAIN_DB_URL: process.env.MYSQL_DB_URL || 'nestjs',
  MAIN_DB_CHARSET: 'utf8mb4_unicode_ci',
  MAIN_DB_TABLE_PREFIX: 'nestjs',
};
export class Environment {
  static getMainDatabaseConfiguration(dirname): any {
    return {
      type: DATABASE_CONFIG.MAIN_DB_TYPE,
      url: DATABASE_CONFIG.MAIN_DB_URL,
      entities: [dirname + '/modules/**/entities/*{.js,.ts}'],
      charset: DATABASE_CONFIG.MAIN_DB_CHARSET,
      // must not be synchronize automaticall, use data migration instea
      synchronize: false,
      // migrations
      migrations: [dirname + '/database/migrations/*.ts'],
      // cli
      cli: {
        migrationsDir: dirname + '/database/migrations',
      },
    };
  }
}
