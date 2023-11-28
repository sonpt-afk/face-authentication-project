import { DeleteResult, UpdateResult } from 'typeorm';

export interface BaseInterfaceRepository<T> {
  create(data: T | any): Promise<T>;

  update(id: any, data: T | any): Promise<UpdateResult>;

  findByCondition(filterCondition: any): Promise<T>;

  findMultiple(relations: any): Promise<T[]>;

  findAll(filterCondition: any): Promise<T[]>;

  findOneById(id: string): Promise<T>;

  delete(id: string): Promise<DeleteResult>;

  deleteMultiple(deleteCondition: any): Promise<DeleteResult>;

  findMultiple(relations: any): Promise<T[]>;
}
