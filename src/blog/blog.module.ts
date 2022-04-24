import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { CategoryController } from './controllers/category.controller';
import { PostController } from './controllers/post.controller';

@Module({
  imports: [SharedModule],
  controllers: [PostController, CategoryController],
})
export class BlogModule {}
