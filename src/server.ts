import cors from '@fastify/cors';
import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import { config } from 'dotenv';

import dbConnection from './api/db/index';
import objectRoute from './api/routes/objectEntityRoute';

config();

// STARTING A SERVER WITH FASTIFY
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({
    logger: true,
  });

// // This plugin only works locally because it's a dev dependency
// // uncomment it if you want to use it
server.register(require('@fastify/swagger'), {
  swagger: {
    info: { title: 'search-api', version: '1.0' },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
  },
});

server.register(dbConnection);
server.register(cors);
server.register(objectRoute);

server.get('/', async (request, reply) => {
  reply.send({ text: 'Hello, Friend' });
});

// comment this to deploying on production
const start = async () => {
  try {
    await server.listen(5000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start(); // Please uncomment this line in case you wanna start the fastify server locally

export default server;
