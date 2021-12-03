import { Input } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInputDto } from './dto/create-input.dto';
import { UpdateInputDto } from './dto/update-input.dto';

@Injectable()
export class InputsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateInputDto): Promise<Input> {
    const form = await this.prisma.input.create({ data: dto });
    return form;
  }

  async findAll(): Promise<Input[]> {
    const inputs = await this.prisma.input.findMany();
    return inputs;
  }

  findOne(id: number) {
    return `This action returns a #${id} input`;
  }

  update(id: number, dto: UpdateInputDto) {
    return `This action updates a #${id} input`;
  }

  remove(id: number) {
    return `This action removes a #${id} input`;
  }
}
