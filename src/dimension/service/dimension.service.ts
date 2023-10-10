import { Injectable } from '@nestjs/common';
import { CreateDimensionDto } from '../dto/create-dimension.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dimension } from '../entities/dimension.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DimensionService {
  constructor(
    @InjectRepository(Dimension)
    private dimensionRepository: Repository<Dimension>,
  ) {}
  create(createDimensionDto: CreateDimensionDto) {
    return this.dimensionRepository.save(createDimensionDto);
  }

  update(id: number, createDimensionDto: CreateDimensionDto) {
    return this.dimensionRepository.update(id, createDimensionDto);
  }

  findAll() {
    return this.dimensionRepository.find();
  }

  findOne(id: number) {
    return this.dimensionRepository.findOneBy({ id: id });
  }

  remove(id: number) {
    return this.dimensionRepository.delete(id);
  }
}
