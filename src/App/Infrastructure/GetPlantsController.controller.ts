import { Controller, Get } from '@nestjs/common';
import { SearchPlants } from 'src/plants/Application/Search/SearchPlants.service';

@Controller('plants')
export class GetPlantsController {
  constructor(private readonly plantsSearcher: SearchPlants) {}

  @Get()
  async execute() {
    return this.plantsSearcher.execute();
  }
}
