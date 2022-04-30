import { Expose } from 'class-transformer';
import { BaseEntity } from 'src/shared/entities';
import { generateTableName } from 'src/shared/helpers';
import { Entity } from 'typeorm';

@Entity({
  name: generateTableName('examples'),
})
export class Example extends BaseEntity {
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
