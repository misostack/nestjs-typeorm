import { Module } from '@nestjs/common';
import { ExampleController } from './controllers/example.controller';
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
  ],
})
export class ExampleModule {}
