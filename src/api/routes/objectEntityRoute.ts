import { FastifyInstance } from 'fastify';

import objectOptions, { ObjectEntityType } from '../types/Object';

const {
  getObjectsOptions,
  getObjectOptions,
  postObjetOptions,
  putObjectOptions,
  deleteObjetOptions,
} = objectOptions;

function objectRoute(
  server: FastifyInstance,
  _options: Object,
  done: Function
) {
  server.get('/objects', getObjectsOptions);
  server.get('/objects/:id', getObjectOptions);
  server.post<{ Body: ObjectEntityType }>('/objects', postObjetOptions);
  server.put<{ Body: ObjectEntityType }>('/objects/:id', putObjectOptions);
  server.delete('/objects/:id', deleteObjetOptions);

  done();
}

export default objectRoute;
