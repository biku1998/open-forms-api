import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserDto {
  readonly fullName: string;
  readonly email: string;
  readonly password: string;
}
