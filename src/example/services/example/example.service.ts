import { Injectable } from '@nestjs/common';
import { Example, ExampleDto } from 'src/example/dtos';
import { faker } from '@faker-js/faker';
import { instanceToPlain, plainToInstance } from 'class-transformer';

@Injectable()
export class ExampleService {
  async createOne(): Promise<ExampleDto> {
    const obj = {
      id: faker.random.alphaNumeric(),
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
    const example: Example = plainToInstance(Example, obj);
    // console.log(example.password);
    return instanceToPlain(example, {
      strategy: 'excludeAll',
    }) as any as ExampleDto;
  }
}

export const ExampleServiceInjectionKey = 'EXAMPLE_SERVICE';
