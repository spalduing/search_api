import { FromSchema } from 'json-schema-to-ts';

import objectEntityController from '../controllers/objectEntityController';

const { get, getObject, post, put, remove } = objectEntityController;

const OBJECT_REPLY = {
  id: { type: 'integer' },
  title: { type: 'string' },
  photo: { type: 'string' },
  description: { type: 'string' },
  shortDescription: { type: 'string' },
  createdAt: { type: 'string', format: 'date-time' },
} as const;

export const GetObjectEntityReplySchema = {
  type: 'object',
  properties: OBJECT_REPLY,
} as const;

export const PostObjectEntityRequestSchema = {
  type: 'object',
  properties: OBJECT_REPLY,
  required: ['title', 'photo', 'shortDescription'],
} as const;

export type ObjectEntityType = FromSchema<typeof PostObjectEntityRequestSchema>;

const objectOptions = {
  getObjectsOptions: {
    preValidation: [],
    schema: {
      response: {
        200: {
          type: 'array',
          items: GetObjectEntityReplySchema,
        },
      },
    },
    handler: get,
  },

  getObjectOptions: {
    preValidation: [],
    schema: {
      response: {
        200: GetObjectEntityReplySchema,
      },
    },
    handler: getObject,
  },

  postObjetOptions: {
    preValidation: [],
    schema: {
      body: PostObjectEntityRequestSchema,
      response: {
        201: GetObjectEntityReplySchema,
      },
    },
    handler: post,
  },

  putObjectOptions: {
    preValidation: [],
    schema: {
      body: PostObjectEntityRequestSchema,
      response: {
        200: GetObjectEntityReplySchema,
      },
    },
    handler: put,
  },

  deleteObjetOptions: {
    preValidation: [],
    schema: {
      response: {
        401: {
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
      },
    },
    handler: remove,
  },
};

export default objectOptions;
