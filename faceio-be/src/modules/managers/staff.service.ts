import { Injectable } from '@nestjs/common';

import { CreateStaffDto } from './dtos/create-staff.dto';
import { PaginateDto } from 'src/common/dtos/paginate.dto';
import { StaffsRepository } from './staff.repository';
import { UpdateStaffDto } from './dtos/update-staff.dto';

@Injectable()
export class StaffsService {
  constructor(private readonly staffsRepository: StaffsRepository) {}

  async createStaff(createStaffDto: CreateStaffDto) {
    return await this.staffsRepository.create(createStaffDto);
  }

  async updateStaff(id: any, updateStaffDto: UpdateStaffDto) {
    return await this.staffsRepository.update(id, updateStaffDto);
  }

  async deleteStaff(id: any) {
    return await this.staffsRepository.delete(id);
  }

  async findByIdStaff(id: string | number) {
    return await this.staffsRepository.findOne(id);
  }

  async findAllStaffs(paginateDto: PaginateDto) {
    return this.staffsRepository.findAllStaffs(paginateDto);
  }
}
