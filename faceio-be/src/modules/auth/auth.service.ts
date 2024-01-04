import {
  ForbiddenException,
  Injectable,
  NotAcceptableException,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dtos/login.dto';
import { ErrorEnum } from 'src/common/enums/error.enum';
import { MessageEnum } from 'src/common/enums/message.enum';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async login(loginDto: LoginDto) {
    const findUser = await this.usersService.findOneByEmail(loginDto.email);
    if (!findUser || !findUser.password) {
      throw new ForbiddenException(MessageEnum.INCORRECT_ACCOUNT_OR_PASSWORD);
    }

    const passwordMatches = await bcrypt.compare(
      loginDto.password,
      findUser.password,
    );

    if (!passwordMatches)
      throw new ForbiddenException(MessageEnum.INCORRECT_PASSWORD);
    const { password, ...userWithoutPassword } = findUser.toObject();
    const res = {
      message: MessageEnum.LOGGED_IN_SUCCESSFULLY,
      result: userWithoutPassword,
    };
    return res;
  }

  async register(createUserDto: CreateUserDto) {
    const findUser = await this.usersService.findOneByEmail(
      createUserDto.email,
    );

    if (findUser) {
      throw new ForbiddenException(ErrorEnum.USER_HAS_EXIST);
    }
    createUserDto.password = await this.hashPassword(createUserDto.password);

    const userCreated = await this.usersService.createUser(createUserDto);
    if (userCreated) {
      const token = await this.getTokens(userCreated.id, userCreated.email);
      const { password, ...userWithoutPassword } = (
        await this.usersService.updateUser(userCreated.id, { token })
      ).toObject();
      const res = {
        message: MessageEnum.ACCOUNT_SUCCESSFULLY_CREATED,
        result: userWithoutPassword,
      };
      return res;
    }
  }

  async hashPassword(data: string) {
    const SALT = 10;
    return bcrypt.hash(data, SALT);
  }

  async getTokens(userId: number, email: string) {
    const [accessToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
        },
        {
          secret: process.env.ACCESS_TOKEN_SECRET,
          expiresIn: process.env.ACCESS_TOKEN_TTL,
        },
      ),
    ]);

    return accessToken;
  }
}
