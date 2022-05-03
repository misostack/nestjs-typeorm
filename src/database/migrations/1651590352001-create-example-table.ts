import {MigrationInterface, QueryRunner} from "typeorm";

export class createExampleTable1651590352001 implements MigrationInterface {
    name = 'createExampleTable1651590352001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`nestjs_examples\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`firstName\` varchar(60) NOT NULL, \`lastName\` varchar(60) NULL DEFAULT '', \`gender\` enum ('0', '1', '2') NOT NULL, \`jobArea\` varchar(60) NOT NULL, \`jobDescriptor\` varchar(60) NOT NULL, \`jobTitle\` varchar(60) NOT NULL, \`jobType\` varchar(60) NOT NULL, \`prefix\` varchar(60) NOT NULL, \`content\` text NULL, \`avatar\` blob NULL, \`active\` tinyint NULL DEFAULT 1, \`net\` bigint NULL DEFAULT '0', \`netIncomeRatio\` float NULL DEFAULT '0', \`dateOfBirth\` date NULL DEFAULT '1970-01-01', \`bookingTime\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`nestjs_examples\``);
    }

}
