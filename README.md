# NestJS Playground

**Version** : 8.2.5
**Node** : 16.14.2
**Architecture** : Monolith + Modular + MVC

## Getting start

```bash
cp .env.sample .env
yarn start:dev
```

### CLI

```bash
nest g module example
nest g controller example/controllers/example --flat
nest g controller user/controllers/user --flat --no-spec
```

## Folder structure

![Folder structure](./documents/nestjs.png)

## TypeORM CLI

### Migration

```bash
yarn typeorm migration:create -n set-default-charset
yarn typeorm migration:generate -n create-user-table
yarn typeorm migration:run
```

### Drop

```bash
yarn typeorm schema:drop
```

## Functionals

![Functional](./documents/NestJS-High-Level.png)

## Priorities

![Priorities](./documents/NestJS-Analyze.png)

## Codefirst Flow

![Code first](./documents/NestJS-Code-first-flow.png)

## Database

### Example Entity

```ts
export class BaseEntity {
  @Expose()
  @PrimaryGeneratedColumn()
  id: number;

  @Expose()
  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @Expose()
  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;
}

import { BaseEntity } from 'src/shared/entities';
import { generateTableName } from 'src/shared/helpers';
import { Column, Entity } from 'typeorm';

export enum ExampleGender {
  UNKNOWN = 0,
  FEMALE = 1,
  MALE = 2,
}

@Entity({
  name: generateTableName('examples'),
})
export class Example extends BaseEntity {
  @Column('varchar', { length: 60 })
  firstName: string;
  @Column('varchar', { length: 60, nullable: true, default: '' })
  lastName: string;
  @Column('enum', { enum: ExampleGender, enumName: 'ExampleGender' })
  gender: ExampleGender;
  @Column('varchar', { length: 60 })
  jobArea: string;
  @Column('varchar', { length: 60 })
  jobDescriptor: string;
  @Column('varchar', { length: 60 })
  jobTitle: string;
  @Column('varchar', { length: 60 })
  jobType: string;
  @Column('varchar', { length: 60 })
  prefix: string;
  // "BLOB, TEXT, GEOMETRY or JSON column 'content' can't have a default value",
  @Column('text', { nullable: true })
  content: string;
  @Column('blob', { nullable: true })
  avatar: string;
  @Column('boolean', { nullable: true, default: true })
  active: boolean;
  @Column('bigint', { nullable: true, default: 0 })
  net: number;
  @Column('float', { nullable: true, default: 0.0 })
  netIncomeRatio: number;
  @Column('date', { nullable: true, default: '1970-01-01' })
  dateOfBirth: Date;
  @Column('timestamp', {
    precision: 6,
    default: () => 'CURRENT_TIMESTAMP(6)',
    nullable: true,
  })
  bookingTime: Date;
}
```

```sql
INSERT INTO `nestjs_examples` (`id`, `firstName`, `lastName`, `gender`, `jobArea`, `jobDescriptor`, `jobTitle`, `jobType`, `prefix`, `content`, `avatar`, `active`, `net`, `netIncomeRatio`, `dateOfBirth`) VALUES (NULL, 'CURRENT_TIMESTAMP(6).000000', 'CURRENT_TIMESTAMP(6).000000', 'TCName', 'Example', '1', 'test', 'test', 'test', 'testt', 'test', 'test', NULL, '1', '0', '0', '1970-01-01');
```

## Funny things

### 1. NestJS Typescript and Path Alias

> tsconfig.json

```json
"compilerOptions": {
    "paths": {
      "@modules/*": ["src/*"],
      "@shared/*": ["src/shared/*"],
      "@config/*": ["src/config/*"],
      "@database/*": ["src/database/*"]
    },
}
```

> yourfile.ts

```ts
// Base Modules
import { DatabaseModule } from '@database/database.module';
// Feature Modules
import { UserModule } from '@modules/user/user.module';
import { BlogModule } from '@modules/blog/blog.module';
import { ExampleModule } from '@modules/example/example.module';
```

It's more clean right? But when you ran test, you may got this issue

> Cannot find module '@database/database.module' from 'src/example/services/example/example.service.spec.ts'

**How to solve it?**

- moduleNameMapper is your answer

> package.json

```json
"jest": {
    "moduleNameMapper": {
      "@modules/(.*)": [
        "<rootDir>/src/$1"
      ],
      "@shared/(.*)": [
        "<rootDir>/src/shared/$1"
      ],
      "@config/(.*)": [
        "<rootDir>/src/config/$1"
      ],
      "@database/(.*)": [
        "<rootDir>/src/database/$1"
      ]
    },
}
```

## Build

Steps:

- Test your Dockerfile : for node application
- Test your compose : node app + database + proxy

### Dockerfile

```bash
docker build -f ./Dockerfile -t jsguru/nestjs .
docker build -f ./Dockerfile -t jsguru/nestjs:0.1 -t jsguru/nestjs:lastest .
docker images -a

docker container run --name nestjs --env-file=./.env.docker -p 3000:3000 -d jsguru/nestjs
```

## API Standard

### Uniform Resource Interfaces

#### 1. Request

#### 2. Response

### Google Drive

- [Overview](https://docs.google.com/spreadsheets/d/1inTe8JJ_bGepaQv0LEQGYrGNf5FD7igSljqXEdHprO4/edit?usp=sharing)

### Users & Roles

![Users and Roles](./documents/NestJS-User-Role.png)

# References

- [API Design Standard](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design#:~:text=REST%20APIs%20use%20a%20uniform,PUT%2C%20PATCH%2C%20and%20DELETE.)

### Funny issues

- [TypeORM CLI 3.x funny issue](https://github.com/typeorm/typeorm/issues/8814)
