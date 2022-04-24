import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { BlogModule } from './modules/blog/blog.module';
import { RouterModule } from '@nestjs/core';

const routes = [
  { path: 'blog', module: BlogModule },
  { path: 'user', module: UserModule },
];

@Module({
  imports: [UserModule, BlogModule, RouterModule.register(routes)],
  controllers: [],
  providers: [],
})
export class AppModule {}
