import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupApiDoc } from './shared/helpers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupApiDoc(process.env.NODE_ENV, app);
  await app.listen(3000);
}
bootstrap();
