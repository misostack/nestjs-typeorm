import { faker } from '@faker-js/faker';
import { Body, Controller, HttpStatus, Inject, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { PublicController } from 'src/shared/controllers';
import { ResponseFactory, ResponsePayload } from 'src/shared/helpers';

import { CreateExampleDto, ExampleDto, ExampleResponseDto } from '../dtos';
import { Example } from '../entities/example.entity';
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
  @ApiResponse({
    description: 'Created',
    status: HttpStatus.CREATED,
    type: ExampleResponseDto,
  })
  @Post()
  async create(@Body() payload: CreateExampleDto): Promise<ExampleResponseDto> {
    const plain = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      gender: faker.name.gender(true),
      jobArea: faker.name.jobArea(),
      jobDescriptor: faker.name.jobDescriptor(),
      jobTitle: faker.name.jobTitle(),
      jobType: faker.name.jobType(),
      prefix: faker.name.prefix(),
      password: faker.random.alpha(40),
    };
    const createExampleDto: CreateExampleDto = plainToInstance(
      CreateExampleDto,
      plain,
    );
    const example: ExampleDto = await this.exampleService.createOne(
      createExampleDto,
    );
    return ResponseFactory.createSuccess<ExampleDto>(
      instanceToPlain(example) as ExampleDto,
    );
  }
}
