import {
  registerDecorator,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions,
} from 'class-validator';
import { UserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailIsUniqueValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const emailExists = await this.userRepository.existsByEmail(value);
    return !emailExists;
  }
}

export const EmailIsUnique = (validateOptions: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validateOptions,
      constraints: [],
      validator: EmailIsUniqueValidator,
    });
  };
};
