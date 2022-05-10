import { BaseEntity } from '@shared/entities';
import { generateTableName } from '@shared/helpers';
import { Column, Entity } from 'typeorm';

export enum ExampleGender {
  UNKNOWN = 0,
  FEMALE = 1,
  MALE = 2,
}

@Entity({
  name: generateTableName('examples'),
})
export class Example extends BaseEntity<Example> {
  @Column('varchar', { length: 60 })
  firstName: string;
  @Column('varchar', { length: 60, nullable: true, default: '' })
  lastName: string;
  @Column('enum', { enum: ExampleGender, enumName: 'ExampleGender' })
  gender: ExampleGender;
  @Column('varchar', { length: 60 })
  jobArea: string;
  @Column('varchar', { length: 60 })
  jobDescriptor: string;
  @Column('varchar', { length: 60 })
  jobTitle: string;
  @Column('varchar', { length: 60 })
  jobType: string;
  @Column('varchar', { length: 60 })
  prefix: string;
  // "BLOB, TEXT, GEOMETRY or JSON column 'content' can't have a default value",
  @Column('text', { nullable: true })
  content: string;
  @Column('blob', { nullable: true })
  avatar: string;
  @Column('boolean', { nullable: true, default: true })
  active: boolean;
  @Column('bigint', { nullable: true, default: 0 })
  net: number;
  @Column('float', { nullable: true, default: 0.0 })
  netIncomeRatio: number;
  @Column('date', { nullable: true, default: '1970-01-01' })
  dateOfBirth: Date;
  @Column('timestamp', {
    precision: 6,
    default: () => 'CURRENT_TIMESTAMP(6)',
    nullable: true,
  })
  bookingTime: Date;
}
