import { BaseEntity } from 'src/shared/entities';
import { generateTableName } from 'src/shared/helpers';
import { Column, Entity, Unique } from 'typeorm';

export enum UserStatus {
  Deleted = 0,
  Pending = 1,
  Active = 2,
  InActive = 3,
  Locked = 4,
}

export enum Gender {
  UNKNOWN = 0,
  MALE = 1,
  FEMALE = 2,
}
// constraints
@Unique('uc_users_email', ['email'])
@Unique('uc_users_login', ['login'])
@Entity({
  name: generateTableName('users'),
})
export class User extends BaseEntity<User> {
  // fields
  @Column('varchar', { length: 60 })
  firstName: string;
  @Column('varchar', { length: 60 })
  lastName: string;
  @Column('varchar', { length: 60 })
  login: string;
  @Column('varchar', { length: 60 })
  password: string;
  @Column('varchar', { length: 120 })
  email: string;
  @Column('enum', { enum: UserStatus })
  status: UserStatus;
  @Column('varchar', { length: 1024, nullable: true, default: '' })
  avatar: string;
  @Column('enum', { enum: Gender, nullable: true, default: Gender.UNKNOWN })
  gender: Gender;
  @Column('varchar', { length: 300, nullable: true, default: '' })
  address: string;
  @Column('text')
  signature: string;
}
