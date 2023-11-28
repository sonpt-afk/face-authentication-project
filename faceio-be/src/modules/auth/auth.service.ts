import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthFaceIOService {
  constructor(private usersService: UsersService) {}
  async loginFaceIO() {
    return 1;
  }

  async registerFaceIO(createUserDto: CreateUserDto) {
    const newUser = await this.usersService.createUser(createUserDto);
    console.log(2222, newUser);
    return newUser;
  }
}
