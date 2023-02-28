import { Plant } from './Plant';

export interface PlantsRepository {
  save(plant: Plant): Promise<void>;

  find(uuid: string): Promise<Plant>;

  search(): Promise<Plant[] | null>;

  remove(uuid: string): Promise<void>;
}
