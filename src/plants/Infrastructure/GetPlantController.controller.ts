import { Controller, Get, Param } from '@nestjs/common';
import { Plants } from '../Application/Plants.service';

@Controller('plants')
export class GetPlantController {
  constructor(private readonly plantsService: Plants) {}

  @Get(':id')
  async getPlant(@Param() query) {
    const plantId = query.id;

    const plant = this.plantsService.find(plantId);

    return plant;
  }
}
