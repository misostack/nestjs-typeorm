import { DATABASE_CONFIG } from 'src/config/environment';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';

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
