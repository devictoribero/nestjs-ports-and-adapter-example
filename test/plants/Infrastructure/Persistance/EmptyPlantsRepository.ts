import { Plant } from 'src/plants/Domain/Plant';
import { PlantsRepository } from 'src/plants/Domain/PlantsRepository';

export class EmptyPlantsRepository implements PlantsRepository {
  save(plant: Plant): Promise<void> {
    return Promise.resolve();
  }
  async find(uuid: string): Promise<Plant | null> {
    throw new Error('Plant not found');
  }

  async search(): Promise<Plant[]> {
    return [];
  }

  remove(uuid: string): Promise<void> {
    return Promise.resolve();
  }
}
