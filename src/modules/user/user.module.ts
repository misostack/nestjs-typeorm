import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';

import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [SharedModule],
  providers: [],
  controllers: [AuthController],
})
export class UserModule {}
