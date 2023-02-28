import { Injectable } from '@nestjs/common';
import { InMemoryPlantsRepository } from '../../Infrastructure/Persistance/InMemoryPlantsRepository.service';

@Injectable()
export class DeletePlant {
  constructor(private readonly plantsRepository: InMemoryPlantsRepository) {}

  public async execute(uuid: string): Promise<void> {
    this.plantsRepository.remove(uuid);
  }
}
