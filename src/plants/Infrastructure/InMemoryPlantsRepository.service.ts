import { Injectable } from '@nestjs/common';
import { Plant } from '../Domain/Plant';
import { PlantsRepository } from '../Domain/PlantsRepository';

@Injectable()
export class InMemoryPlantsRepository implements PlantsRepository {
  private plants: Plant[];

  constructor() {
    this.plants = [{ uuid: '1', name: 'Monstera Deliciosa' }];
  }

  public async create(plant: Plant) {
    this.plants.push(plant);
  }

  public async find(uuid: string) {
    // Finder should never return null, it should throw an exception
    return this.plants.find((plant) => plant.uuid === uuid) || null;
  }

  public async search() {
    return this.plants;
  }
}
