import 'reflect-metadata';
import fastifyPlugin from 'fastify-plugin';
import { FastifyInstance } from 'fastify';
import { DataSource } from 'typeorm';

import AppDataSource from './data-source';


export default fastifyPlugin(async (server: FastifyInstance) => {
  try {
    const connection = await AppDataSource.initialize();

    server.decorate('dbConnection', connection);
  } catch (error) {
    console.log(error);
  }
});

declare module 'fastify' {
  interface FastifyInstance {
    dbConnection: DataSource;
  }
}
