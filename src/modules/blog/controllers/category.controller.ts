import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrivateController } from '../shared/controllers';

@ApiTags('blog')
@Controller('categories')
export class CategoryController extends PrivateController {
  @Get()
  index() {
    return [];
  }
}
