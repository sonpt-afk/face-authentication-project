import { Module, RequestMethod } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/schema/user.schema';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UsersModule,
    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          secret: process.env.ACCESS_TOKEN_SECRET,
          signOptions: {
            expiresIn: process.env.ACCESS_TOKEN_TTL,
          },
        };
      },
    }),
  ],
  exports: [],
  controllers: [AuthController],
  providers: [AuthService, UsersService, UsersRepository],
})
export class AuthModule {}
