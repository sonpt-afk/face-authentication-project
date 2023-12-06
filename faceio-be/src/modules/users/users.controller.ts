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

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly httpService: HttpService,
  ) {}
  @Get('/get-all')
  @HttpCode(HttpStatus.OK)
  async getAllUsers(@Query() paginateDto: PaginateDto) {
    const res = {
      message: MessageEnum.GET_ALL_USERS_SUCCESSFULLY,
      result: await this.usersService.findAllUsers(paginateDto),
    };
    return res;
  }

  @Delete('/deactive-user/:faceId')
  @HttpCode(HttpStatus.OK)
  async deleteUsers(@Param('faceId') faceId: string) {
    const res = {
      message: MessageEnum.DELETE_USER_SUCCESSFULLY,
      result: await this.usersService.findByIdUser(faceId),
    };
    return res;
  }
}
