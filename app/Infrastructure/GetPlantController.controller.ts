import { Controller, Get, Param } from '@nestjs/common';
import { FindPlant } from 'src/plants/Application/Find/FindPlant.service';

@Controller('plants')
export class GetPlantController {
  constructor(private readonly plantsService: FindPlant) {}

  @Get(':id')
  async execute(@Param() query) {
    const plantId = query.id;

    const plant = this.plantsService.execute(plantId);

    return plant;
  }
}
