import { Module } from '@nestjs/common';
import { SHARED_SERVICES } from './services';

@Module({
  providers: [...SHARED_SERVICES],
  exports: [...SHARED_SERVICES],
})
export class SharedModule {}
