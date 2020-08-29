import { queueOptions } from '@app/shared';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    queueOptions.recovery,
  );
  app.listen(() => Logger.log('Recovery worker is listening!'));
}
bootstrap();
