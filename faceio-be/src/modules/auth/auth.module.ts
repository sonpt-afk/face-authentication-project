import { Module, RequestMethod } from '@nestjs/common';
import { AuthFaceIOService } from './auth.service';
import { AuthFaceIOController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [],
  controllers: [AuthFaceIOController],
  providers: [AuthFaceIOService, UsersService, UsersRepository],
})
export class AuthFaceIOModule {}
