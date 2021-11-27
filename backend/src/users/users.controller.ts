import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post()
  async create(
    @Body() data: { fullName: string; email: string; password: string },
  ) {
    console.log(data);
    const user = await this.userService.create();
    return { user };
  }
}
