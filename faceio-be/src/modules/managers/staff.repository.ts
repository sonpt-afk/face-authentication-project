import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseAbstractRepository } from 'src/base/mongo/base.abstract.repository';
import { StaffRepositoryInterface } from './interfaces/staff.repository.interface';
import { Staff } from './schema/staff.schema';

@Injectable()
export class StaffsRepository
  extends BaseAbstractRepository<Staff>
  implements StaffRepositoryInterface
{
  constructor(
    @InjectModel(Staff.name)
    private readonly staffRepository: Model<Staff>,
  ) {
    super(staffRepository);
  }

  async findAllStaffs(paginateDto) {
    const { page, limit, search } = paginateDto;
    const skip = (page - 1) * limit;
    const matchConditions = [];
    if (search) {
      matchConditions.push({
        $or: [
          { email: { $regex: new RegExp(search.trim(), 'i') } },
          { name: { $regex: new RegExp(search.trim(), 'i') } },
          { age: { $regex: new RegExp(search.trim(), 'i') } },
        ],
      });
    }
    const staffs = await this.staffRepository.aggregate([
      {
        $match: {
          $or: matchConditions,
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ]);

    return staffs;
  }
}
