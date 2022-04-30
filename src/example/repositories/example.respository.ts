import faker from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateExampleDto } from '../dtos';
import { Example } from '../entities/example.entity';

@Injectable({})
export class ExampleRepositoryImp extends Repository<Example> {
  async createOne(createExampleDto: CreateExampleDto): Promise<Example> {
    const example: Example = plainToInstance(Example, {
      id: faker.datatype.number({ min: 1 }),
      createdAt: faker.date.future(),
      updatedAt: faker.date.future(),
      ...createExampleDto,
    });
    return example;
  }
}
