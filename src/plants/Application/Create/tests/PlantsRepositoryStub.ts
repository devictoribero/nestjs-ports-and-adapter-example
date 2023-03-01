import { Plant } from 'src/plants/Domain/Plant';
import { PlantsRepository } from 'src/plants/Domain/PlantsRepository';

export class PlantsRepositoryStub implements PlantsRepository {
  private readonly hardcodedPlants;

  constructor(private readonly plants: Plant[]) {
    this.hardcodedPlants = plants;
  }

  save(plant: Plant): Promise<void> {
    return Promise.resolve();
  }

  async find(uuid: string): Promise<Plant> {
    return this.hardcodedPlants[0];
  }

  async search(): Promise<Plant[]> {
    return [];
  }

  remove(uuid: string): Promise<void> {
    return Promise.resolve();
  }
}
