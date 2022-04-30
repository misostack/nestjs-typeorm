import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { BaseDto } from 'src/shared/dtos';

export interface ExampleDto extends BaseDto {
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

export class CreateExampleDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  jobArea: string;
  @ApiProperty()
  jobDescriptor: string;
  @ApiProperty()
  jobTitle: string;
  @ApiProperty()
  jobType: string;
  @ApiProperty()
  prefix: string;
  @ApiProperty()
  password: string;
}
