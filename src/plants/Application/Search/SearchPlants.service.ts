import { Injectable } from '@nestjs/common';
import { InMemoryPlantsRepository } from 'src/plants/Infrastructure/Persistance/InMemoryPlantsRepository.service';
import { Plant } from '../../Domain/Plant';

@Injectable()
export class SearchPlants {
  constructor(private readonly plantsRepository: InMemoryPlantsRepository) {}

  public async execute(): Promise<Plant[]> {
    return this.plantsRepository.search();
  }
}
