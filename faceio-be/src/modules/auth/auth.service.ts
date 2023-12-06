import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthFaceIOService {
  constructor(private usersService: UsersService) {}
  async loginFaceIO(loginDto: LoginDto) {
    return loginDto;
  }

  async registerFaceIO(createUserDto: CreateUserDto) {
    const newUser = await this.usersService.createUser(createUserDto);
    console.log(2222, newUser);
    return newUser;
  }
}
