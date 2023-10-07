import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Curso, Turno } from 'src/enums/role.enum';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  nome: string;

  @ApiProperty()
  @IsString()
  matricula: string;

  @ApiProperty()
  @IsString()
  @IsEnum(Curso)
  curso: string;

  @ApiProperty()
  @IsString()
  @IsEnum(Turno)
  turno: Turno;

  @ApiProperty()
  @IsString()
  cpf: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  telefone: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  @IsOptional()
  endereco: string;
}
