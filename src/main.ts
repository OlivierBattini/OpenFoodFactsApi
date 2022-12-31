import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ClassValidatorPipe } from './app/pipes/class-validator.pipe';
import { Env } from './config/env';

async function bootstrap() {
  // Create NestJS app
  const app = await NestFactory.create(AppModule);

  // Configure and start NestJS app
  await app.useGlobalPipes(new ClassValidatorPipe());
  await app.listen(Env.HTTP_PORT);
}
bootstrap();
