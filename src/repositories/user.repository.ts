import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class UserRepository {
  private users: User[] = [];

  async create(user: User) {
    this.users.push(user);
    console.log(this.users);
  }

  async list() {
    return this.users;
  }
}