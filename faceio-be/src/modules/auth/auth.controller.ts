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
import { LoginDto } from './dtos/login.dto';

@ApiTags('FaceIO SAAS')
@Controller('auth')
export class AuthFaceIOController {
  constructor(private authFaceIOService: AuthFaceIOService) {}
  @Post('/signin')
  @HttpCode(HttpStatus.OK)
  async loginFaceIO(@Body() loginDto: LoginDto) {
    return this.authFaceIOService.loginFaceIO(loginDto);
  }

  @Post('/register')
  @HttpCode(HttpStatus.OK)
  async registerFaceIO(@Body() createUserDto: CreateUserDto) {
    return this.authFaceIOService.registerFaceIO(createUserDto);
  }
}
