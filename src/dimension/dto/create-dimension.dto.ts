import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateDimensionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  nome: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  limiteHoras: number;
}
