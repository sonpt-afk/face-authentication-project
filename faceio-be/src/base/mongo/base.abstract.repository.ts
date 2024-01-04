import { Document, Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { HttpException } from '@nestjs/common';
import { BaseInterfaceRepository } from './base.interface.repository';

export class BaseAbstractRepository<T extends Document>
  implements BaseInterfaceRepository<T>
{
  constructor(@InjectModel('') private model: Model<T>) {}

  create(payload: any, ...args: any[]): Promise<any> {
    try {
      const createdItem: any = new this.model(payload);
      return createdItem.save();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  update(id: Types.ObjectId, updates: any, ...args: any[]): Promise<T> {
    try {
      console.log(1111, updates);

      const updated: any = this.model.findByIdAndUpdate(id, updates, {
        upsert: true,
      });
      return updated;
    } catch (e) {
      console.log(222, e);
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  async delete(id: any, ...args: any[]) {
    const item = await this.findOne(id);
    if (item) {
      await this.model.findByIdAndDelete(id);
    }
    return { message: 'success' };
  }

  async findOne(id: any, ...args: any[]): Promise<T> {
    try {
      const item = await this.model.findById(id).exec();
      if (!item) {
        throw new HttpException('Not found', 404);
      }
      return item;
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findAll(paginateOpts?: PaginatorOptions, ...args: any[]): Promise<T[]> {
    try {
      if (paginateOpts && paginateOpts.limit && paginateOpts.page) {
        const skips = paginateOpts.limit * (paginateOpts.page - 1);
        paginateOpts.limit = +paginateOpts.limit;
        return this.model.find().skip(skips).limit(paginateOpts.limit).exec();
      }
      return this.model.find().exec();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  async findOneBy(query: object, ...args: any[]): Promise<T> {
    try {
      const item = await this.model.findOne(query).exec();
      if (!item) {
        throw new HttpException('Not found', 404);
      }
      return item;
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findBy(
    query: object,
    paginateOpts?: PaginatorOptions,
    ...args: any[]
  ): Promise<T[]> {
    try {
      if (paginateOpts && paginateOpts.limit && paginateOpts.page) {
        const skips = paginateOpts.limit * (paginateOpts.page - 1);
        return this.model
          .find(query)
          .skip(skips)
          .limit(paginateOpts.limit)
          .exec();
      }
      return this.model.find().exec();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }
}

export interface PaginatorOptions {
  page?: number;
  limit?: number;
}
