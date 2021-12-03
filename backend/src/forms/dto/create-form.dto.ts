import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFormDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsOptional() // will be added by the server
  ownerId: number;

  @IsString()
  @IsOptional()
  readonly publishedAt: Date;
}
