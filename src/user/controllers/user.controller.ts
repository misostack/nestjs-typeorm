import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrivateController } from 'src/shared/controllers';

import { CreateUserDto } from '../dtos';
import { User } from '../entities/user.entity';

@ApiTags('users')
@Controller()
export class UserController extends PrivateController {
  @Post()
  create(@Body() payload: CreateUserDto): Promise<User> {
    return null;
  }
}
