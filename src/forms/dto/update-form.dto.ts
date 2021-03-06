import { IsOptional, IsString } from 'class-validator';

export class UpdateFormDto {
  @IsString()
  @IsOptional()
  readonly title?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;
}
