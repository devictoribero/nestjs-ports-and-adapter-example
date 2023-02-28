import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlant } from 'src/plants/Application/Create/CreatePlant.service';
import { CreatePlantDTO } from 'src/plants/Application/Create/CreatePlantDTO';

@Controller('plants')
export class PostPlantsController {
  constructor(private readonly plantCreator: CreatePlant) {}

  @Post()
  async execute(@Body() body) {
    const createPlantDTO: CreatePlantDTO = {
      uuid: body.uuid,
      name: body.name,
    };

    this.plantCreator.execute(createPlantDTO);
  }
}
