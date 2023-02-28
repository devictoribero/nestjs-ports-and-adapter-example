import { Controller, Delete, Param } from '@nestjs/common';
import { DeletePlant } from 'src/plants/Application/Delete/DeletePlant';

@Controller('plants')
export class PlantsDeleteController {
  constructor(private readonly deletePlantService: DeletePlant) {}

  @Delete(':id')
  async execute(@Param('id') id: string) {
    this.deletePlantService.execute(id);
  }
}
