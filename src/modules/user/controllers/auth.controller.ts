import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PublicController } from 'src/modules/shared/controllers';

@ApiTags('user')
@Controller('auth')
export class AuthController extends PublicController {
  @Post('/login')
  login() {
    return [];
  }
}
