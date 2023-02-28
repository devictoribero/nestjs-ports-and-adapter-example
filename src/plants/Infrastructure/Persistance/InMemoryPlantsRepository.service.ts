import { Injectable } from '@nestjs/common';
import { Plant } from '../../Domain/Plant';
import { PlantsRepository } from '../../Domain/PlantsRepository';

type PlantsCollection = Map<string, Plant>;

const initialPlant = new Plant(
  'd578670e-365d-4bd1-b9bb-bd9bfe841428',
  'Monstera Deliciosa',
);

@Injectable()
export class InMemoryPlantsRepository implements PlantsRepository {
  private plantsInMemory: PlantsCollection;

  constructor() {
    this.plantsInMemory = new Map<string, Plant>();
    this.plantsInMemory.set(initialPlant.getUuid(), initialPlant);
  }

  public async save(plant: Plant) {
    this.plantsInMemory.set(plant.getUuid(), plant);
  }

  public async find(uuid: string) {
    // Finder should never return null, it should throw an exception
    return this.plantsInMemory.get(uuid) || null;
  }

  public async search() {
    return Array.from(this.plantsInMemory, ([, value]) => value);
  }

  public async remove(uuid: string) {
    // Finder should never return null, it should throw an exception
    this.plantsInMemory.delete(uuid);
  }
}
