import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserEvent } from 'libs/events/create-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log("Notification Microservice")
  }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern({ cmd: 'user_created' })
  handleUserCreated(data: CreateUserEvent) {
    console.log(data, new Date())
    return "22"//this.appService.handleUserCreated(data)
  }

}
