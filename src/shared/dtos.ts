import {
  IsEnum,
  IsOptional,
  IsUrl,
  MaxLength,
  IsNotEmpty,
} from 'class-validator';
import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

// const IsNotEmpty = (validationOptions?: ValidationOptions) => {
//   return (object: Object, propertyName: string) => {
//     registerDecorator({
//       name: 'isNotEmpty',
//       target: object.constructor,
//       propertyName: propertyName,
//       options: validationOptions,
//       validator: {
//         validate(value: any) {
//           return !isEmpty(value);
//         },
//       },
//     });
//   };
// };

export { IsEnum, IsNotEmpty, IsOptional, IsUrl, MaxLength };

export abstract class BaseDto {
  @ApiResponseProperty()
  @Expose()
  id: number;
  @ApiResponseProperty()
  @Expose()
  createdAt: Date;
  @ApiResponseProperty()
  @Expose()
  updatedAt: Date;
}
