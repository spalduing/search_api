import { EntityManager } from 'typeorm/entity-manager/EntityManager';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';
import { DataSource } from 'typeorm';
import ObjectEntity from '../entities/ObjectEntity';

import server from '../../../server';
import { ObjectEntityType } from '../../types/Object';

const objectEntityServices = {
  async get(): Promise<ObjectEntity[]> {
    const connection: DataSource = server.dbConnection;

    const objectEntityRepo = connection.getRepository(ObjectEntity);
    const objects: ObjectEntity[] = await objectEntityRepo
      .createQueryBuilder('object')
      .getMany();

    return objects;
  },

  async getById(id: number): Promise<ObjectEntity> {
    const connection: DataSource = server.dbConnection;

    const objectEntityRepo = connection.getRepository(ObjectEntity);
    const object: ObjectEntity = await objectEntityRepo
      .createQueryBuilder('object')
      .getOne();

    return object;
  },

  async save(payload: ObjectEntityType): Promise<ObjectEntity> {
    const connection: DataSource = server.dbConnection;

    const objectEntityRepo = connection.getRepository(ObjectEntity);

    const objectPayload = {
      ...payload,
      createdAt: new Date(),
    };

    const object: ObjectEntity = objectEntityRepo.create(objectPayload);
    const response = await objectEntityRepo.save(object);

    return response;
  },

  async update(id: number, payload: ObjectEntityType): Promise<ObjectEntity> {
    const connection: DataSource = server.dbConnection;

    const objectEntityRepo = connection.getRepository(ObjectEntity);
    const objectPayload = {
      title: payload.title,
      photo: payload.photo,
      description: payload.description,
      shortDescription: payload.shortDescription,
      createdAt: new Date(),
    };

    const object: ObjectEntity = objectEntityRepo.create(objectPayload);
    object.id = id;

    const response = await objectEntityRepo.update(id, objectPayload);

    return object;
  },

  async remove(id: number): Promise<DeleteResult> {
    const connection: DataSource = server.dbConnection;

    const objectEntityRepo = connection.getRepository(ObjectEntity);

    const response = await objectEntityRepo.delete(id);

    return response;
  },
};

export default objectEntityServices;
