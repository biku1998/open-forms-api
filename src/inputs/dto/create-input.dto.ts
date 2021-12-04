import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateInputDto {
  @IsNumber()
  @IsNotEmpty()
  formId: number;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  question: string;

  @IsNotEmpty()
  @IsBoolean()
  required: boolean;

  @IsOptional()
  @IsNumber()
  points?: number;
}
