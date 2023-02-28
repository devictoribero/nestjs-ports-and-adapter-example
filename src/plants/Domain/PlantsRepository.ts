import { Plant } from './Plant';

export interface PlantsRepository {
  create(plant: Plant): Promise<void>;

  find(uuid: string): Promise<Plant>;

  search(): Promise<Plant[] | null>;
}
