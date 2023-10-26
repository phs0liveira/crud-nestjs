import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Curso, Turno } from '../../enums/role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  matricula: string;

  @Column({ enum: Curso })
  curso: string;

  @Column({ enum: Turno })
  turno: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  endereco: string;
}
