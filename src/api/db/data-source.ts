import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from 'dotenv';

import ObjectEntity from './entities/ObjectEntity';

config();

const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [
        ObjectEntity
    ],
    migrations: ['./src/api/db/migrations/**/*{.ts,.js}'],
    synchronize: false,
    logging: false,
});

export default AppDataSource;