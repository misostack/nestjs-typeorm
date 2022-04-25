import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { RouterModule } from '@nestjs/core';

const routes = [
  { path: '', module: BlogModule },
  { path: 'users', module: UserModule },
];

@Module({
  imports: [UserModule, BlogModule, RouterModule.register(routes)],
  controllers: [],
  providers: [],
})
export class AppModule {}
