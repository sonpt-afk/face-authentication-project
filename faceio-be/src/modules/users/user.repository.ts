import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseAbstractRepository } from 'src/base/mongo/base.abstract.repository';
import { User } from './schema/user.schema';
import { UserRepositoryInterface } from './interfaces/user.repository.interface';

@Injectable()
export class UsersRepository
  extends BaseAbstractRepository<User>
  implements UserRepositoryInterface
{
  constructor(
    @InjectModel(User.name)
    private readonly usersRepository: Model<User>,
  ) {
    super(usersRepository);
  }

  async findAllUsers(paginateDto) {
    const { page, limit, search } = paginateDto;
    const skip = (page - 1) * limit;

    const examples = await this.usersRepository.aggregate([
      {
        $match: {
          units: { $exists: true, $not: { $size: 0 } },
          desc: search?.trim(),
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ]);

    return examples;
  }
}
