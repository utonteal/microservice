import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'NOTIFICATION',
      transport: Transport.TCP,
      options: { port: 4000 }
    },
    {
      name: 'LOGGER',
      transport: Transport.TCP,
      options: { port: 5000 }
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
