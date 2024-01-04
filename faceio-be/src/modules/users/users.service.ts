import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dtos/create-user.dto';
import { UsersRepository } from './user.repository';
import { PaginateDto } from 'src/common/dtos/paginate.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    return await this.usersRepository.create(createUserDto);
  }

  async updateUser(id: any, data: any) {
    return await this.usersRepository.update(id, data);
  }

  async findByIdUser(id: string | number) {
    return await this.usersRepository.findOne(id);
  }

  async findAllUsers(paginateDto: PaginateDto) {
    return this.usersRepository.findAllUsers(paginateDto);
  }

  async findOneByEmail(email: string) {
    try {
      return await this.usersRepository.findOneBy({ email });
    } catch (error) {
      return null;
    }
  }

  async deleteUserById(id: string | number) {
    try {
      return await this.usersRepository.delete(id);
    } catch (error) {
      return null;
    }
  }
}
