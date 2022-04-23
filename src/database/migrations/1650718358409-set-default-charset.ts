import { MigrationInterface, QueryRunner } from 'typeorm';

export class setDefaultCharset1650718358409 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const dbName = await queryRunner.getCurrentDatabase();
    queryRunner.query(`
            ALTER DATABASE
            ${dbName}
            CHARACTER SET = utf8mb4
            COLLATE = utf8mb4_unicode_ci; 
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
