import {
  Body,
  Controller,
  HttpCode,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @HttpCode(200)
  async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.login(dto);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const token = await this.authService.generateToken({
      email: user.email,
      sub: user.id,
    });
    return { token };
  }

  @Post('/register')
  async register(@Body() dto: CreateUserDto) {
    const user = await this.authService.register(dto);
    return { user };
  }
}
