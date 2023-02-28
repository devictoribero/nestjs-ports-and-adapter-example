import { Injectable } from '@nestjs/common';
import { Plant } from '../../Domain/Plant';
import { InMemoryPlantsRepository } from '../../Infrastructure/Persistance/InMemoryPlantsRepository.service';

@Injectable()
export class SearchPlants {
  constructor(private readonly plantsRepository: InMemoryPlantsRepository) {}

  public async execute(): Promise<Plant[]> {
    return this.plantsRepository.search();
  }
}
