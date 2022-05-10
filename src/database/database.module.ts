import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Environment } from 'src/config/environment';
import { Example } from 'src/example/entities/example.entity';

const ENTITIES = [Example];

@Module({
  imports: [
    // connect database
    TypeOrmModule.forRoot({
      ...Environment.getMainDatabaseConfiguration(__dirname),
      autoLoadEntities: true,
      // logging: true,
      logging:
        process.env.NODE_ENV === 'development' ? ['query', 'error'] : 'error',
    }),
    // registered entities
    TypeOrmModule.forFeature(ENTITIES),
  ],
})
export class DatabaseModule {}
