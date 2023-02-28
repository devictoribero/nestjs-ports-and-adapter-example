import { Controller, Get, Param } from '@nestjs/common';

@Controller('plants')
export class GetPlantController {
  @Get(':id')
  async find(@Param() query) {
    const plantId = query.id;

    return `Hello plant #${plantId}`;
  }
}
