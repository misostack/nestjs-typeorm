import { Example } from '../entities/example.entity';

export interface ExampleRepository {
  createOne(createExampleDto: Example): Promise<Example>;
}
