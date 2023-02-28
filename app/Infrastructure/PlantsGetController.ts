import { Controller, Get } from '@nestjs/common';
import { SearchPlants } from 'src/plants/Application/Search/SearchPlants';

@Controller('plants')
export class PlantsGetController {
  constructor(private readonly searchPlantService: SearchPlants) {}

  @Get()
  async execute() {
    return this.searchPlantService.execute();
  }
}
