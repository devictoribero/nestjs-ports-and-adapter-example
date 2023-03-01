import { Plant } from './Plant';

export const PLANTS_REPOSITORY_TOKEN = 'PLANTS_REPOSITORY';

export interface PlantsRepository {
  save(plant: Plant): Promise<void>;

  find(uuid: string): Promise<Plant | null>;

  search(): Promise<Plant[] | null>;

  remove(uuid: string): Promise<void>;
}
