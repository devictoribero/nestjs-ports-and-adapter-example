import { Controller, Get } from '@nestjs/common';

@Controller('plants')
export class GetPlantsController {
  @Get()
  async find() {
    return `Hello all plantS`;
  }
}
