import { Module } from '@nestjs/common';
import { CreatePlant } from 'src/plants/Application/Create/CreatePlant';
import { DeletePlant } from 'src/plants/Application/Delete/DeletePlant';
import { FindPlant } from 'src/plants/Application/Find/FindPlant';
import { SearchPlants } from 'src/plants/Application/Search/SearchPlants';
import { UpdatePlant } from 'src/plants/Application/Update/UpdatePlant';
import { InMemoryPlantsRepository } from 'src/plants/Infrastructure/Persistance/InMemoryPlantsRepository';
import { PlantGetController } from '../controllers/plants/PlantGetController';
import { PlantsDeleteController } from '../controllers/plants/PlantsDeleteController';
import { PlantsGetController } from '../controllers/plants/PlantsGetController';
import { PlantsPostController } from '../controllers/plants/PlantsPostController';
import { PlantsPutController } from '../controllers/plants/PlantsPutController';

@Module({
  // Imports
  // Other modules that this module depends on
  imports: [],
  // Controllers
  // Controllers are responsible for handling incoming requests and returning responses to the client.
  // It is important to have 1 Controller for 1 route for maintainability.
  controllers: [
    PlantsGetController,
    PlantGetController,
    PlantsPostController,
    PlantsPutController,
    PlantsDeleteController,
  ],
  // Providers
  // Services that will be available within this module
  // and will be injected by NestJS
  providers: [
    SearchPlants,
    FindPlant,
    CreatePlant,
    UpdatePlant,
    DeletePlant,
    InMemoryPlantsRepository,
  ],
  // Exports
  // Services that will be available to other modules
  exports: [SearchPlants, FindPlant, CreatePlant, UpdatePlant, DeletePlant],
})
export class PlantModule {}
