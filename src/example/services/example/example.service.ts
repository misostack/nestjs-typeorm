import { Inject, Injectable } from '@nestjs/common';
import { CreateExampleDto, ExampleDto } from 'src/example/dtos';
import { faker } from '@faker-js/faker';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Example } from 'src/example/entities/example.entity';
import { ExampleRepositoryImp } from 'src/example/repositories/example.respository';

@Injectable()
export class ExampleService {
  constructor(
    @Inject('ExampleRepositoryImp')
    private ExampleRepositoryImp: ExampleRepositoryImp,
  ) {}
  async createOne(createExampleDto: CreateExampleDto): Promise<Example> {
    const example = await this.ExampleRepositoryImp.createOne(createExampleDto);
    return example;
  }
}

export const ExampleServiceInjectionKey = 'EXAMPLE_SERVICE';
