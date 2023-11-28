import { Module } from '@nestjs/common';
import { DatabaseMongoConfig } from './config/mongo';
import { ConfigModule } from '@nestjs/config';
import { AuthFaceIOModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { StaffsModule } from './modules/managers/staff.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseMongoConfig,
    AuthFaceIOModule,
    // UsersModule,
    StaffsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
