import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

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

  async findOne(id: number, ownerId: number): Promise<Form> {
    const form = await this.prisma.form.findUnique({
      where: {
        id_ownerId: {
          id,
          ownerId,
        },
      },
    });
    return form;
  }

  async update(id: number, dto: UpdateFormDto, ownerId: number): Promise<Form> {
    try {
      console.log(dto);
      const allowedUpdates = ['title', 'description'];
      const validUpdate = Object.keys(dto).every((u) =>
        allowedUpdates.includes(u),
      );
      if (!validUpdate)
        throw new BadRequestException(
          `only ${allowedUpdates} fields are open for updates`,
        );

      const form = await this.prisma.form.update({
        where: {
          id_ownerId: {
            id,
            ownerId,
          },
        },
        data: dto,
      });
      return form;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          // form does not exists
          return null;
        }
      }
      if (error instanceof BadRequestException) {
        throw new BadRequestException(error.message);
      }
      throw new InternalServerErrorException(error);
    }
  }

  async publish(id: number, ownerId: number) {
    try {
      const form = await this.prisma.form.update({
        where: {
          id_ownerId: { id, ownerId },
        },
        data: { publishedAt: new Date().toISOString() },
      });

      return form;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          // form does not exists
          return null;
        }
      }
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: number, ownerId: number): Promise<Form> {
    try {
      const form = await this.prisma.form.delete({
        where: { id_ownerId: { id, ownerId } },
      });
      return form;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          // form does not exists
          return null;
        }
      }
      throw new InternalServerErrorException(error);
    }
  }
}
