import { Body, Controller, Put } from '@nestjs/common';
import { CreatePlantDTO } from 'src/plants/Application/Create/CreatePlantDTO';
import { UpdatePlant } from 'src/plants/Application/Update/UpdatePlant';

@Controller('plants')
export class PlantsPutController {
  constructor(private readonly updatePlantService: UpdatePlant) {}

  @Put()
  async execute(@Body() body) {
    const updatePlantDTO: CreatePlantDTO = {
      uuid: body.uuid,
      name: body.name,
    };

    this.updatePlantService.execute(updatePlantDTO);
  }
}
