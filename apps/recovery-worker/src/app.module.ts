import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { queueOptions } from './../../../libs/shared/src/queue-options';
import { AppController } from './app.controller';

@Module({
  imports: [ClientsModule.register([queueOptions.burger])],
  controllers: [AppController],
})
export class AppModule {}
