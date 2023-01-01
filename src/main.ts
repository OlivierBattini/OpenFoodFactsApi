import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { ClassValidatorPipe } from './app/pipes/class-validator.pipe';
import { Env } from './config/env';
import { ApiInfo } from './constants/api';

async function bootstrap() {
  // Create NestJS app
  const app = await NestFactory.create(AppModule);

  // Configure Swagger/OpenAPI info
  const swaggerConfig = new DocumentBuilder()
    .setTitle(ApiInfo.TITLE)
    .setDescription(ApiInfo.DESCRIPTION)
    .setVersion(ApiInfo.VERSION)
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, swaggerDocument);

  // Configure and start NestJS app
  await app.useGlobalPipes(new ClassValidatorPipe());
  await app.listen(Env.HTTP_PORT);
}
bootstrap();
