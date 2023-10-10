import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Curso, Turno } from 'src/enums/role.enum';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  matricula: string;

  @ApiProperty()
  @IsString()
  @IsEnum(Curso)
  @IsNotEmpty()
  curso: string;

  @ApiProperty()
  @IsString()
  @IsEnum(Turno)
  @IsNotEmpty()
  turno: Turno;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  telefone: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  @IsOptional()
  endereco: string;
}
