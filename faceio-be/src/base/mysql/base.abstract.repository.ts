import { BaseInterfaceRepository } from './base.interface.repository';
import { UpdateResult, DeleteResult, Repository } from 'typeorm';
export abstract class BaseAbstractRepository<T>
  implements BaseInterfaceRepository<T>
{
  private entity: Repository<T>;

  protected constructor(entity: Repository<T>) {
    this.entity = entity;
  }

  public async create(data: T | any): Promise<T> {
    return this.entity.save(data);
  }

  public async update(id: any, data: T | any): Promise<UpdateResult> {
    return this.entity.update(id, data);
  }

  public async findByCondition(filterCondition: any): Promise<T> {
    return this.entity.findOne({ where: filterCondition });
  }

  public async findMultiple(relations: any): Promise<T[]> {
    return this.entity.findBy(relations);
  }

  public async findAll(filterCondition = {}): Promise<T[]> {
    return this.entity.find(filterCondition);
  }

  public async findOneById(id: string | number): Promise<T> {
    return this.findByCondition({ id });
  }

  public async delete(id: string | number): Promise<DeleteResult> {
    return this.entity.delete(id);
  }

  public async deleteMultiple(deleteCondition: any): Promise<DeleteResult> {
    return this.entity.delete(deleteCondition);
  }
}
