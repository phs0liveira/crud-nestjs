import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeActivityService } from './type-activity.service';
import { CreateTypeActivityDto } from './dto/create-type-activity.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Type-activity')
@Controller('type-activity')
export class TypeActivityController {
  constructor(private readonly service: TypeActivityService) {}

  @Post()
  create(@Body() createTypeActivityDto: CreateTypeActivityDto) {
    return this.service.create(createTypeActivityDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() createTypeActivityDto: CreateTypeActivityDto,
  ) {
    return this.service.update(+id, createTypeActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
