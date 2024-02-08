import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from 'libs/events/create-user.event';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - NOTIFICATION', data);
    return "NOTIFICATION sent Successfully";
  }
}
