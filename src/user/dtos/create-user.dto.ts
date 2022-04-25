import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  MaxLength,
} from 'src/shared/dtos';
import { MAX_LENGTH_TEXT_FIELD } from 'src/shared/constants';
import { Gender, UserStatus } from '../entities/user.entity';

export class CreateUserDto {
  @ApiProperty()
  @MaxLength(60)
  @IsNotEmpty()
  readonly firstName: string;
  @ApiProperty()
  @MaxLength(60)
  @IsNotEmpty()
  readonly lastName: string;
  @ApiProperty()
  @MaxLength(60)
  @IsNotEmpty()
  readonly login: string;
  @ApiProperty()
  @MaxLength(60)
  @IsNotEmpty()
  readonly password: string;
  @MaxLength(120)
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  @IsUrl()
  @IsOptional()
  readonly avatar: string;
  @ApiProperty({
    description: JSON.stringify(Object.values(Gender)),
    enum: [Gender.UNKNOWN, Gender.MALE, Gender.FEMALE],
    example: Gender.UNKNOWN,
  })
  @IsEnum(Gender)
  readonly gender: Gender;
  @ApiProperty()
  @MaxLength(300)
  @IsOptional()
  readonly address: string;
  @ApiProperty()
  @MaxLength(MAX_LENGTH_TEXT_FIELD)
  @IsOptional()
  readonly signature: string;
}
