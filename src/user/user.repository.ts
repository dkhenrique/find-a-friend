/* eslint-disable @typescript-eslint/require-await */
import { Injectable, NotFoundException } from '@nestjs/common';
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

  private searchById(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, user: Partial<UserEntity>) {
    const userToUpdate = this.searchById(id);

    Object.entries(user).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      userToUpdate[key] = value;
    });

    return userToUpdate;
  }

  async delete(id: string) {
    const userToDelete = this.searchById(id);

    this.users = this.users.filter((user) => user.id !== id);

    return userToDelete;
  }
}
