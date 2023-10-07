import { IsNumber } from 'class-validator';
import { Dimension } from 'src/dimension/entities/dimension.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
  JoinColumn,
} from 'typeorm';

@Entity()
export class TypeActivity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column('int')
  @IsNumber()
  limiteHoras: number;

  @ManyToOne(() => Dimension, (dimension) => dimension.type)
  @JoinColumn({ name: 'dimensionId' })
  dimension: Dimension;
}
