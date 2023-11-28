import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthFaceIOService } from './auth.service';
import { CreateUserDto } from '../users/dtos/create-user.dto';

@ApiTags('FaceIO SAAS')
@Controller('auth')
export class AuthFaceIOController {
  constructor(private authFaceIOService: AuthFaceIOService) {}
  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  async loginFaceIO() {
    return this.authFaceIOService.loginFaceIO();
  }

  @Post('/register')
  @HttpCode(HttpStatus.OK)
  async registerFaceIO(@Body() createUserDto: CreateUserDto) {
    return this.authFaceIOService.registerFaceIO(createUserDto);
  }
}
