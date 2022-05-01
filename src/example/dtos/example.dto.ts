import { HttpStatus } from '@nestjs/common';
import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseDto } from 'src/shared/dtos';
import { ResponsePayload } from 'src/shared/helpers';

export class ExampleDto extends BaseDto {
  @ApiResponseProperty()
  @Expose()
  firstName: string;
  @ApiResponseProperty()
  @Expose()
  lastName: string;
  @ApiResponseProperty()
  @Expose()
  gender: string;
  @ApiResponseProperty()
  @Expose()
  jobArea: string;
  @ApiResponseProperty()
  @Expose()
  jobDescriptor: string;
  @ApiResponseProperty()
  @Expose()
  jobTitle: string;
  @ApiResponseProperty()
  @Expose()
  jobType: string;
  @ApiResponseProperty()
  @Expose()
  prefix: string;
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

export class ExampleResponseDto implements ResponsePayload<ExampleDto> {
  @ApiResponseProperty({ example: 201 })
  code: HttpStatus;
  @ApiResponseProperty({
    type: ExampleDto,
    example: {
      id: 62292,
      createdAt: '2022-11-07T04:00:31.140Z',
      updatedAt: '2022-11-28T03:55:07.530Z',
      firstName: 'King',
      lastName: 'Gusikowski',
      gender: 'Female',
      jobArea: 'Response',
      jobDescriptor: 'Customer',
      jobTitle: 'Future Tactics Analyst',
      jobType: 'Manager',
      prefix: 'Dr.',
    },
  })
  payload: ExampleDto;
}
