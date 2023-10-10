import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTypeActivityDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  limiteHoras: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  dimensionId: number;
}
