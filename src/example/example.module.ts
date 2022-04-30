import { Module } from '@nestjs/common';
import { ExampleController } from './controllers/example.controller';
import { ExampleRepositoryImp } from './repositories/example.respository';
import {
  ExampleService,
  ExampleServiceInjectionKey,
} from './services/example/example.service';

@Module({
  controllers: [ExampleController],
  providers: [
    {
      provide: ExampleServiceInjectionKey,
      useClass: ExampleService,
    },
    {
      provide: 'ExampleRepositoryImp',
      useClass: ExampleRepositoryImp,
    },
  ],
})
export class ExampleModule {}
