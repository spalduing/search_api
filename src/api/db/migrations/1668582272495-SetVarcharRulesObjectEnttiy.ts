import { MigrationInterface, QueryRunner } from "typeorm";

export class SetVarcharRulesObjectEnttiy1668582272495 implements MigrationInterface {
    name = 'SetVarcharRulesObjectEnttiy1668582272495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`object\` CHANGE \`description\` \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`object\` DROP COLUMN \`shortDescription\``);
        await queryRunner.query(`ALTER TABLE \`object\` ADD \`shortDescription\` varchar(100) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`object\` DROP COLUMN \`shortDescription\``);
        await queryRunner.query(`ALTER TABLE \`object\` ADD \`shortDescription\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`object\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`);
    }

}
