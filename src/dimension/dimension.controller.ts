import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DimensionService } from './dimension.service';
import { CreateDimensionDto } from './dto/create-dimension.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Dimension')
@Controller('dimension')
export class DimensionController {
  constructor(private readonly dimensionService: DimensionService) {}

  @Post()
  create(@Body() createDimensionDto: CreateDimensionDto) {
    return this.dimensionService.create(createDimensionDto);
  }

  @Get()
  findAll() {
    return this.dimensionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dimensionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() createDimensionDto: CreateDimensionDto,
  ) {
    return this.dimensionService.update(+id, createDimensionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dimensionService.remove(+id);
  }
}
