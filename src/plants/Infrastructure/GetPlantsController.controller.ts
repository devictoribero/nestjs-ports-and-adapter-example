import { Controller, Get } from '@nestjs/common';
import { Plants } from '../Application/Plants.service';

@Controller('plants')
export class GetPlantsController {
  constructor(private readonly plantsService: Plants) {}

  @Get()
  async find() {
    return this.plantsService.findAll();
  }
}
