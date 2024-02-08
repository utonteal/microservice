import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from '../dtos/create-user-request.dto';
import { CreateUserEvent } from 'libs/events/create-user.event';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
@Injectable()
export class AppService {
  private readonly users: any[] = [];

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  constructor(
    @Inject('NOTIFICATION') private readonly notificationClient: ClientProxy,
    @Inject('LOGGER') private readonly loggerClient: ClientProxy
  ) {

  }

  async createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
   
   
    await lastValueFrom(this.notificationClient.send({ cmd: 'user_created' }, 
    new CreateUserEvent(createUserRequest.email)));


    console.log("jhhjkhkjjhjkhkjhkj", new Date());
    this.loggerClient.emit('user_created', new CreateUserEvent(createUserRequest.email));
    return "User Created";
  }
}
