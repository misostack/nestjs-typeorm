import faker from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { ExampleRepository } from '../contracts/example.repository';
import { Example } from '../entities/example.entity';

@Injectable({})
export class ExampleRepositoryImp
  extends Repository<Example>
  implements ExampleRepository
{
  async createOne(payload: Example): Promise<Example> {
    const example: Example = plainToInstance(Example, {
      ...payload,
      id: faker.datatype.number({ min: 1 }),
      createdAt: faker.date.future(),
      updatedAt: faker.date.future(),
    });
    return example;
  }
}
