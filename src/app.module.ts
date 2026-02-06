import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository],
})
export class AppModule {}
