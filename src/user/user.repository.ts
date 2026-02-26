import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

export interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async create(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async existsByEmail(email: string) {
    const possibleUser = this.users.find((user) => user.email === email);
    return possibleUser !== undefined;
  }
}
