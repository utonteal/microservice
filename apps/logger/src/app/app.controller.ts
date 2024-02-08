import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserEvent } from '../../../../libs/events/create-user.event';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('user_created')
  handleUserCreated(data: CreateUserEvent){
    this.appService.handleUserCreated(data)
  }
}
