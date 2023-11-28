import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';
import { SwaggerSetting } from './config/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PROJECT_PORT || 3000;
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  SwaggerSetting(app);
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ limit: '10mb', extended: true }));
  app.enableCors();

  const server = await app.listen(port);
  const timeout = 1000 * 60 * 3;
  server.setTimeout(timeout);
}
bootstrap();
