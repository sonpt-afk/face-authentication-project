import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Put,
  Req,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MessageEnum } from 'src/common/enums/message.enum';
import { PaginateDto } from 'src/common/dtos/paginate.dto';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@ApiTags('Users')
@Controller('manager')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly httpService: HttpService,
  ) {}
  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllUsers(@Query() paginateDto: PaginateDto) {
    const res = {
      message: MessageEnum.GET_ALL_STAFFS_SUCCESSFULLY,
      result: await this.usersService.findAllUsers(paginateDto),
    };
    return res;
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getUserById(@Param('id') id: string) {
    const res = {
      message: MessageEnum.GET_STAFF_DETAIL_SUCCESSFULLY,
      result: await this.usersService.findByIdUser(id),
    };
    return res;
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  async createUser(@Body() createStaffDto: CreateUserDto) {
    const res = {
      message: MessageEnum.CREATE_STAFF_SUCCESSFULLY,
      result: await this.usersService.createUser(createStaffDto),
    };
    return res;
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  async updateUser(
    @Param('id') id: string,
    @Body() updateStaffDto: UpdateUserDto,
  ) {
    const res = {
      message: MessageEnum.UPDATE_STAFF_SUCCESSFULLY,
      result: await this.usersService.updateUser(id, updateStaffDto),
    };
    return res;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async deleteUser(@Param('id') id: string) {
    const res = {
      message: MessageEnum.UPDATE_STAFF_SUCCESSFULLY,
      result: await this.usersService.deleteUserById(id)
    };
    return res;
  }
}
