import { Controller, Get, Param } from '@nestjs/common';
import { FindPlant } from 'src/plants/Application/Find/FindPlant';

@Controller('plants')
export class PlantGetController {
  constructor(private readonly findPlantService: FindPlant) {}

  @Get(':id')
  async execute(@Param() query) {
    const plantId = query.id;

    const plant = this.findPlantService.execute(plantId);

    return plant;
  }
}
