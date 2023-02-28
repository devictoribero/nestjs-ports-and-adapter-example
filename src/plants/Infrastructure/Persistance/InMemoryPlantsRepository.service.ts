import { Injectable } from '@nestjs/common';
import { Plant } from '../../Domain/Plant';
import { PlantsRepository } from '../../Domain/PlantsRepository';

@Injectable()
export class InMemoryPlantsRepository implements PlantsRepository {
  private plants: Plant[];

  constructor() {
    const initialPlant = new Plant('1', 'Monstera Deliciosa');
    this.plants = [initialPlant];
  }

  public async create(plant: Plant) {
    this.plants.push(plant);
  }

  public async find(uuid: string) {
    // Finder should never return null, it should throw an exception
    return this.plants.find((plant) => plant.isSamePlant(uuid)) || null;
  }

  public async search() {
    return this.plants;
  }
}
