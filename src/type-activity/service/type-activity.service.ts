import { Injectable } from '@nestjs/common';
import { CreateTypeActivityDto } from '../dto/create-type-activity.dto';
import { TypeActivity } from '../entities/type-activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TypeActivityService {
  constructor(
    @InjectRepository(TypeActivity)
    private repository: Repository<TypeActivity>,
  ) {}
  create(saveDto: CreateTypeActivityDto) {
    return this.repository.save(saveDto);
  }

  update(id: number, createDto: CreateTypeActivityDto) {
    return this.repository.update(id, createDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
