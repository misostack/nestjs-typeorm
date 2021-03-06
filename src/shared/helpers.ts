import { DATABASE_CONFIG } from 'src/config/environment';
import { HttpCode, HttpStatus, INestApplication } from '@nestjs/common';
import {
  ApiResponseProperty,
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';
import * as fs from 'fs';
import { ValidationPipe } from './pipes';

export const generateTableName = (name) => {
  return `${DATABASE_CONFIG.MAIN_DB_TABLE_PREFIX}_${name}`;
};

export const setupApiDoc = (nodeEnv: string, app: INestApplication) => {
  if (nodeEnv !== 'production') {
    // initialize Swagger
    const config = new DocumentBuilder()
      .setTitle('API')
      .setDescription('The API description')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, config);
    fs.writeFileSync('./public/swagger-spec.json', JSON.stringify(document));
    SwaggerModule.setup('explorer', app, document);
  }
};

export const setupGlobalPipes = (app: INestApplication) => {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      stopAtFirstError: true,
    }),
  );
};

export interface ResponsePayload<T> {
  code: HttpStatus;
  payload: T;
}

export class ResponseFactory {
  static createSuccess<T>(payload: T): ResponsePayload<T> {
    return {
      code: HttpStatus.CREATED,
      payload,
    };
  }
}
