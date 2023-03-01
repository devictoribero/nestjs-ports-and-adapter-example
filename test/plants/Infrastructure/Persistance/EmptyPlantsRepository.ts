import { Plant } from 'src/plants/Domain/Plant';
import { PlantsRepository } from 'src/plants/Domain/PlantsRepository';

export class EmptyPlantsRepository implements PlantsRepository {
  constructor() {}

  save(plant: Plant): Promise<void> {
    return Promise.resolve();
  }
  async find(uuid: string): Promise<Plant | null> {
    return null;
  }

  async search(): Promise<Plant[]> {
    return [];
  }

  remove(uuid: string): Promise<void> {
    return Promise.resolve();
  }
}
