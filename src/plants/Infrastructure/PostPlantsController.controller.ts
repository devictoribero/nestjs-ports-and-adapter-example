import { Body, Controller, Post } from '@nestjs/common';

@Controller('plants')
export class PostPlantsController {
  @Post()
  async postPlantsHandler(@Body() body) {
    return body;
  }
}
