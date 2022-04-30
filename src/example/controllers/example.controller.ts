import { Controller, Inject, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PublicController } from 'src/shared/controllers';
import { ResponseFactory } from 'src/shared/helpers';
import { ExampleDto } from '../dtos';
import {
  ExampleService,
  ExampleServiceInjectionKey,
} from '../services/example/example.service';

@ApiTags('examples')
@Controller()
export class ExampleController extends PublicController {
  constructor(
    @Inject(ExampleServiceInjectionKey)
    private exampleService: ExampleService,
  ) {
    super();
  }
  @Post()
  async create() {
    const example: ExampleDto = await this.exampleService.createOne();
    return ResponseFactory.createSuccess<ExampleDto>(example);
  }
}
