import { Injectable } from '@nestjs/common';
import { Plant } from '../../Domain/Plant';
import { InMemoryPlantsRepository } from '../../Infrastructure/Persistance/InMemoryPlantsRepository';

@Injectable()
export class FindPlant {
  constructor(private readonly plantsRepository: InMemoryPlantsRepository) {}

  public async execute(uuid: string): Promise<Plant | null> {
    return this.plantsRepository.find(uuid);
  }
}
