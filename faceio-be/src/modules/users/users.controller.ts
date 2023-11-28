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

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/get-all')
  @HttpCode(HttpStatus.OK)
  async getAllUsers(@Query() paginateDto: PaginateDto) {
    const res = {
      message: MessageEnum.GET_ALL_USERS_SUCCESSFULLY,
      result: await this.usersService.findAllUsers(paginateDto),
    };
    return res;
  }
}
