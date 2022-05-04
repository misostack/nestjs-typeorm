import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Environment } from 'src/config/environment';
import { Example } from 'src/example/entities/example.entity';

@Module({
  imports: [
    // connect database
    TypeOrmModule.forRoot({
      ...Environment.getMainDatabaseConfiguration(__dirname),
      autoLoadEntities: true,
      // logging: true,
      logging: ['query', 'error'],
    }),
    // registered entities
    TypeOrmModule.forFeature([Example]),
  ],
})
export class DatabaseModule {}
