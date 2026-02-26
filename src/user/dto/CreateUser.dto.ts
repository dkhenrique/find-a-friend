import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { EmailIsUnique } from '../validator/email-is-unique.validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail(undefined, { message: 'Email is invalid' })
  @IsNotEmpty({ message: 'Email is required' })
  @EmailIsUnique({ message: 'This email already exists in our database ' })
  email: string;

  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
