import { Expose } from 'class-transformer';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @Expose()
  @PrimaryGeneratedColumn()
  id: number;

  @Expose()
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @Expose()
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}
