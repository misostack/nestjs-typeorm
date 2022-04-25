import { registerDecorator, ValidationOptions } from 'class-validator';
import { isEmpty } from 'lodash';

import { IsEnum, IsOptional, IsUrl, MaxLength } from 'class-validator';

const IsNotEmpty = (validationOptions?: ValidationOptions) => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      name: 'isNotEmpty',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return !isEmpty(value);
        },
      },
    });
  };
};

export { IsEnum, IsNotEmpty, IsOptional, IsUrl, MaxLength };
