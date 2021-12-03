import { User } from '@prisma/client';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from './login-user.dto';
import { JwtTokenPayload } from './jwt-token-payload.type';
import { hashPassword, matchPassword } from 'src/utils';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: CreateUserDto): Promise<User> {
    // check if user already exists
    const existingUser = await this.userService.findByEmail(dto.email);
    if (existingUser) throw new BadRequestException('user already registered');

    // hash plain password
    dto.password = await hashPassword(dto.password);

    const user = await this.userService.create(dto);
    return user;
  }

  async login(dto: LoginUserDto): Promise<User | null> {
    const user = await this.userService.findByEmail(dto.email);

    // compare with hashed password
    if (user && (await matchPassword(user.password, dto.password))) return user;
    return null;
  }

  generateToken(payload: JwtTokenPayload): string {
    return this.jwtService.sign(payload);
  }
}
