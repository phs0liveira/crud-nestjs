import { Module } from '@nestjs/common';
import { TypeActivityService } from './type-activity.service';
import { TypeActivityController } from './type-activity.controller';
import { TypeActivity } from './entities/type-activity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TypeActivity])],
  controllers: [TypeActivityController],
  providers: [TypeActivityService],
})
export class TypeActivityModule {}
