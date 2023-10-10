import { Module } from '@nestjs/common';
import { DimensionService } from './service/dimension.service';
import { DimensionController } from './controller/dimension.controller';
import { Dimension } from './entities/dimension.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Dimension])],
  controllers: [DimensionController],
  providers: [DimensionService],
})
export class DimensionModule {}
