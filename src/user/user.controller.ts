import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    await this.userRepository.create(user);
    return { message: 'User created', userInfo: user };
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }
}
