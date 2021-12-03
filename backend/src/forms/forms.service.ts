import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form } from '@prisma/client';

@Injectable()
export class FormsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateFormDto): Promise<Form> {
    const form = await this.prisma.form.create({ data: dto });
    return form;
  }

  async findAll(ownerId: number): Promise<Form[]> {
    const forms = await this.prisma.form.findMany({ where: { ownerId } });
    return forms;
  }

  async findOne(id: number): Promise<Form> {
    const form = await this.prisma.form.findUnique({
      where: {
        id,
      },
    });
    return form;
  }

  async update(id: number, dto: UpdateFormDto): Promise<Form> {
    const form = await this.prisma.form.update({
      where: {
        id,
      },
      data: dto,
    });
    return form;
  }

  async remove(id: number): Promise<Form> {
    const form = await this.prisma.form.delete({ where: { id } });
    return form;
  }
}
