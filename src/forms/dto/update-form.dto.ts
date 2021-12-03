import { IsOptional, IsString } from 'class-validator';

export class UpdateFormDto {
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsOptional({ always: true })
  id: number;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsString()
  @IsOptional()
  readonly publishedAt: Date;
}
