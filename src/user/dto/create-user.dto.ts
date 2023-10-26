import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Curso, Turno } from 'src/enums/role.enum';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @Length(3, 50)
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.replace(/\D/g, ''))
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
  @Transform(({ value }) => value.replace(/\D/g, ''))
  cpf: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value.replace(/\D/g, ''))
  telefone?: string;

  @ApiProperty()
  @IsString()
  @Length(6, 200)
  @IsOptional()
  endereco?: string;
}
