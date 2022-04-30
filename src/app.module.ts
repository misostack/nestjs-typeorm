import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { RouterModule } from '@nestjs/core';
import { ExampleModule } from './example/example.module';

const routes = [
  { path: '', module: BlogModule },
  { path: 'users', module: UserModule },
  { path: 'examples', module: ExampleModule },
];

@Module({
  imports: [
    UserModule,
    BlogModule,
    ExampleModule,
    RouterModule.register(routes),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
