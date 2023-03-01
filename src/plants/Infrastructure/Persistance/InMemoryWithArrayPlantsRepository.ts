import { Injectable } from '@nestjs/common';
import { Uuid } from 'src/shared/Domain/Uuid';
import { Plant } from '../../Domain/Plant';
import { PlantsRepository } from '../../Domain/PlantsRepository';

type PlantsCollection = Plant[];

const initialPlant = new Plant(
  Uuid.fromString('d578670e-365d-4bd1-b9bb-bd9bfe841428'),
  'Monstera Deliciosa',
);

@Injectable()
export class InMemoryWithArrayPlantsRepository implements PlantsRepository {
  private plantsInMemory: PlantsCollection;

  constructor() {
    this.plantsInMemory = [initialPlant];
  }

  public async save(plant: Plant) {
    const matchedPlantIndex = this.plantsInMemory.findIndex(
      (plantInMemory) => plantInMemory.getUuid() === plant.getUuid(),
    );

    const plantWasFound = matchedPlantIndex !== -1;
    if (plantWasFound) {
      this.plantsInMemory[matchedPlantIndex] = plant;
      return;
    }

    this.plantsInMemory.push(plant);
  }

  public async find(uuid: string) {
    // Finder should never return null, it should throw an exception
    return (
      this.plantsInMemory.find((plant) => plant.getUuid() === uuid) || null
    );
  }

  public async search() {
    return this.plantsInMemory;
  }

  public async remove(uuid: string) {
    // Finder should never return null, it should throw an exception
    const matchedPlantIndex = this.plantsInMemory.findIndex(
      (plantInMemory) => plantInMemory.getUuid() === uuid,
    );

    const plantWasFound = matchedPlantIndex !== -1;
    if (plantWasFound) {
      this.plantsInMemory.splice(matchedPlantIndex, 1);
    }
  }
}
