import { Module, RequestMethod } from '@nestjs/common';
import { AuthFaceIOService } from './auth.service';
import { AuthFaceIOController } from './auth.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  exports: [],
  controllers: [AuthFaceIOController],
  providers: [AuthFaceIOService],
})
export class AuthFaceIOModule {}
