import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlantDTO } from '../Application/CreatePlantDTO';
import { Plants } from '../Application/Plants.service';

@Controller('plants')
export class PostPlantsController {
  constructor(private readonly plantsService: Plants) {}

  @Post()
  async postPlantsHandler(@Body() body) {
    const createPlantDTO: CreatePlantDTO = {
      uuid: body.uuid,
      name: body.name,
    };

    this.plantsService.create(createPlantDTO);
  }
}
