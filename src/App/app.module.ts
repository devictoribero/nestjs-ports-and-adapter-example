import { Module } from '@nestjs/common';
import { Plants } from 'src/plants/Application/Plants.service';
import { GetPlantController } from 'src/plants/Infrastructure/GetPlantController.controller';
import { GetPlantsController } from 'src/plants/Infrastructure/GetPlantsController.controller';
import { PostPlantsController } from 'src/plants/Infrastructure/PostPlantsController.controller';
import { AppService } from './Application/app.service';
import { AppController } from './Infrastructure/app.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    GetPlantsController,
    GetPlantController,
    PostPlantsController,
  ],
  providers: [AppService, Plants],
})
export class AppModule {}
