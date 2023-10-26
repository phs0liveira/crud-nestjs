import { IsNumber } from 'class-validator';
import { TypeActivity } from 'src/type-activity/entities/type-activity.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dimension {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('int')
  @IsNumber()
  limiteHoras: number;

  @OneToMany(() => TypeActivity, (type) => type.dimension)
  type: TypeActivity[];
}
