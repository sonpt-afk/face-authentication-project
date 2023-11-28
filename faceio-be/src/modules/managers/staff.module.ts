import { Module, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestMiddlewareConsumer } from 'nestjs-i18n/dist/types';
import { AuthMiddleware } from 'src/common/middlewares/auth.middleware';
import { Staff, StaffSchema } from './schema/staff.schema';
import { StaffsController } from './staff.controller';
import { StaffsService } from './staff.service';
import { StaffsRepository } from './staff.repository';
import { UsersModule } from '../users/users.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Staff.name, schema: StaffSchema }]),
    UsersModule,
  ],
  exports: [StaffsService],
  controllers: [StaffsController],
  providers: [StaffsService, StaffsRepository],
})
export class StaffsModule {
  public configure(consumer: NestMiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        // { path: 'manager', method: RequestMethod.GET },
        // { path: 'manager', method: RequestMethod.POST },
        // { path: 'manager/:id', method: RequestMethod.GET },
        // { path: 'manager/:id', method: RequestMethod.PUT },
        // { path: 'manager/:id', method: RequestMethod.DELETE },
      );
  }
}
