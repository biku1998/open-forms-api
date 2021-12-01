import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFormDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsOptional()
  ownerId: number;

  @IsString()
  @IsOptional()
  publishedAt: Date;
}
