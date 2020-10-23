import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  // private readonly user: User = {};
  getUser(): User {
    return {
      name: 'tom',
      age: 1,
    }
  }
}
