import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Curso, Turno } from '../../enums/role.enum';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 50 })
  @IsNotEmpty()
  nome: string;

  @Column({
    nullable: false,
    transformer: {
      from: (value: string) => value.replace(/\D/g, ''),
      to: (value: string) => value,
    },
  })
  @IsNotEmpty()
  matricula: string;

  @Column({ enum: Curso })
  @IsNotEmpty()
  curso: string;

  @Column({ enum: Turno })
  @IsNotEmpty()
  turno: string;

  @Column({
    nullable: false,
    transformer: {
      from: (value: string) => value.replace(/\D/g, ''),
      to: (value: string) => value,
    },
  })
  @IsNotEmpty()
  cpf: string;

  @Column()
  email: string;

  @Column({
    nullable: false,
    transformer: {
      from: (value: string) => value.replace(/\D/g, ''),
      to: (value: string) => value,
    },
  })
  @IsNotEmpty()
  telefone: string;

  @Column({ length: 200 })
  endereco: string;
}
