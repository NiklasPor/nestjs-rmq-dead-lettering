import { queueOptions } from '@app/shared';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [ClientsModule.register([queueOptions.burger])],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
