import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';

import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [SharedModule],
  providers: [],
  controllers: [AuthController, UserController],
})
export class UserModule {}
