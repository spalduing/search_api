import { MigrationInterface, QueryRunner } from "typeorm";

export class AddObjectEnttiy1668566159821 implements MigrationInterface {
    name = 'AddObjectEnttiy1668566159821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`object\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`photo\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`shortDescription\` varchar(255) NOT NULL, \`createdAt\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`object\``);
    }

}
