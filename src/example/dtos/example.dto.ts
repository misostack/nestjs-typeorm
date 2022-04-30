import { Exclude, Expose } from 'class-transformer';

export interface ExampleDto {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  jobArea: string;
  jobDescriptor: string;
  jobTitle: string;
  jobType: string;
  prefix: string;
  password: string;
}

export class Example {
  @Expose()
  id: string;
  @Expose()
  firstName: string;
  @Expose()
  lastName: string;
  @Expose()
  gender: string;
  @Expose()
  jobArea: string;
  @Expose()
  jobDescriptor: string;
  @Expose()
  jobTitle: string;
  @Expose()
  jobType: string;
  @Expose()
  prefix: string;
  // @Exclude({ toPlainOnly: true })
  password: string;
}
