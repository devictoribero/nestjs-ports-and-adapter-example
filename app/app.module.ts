import { Module } from '@nestjs/common';
import { CreatePlant } from 'src/plants/Application/Create/CreatePlant.service';
import { FindPlant } from 'src/plants/Application/Find/FindPlant.service';
import { SearchPlants } from 'src/plants/Application/Search/SearchPlants.service';
import { InMemoryPlantsRepository } from 'src/plants/Infrastructure/Persistance/InMemoryPlantsRepository.service';
import { GetPlantController } from './Infrastructure/GetPlantController.controller';
import { GetPlantsController } from './Infrastructure/GetPlantsController.controller';
import { PostPlantsController } from './Infrastructure/PostPlantsController.controller';

@Module({
  imports: [],
  controllers: [GetPlantsController, GetPlantController, PostPlantsController],
  providers: [SearchPlants, FindPlant, CreatePlant, InMemoryPlantsRepository],
})
export class AppModule {}
