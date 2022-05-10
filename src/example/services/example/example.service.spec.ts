import faker from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';
import axios from 'axios';

import { DatabaseModule } from '@database/database.module';
import { Example } from '@modules/example/entities/example.entity';
import { getConnection } from 'typeorm';
import { ExampleService } from '@modules/example/services/example/example.service';

describe('ExampleService', () => {
  let service: ExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleService],
    }).compile();

    service = module.get<ExampleService>(ExampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('Example with ActiveRecord', () => {
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
    }).compile();
  });
  describe('Example insert data', () => {
    it('should return an example entity instance', async () => {
      const imageUrl = 'https://picsum.photos/480/320';
      const imageRes = await axios.get(imageUrl, {
        responseType: 'blob',
      });
      const plain: Partial<Example> = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        gender: Math.floor(faker.datatype.number({ min: 0, max: 2 })),
        jobArea: faker.name.jobArea(),
        jobDescriptor: faker.name.jobDescriptor(),
        jobTitle: faker.name.jobTitle(),
        jobType: faker.name.jobType(),
        prefix: faker.name.prefix(),
        content: faker.datatype.string(300),
        avatar: imageRes.data,
        active: faker.datatype.boolean(),
        net: Math.floor(faker.datatype.number()),
        netIncomeRatio: faker.datatype.float({
          min: 0.1,
          max: 0.5,
          precision: 2,
        }),
        dateOfBirth: faker.date.between(
          '1970-01-01T00:00:00.000Z',
          '2001-01-01T00:00:00.000Z',
        ),
        bookingTime: faker.date.between(
          '2022-05-01T00:00:00.000Z',
          '2023-01-01T00:00:00.000Z',
        ),
      };
      const example = new Example(plain);
      await example.save();
      expect(example.id).toBeTruthy();
    });
  });
  afterAll(async () => {
    // must close db connection after test
    await getConnection().close();
  });
});
