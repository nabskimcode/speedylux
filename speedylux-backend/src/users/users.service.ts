import { Injectable } from '@nestjs/common';
import { createUsersSchema } from './interfaces/create-users.interface';

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello World! from  user';
  }

  createUser() {
    return {
      success: 'ok',
    };
  }
}
