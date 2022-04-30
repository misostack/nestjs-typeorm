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

## Database

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
