import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { FormsService } from './forms.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('forms')
@Controller('forms')
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req, @Body() dto: CreateFormDto) {
    // add ownerId
    dto.ownerId = req.user.id;
    const form = await this.formsService.create(dto);
    return { form };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req) {
    const forms = await this.formsService.findAll(req.user.id);
    return { forms };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req) {
    const form = await this.formsService.findOne(+id, req.user.id);
    if (!form) throw new NotFoundException();
    return { form };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateFormDto,
    @Req() req,
  ) {
    const form = await this.formsService.update(+id, dto, req.user.id);
    if (!form) throw new NotFoundException();
    return { form };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req) {
    const form = await this.formsService.remove(+id, req.user.id);
    if (!form) throw new NotFoundException();
    return { form };
  }
}
