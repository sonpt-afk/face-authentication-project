import { Module, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { NestMiddlewareConsumer } from 'nestjs-i18n/dist/types';
import { AuthMiddleware } from 'src/common/middlewares/auth.middleware';
import { UsersRepository } from './user.repository';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    HttpModule,
  ],
  exports: [UsersService, UsersRepository],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {
  // public configure(consumer: NestMiddlewareConsumer) {
  //   consumer
  //     .apply(AuthMiddleware)
  //     .forRoutes({ path: 'users/get-all', method: RequestMethod.GET });
  // }
}
