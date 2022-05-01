import { BaseEntity } from 'src/shared/entities';
import { generateTableName } from 'src/shared/helpers';
import { Entity } from 'typeorm';

@Entity({
  name: generateTableName('examples'),
})
export class Example extends BaseEntity {
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
