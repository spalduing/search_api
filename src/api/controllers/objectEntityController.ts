import { FastifyReply, FastifyRequest } from 'fastify';
import { DeleteResult } from 'typeorm';

import ObjectEntity from '../db/entities/ObjectEntity';
import objectEntityServices from '../db/services/objectEntityService';

const objectEntityController = {
  async get(_req: FastifyRequest, reply: FastifyReply) {
    try {
      const { get } = objectEntityServices;
      const response: ObjectEntity[] = await get();
      reply.send(response);
    } catch (error) {
      reply.code(500).send('Internal Server Error. Please Try Again Later');
      console.error(`######### => ${error}`);
    }
  },

  async getObject(_req: any, reply: FastifyReply) {
    try {
      const { getById } = objectEntityServices;
      const { id } = _req.params;
      const response: ObjectEntity = await getById(id);

      reply.send(response);
    } catch (error) {
      reply.code(500).send('Internal Server Error. Please Try Again Later');
      console.error(`######### => ${error}`);
    }
  },

  async post(_req: any, reply: FastifyReply) {
    try {
      const { save } = objectEntityServices;
      const payload = {
        createdAt: new Date(),
        ..._req.body,
      };

      const response: ObjectEntity = await save(payload);

      reply.send(response);
    } catch (error) {
      reply.code(500).send('Internal Server Error. Please Try Again Later');
      console.error(`######### => ${error}`);
    }
  },

  async put(_req: any, reply: FastifyReply) {
    try {
      const { update } = objectEntityServices;
      const { id } = _req.params;
      const payload = {
        createdAt: new Date(),
        ..._req.body,
      };

      const response: ObjectEntity = await update(id, payload);
      reply.send(response);
    } catch (error) {
      reply.code(500).send('Internal Server Error. Please Try Again Later');
      console.error(`######### => ${error}`);
    }
  },

  async remove(_req: any, reply: FastifyReply) {
    try {
      const { remove } = objectEntityServices;
      const { id } = _req.params;

      const response: DeleteResult = await remove(id);
      reply.send(response);
    } catch (error) {
      reply.code(500).send('Internal Server Error. Please Try Again Later');
      console.error(`######### => ${error}`);
    }
  },
};

export default objectEntityController;
