import { Inject, Injectable } from '@nestjs/common';
import { CreateExampleDto, ExampleDto } from 'src/example/dtos';
import { faker } from '@faker-js/faker';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Example } from 'src/example/entities/example.entity';
import { ExampleRepositoryImp } from 'src/example/repositories/example.respository';
import { BaseService } from 'src/shared/services';
import { ExampleRepository } from 'src/example/contracts/example.repository';

@Injectable()
export class ExampleService extends BaseService {
  constructor(
    @Inject('ExampleRepositoryImp')
    private exampleRepository: ExampleRepository,
  ) {
    super();
  }
  async createOne(payload: CreateExampleDto): Promise<ExampleDto> {
    const example = await this.exampleRepository.createOne(
      plainToInstance(Example, payload),
    );
    return this.entityToModel<Example, ExampleDto>(example, ExampleDto);
  }
}

export const ExampleServiceInjectionKey = 'EXAMPLE_SERVICE';
