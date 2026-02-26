import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    const userEntity = new UserEntity();
    userEntity.name = user.name;
    userEntity.email = user.email;
    userEntity.password = user.password;
    userEntity.id = uuid();
    await this.userRepository.create(userEntity);
    return { id: userEntity.id, message: 'User created' };
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }
}
