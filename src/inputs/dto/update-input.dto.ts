import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateInputDto {
  @IsOptional()
  @IsString()
  question?: string;

  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @IsOptional()
  @IsNumber()
  points?: number;
}
