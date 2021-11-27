import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(): Promise<User> {
    return await this.prisma.user.create({
      data: {
        fullName: 'John doe',
        email: 'john@gmail.com',
        password: 'password',
      },
    });
  }
}
