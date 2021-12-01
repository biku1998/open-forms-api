import { IsOptional, IsString } from 'class-validator';

export class UpdateFormDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  publishedAt: Date;
}
