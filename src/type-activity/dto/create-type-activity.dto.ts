import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTypeActivityDto {
  @ApiProperty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsNumber()
  limiteHoras: number;

  @ApiProperty()
  @IsNumber()
  dimensionId: number;
}
