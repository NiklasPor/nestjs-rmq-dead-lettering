import { queueOptions } from '@app/shared';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    queueOptions.burger,
  );
  app.listen(() => Logger.log('Burger worker is listening!'));
}
bootstrap();
