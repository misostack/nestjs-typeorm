import { MigrationInterface, QueryRunner } from 'typeorm';

export class createUserTable1651590710623 implements MigrationInterface {
  name = 'createUserTable1651590710623';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`nestjs_users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`firstName\` varchar(60) NOT NULL, \`lastName\` varchar(60) NOT NULL, \`login\` varchar(60) NOT NULL, \`password\` varchar(60) NOT NULL, \`email\` varchar(120) NOT NULL, \`status\` enum ('0', '1', '2', '3', '4') NOT NULL, \`avatar\` varchar(1024) NULL DEFAULT '', \`gender\` enum ('0', '1', '2') NULL DEFAULT '0', \`address\` varchar(300) NULL DEFAULT '', \`signature\` text NOT NULL, UNIQUE INDEX \`uc_users_login\` (\`login\`), UNIQUE INDEX \`uc_users_email\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`uc_users_email\` ON \`nestjs_users\``,
    );
    await queryRunner.query(
      `DROP INDEX \`uc_users_login\` ON \`nestjs_users\``,
    );
    await queryRunner.query(`DROP TABLE \`nestjs_users\``);
  }
}
