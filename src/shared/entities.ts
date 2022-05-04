import { Expose } from 'class-transformer';
import { BaseEntity as TypeOrmBaseEntity } from 'typeorm';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity<T> extends TypeOrmBaseEntity {
  constructor(payload: Partial<T>) {
    super();
    Object.assign(this, payload);
  }

  @Expose()
  @PrimaryGeneratedColumn()
  id: number;

  @Expose()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Expose()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
