import { queueOptions } from '@app/shared';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  // send messages to the burger-queue
  imports: [ClientsModule.register([queueOptions.burger])],
  controllers: [AppController],
})
export class AppModule {}
