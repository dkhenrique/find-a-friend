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
  }

  async list() {
    return this.users;
  }

  async existsByEmail(email: string) {
    const possibleUser = this.users.find((user) => user.email === email);
    return possibleUser !== undefined;
  }
}
