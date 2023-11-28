import {
  Injectable,
  NestMiddleware,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { MessageEnum } from '../enums/message.enum';
import { StatusEnum } from '../enums/status.enum';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private userService: UsersService) {}

  async use(req: any, res: any, next: (error?: any) => void) {
    console.log(11111, req.headers);

    const token = req.headers.authorization;
    if (!token) throw new UnauthorizedException(MessageEnum.NOT_AUTHORIZED);

    const user = await this.userService.findByIdUser(token.sub);
    if (!user) throw new UnauthorizedException(MessageEnum.NOT_AUTHORIZED);

    req.currentUser = user;
    next();
  }
}
