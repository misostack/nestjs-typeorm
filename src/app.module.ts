import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

// Base Modules
import { DatabaseModule } from '@database/database.module';
// Feature Modules
import { UserModule } from '@modules/user/user.module';
import { BlogModule } from '@modules/blog/blog.module';
import { ExampleModule } from '@modules/example/example.module';

const routes = [
  { path: '', module: BlogModule },
  { path: 'users', module: UserModule },
  { path: 'examples', module: ExampleModule },
];

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    BlogModule,
    ExampleModule,
    RouterModule.register(routes),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
