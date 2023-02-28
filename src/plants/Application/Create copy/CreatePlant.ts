import { Injectable } from '@nestjs/common';
import { Plant } from '../../Domain/Plant';
import { InMemoryPlantsRepository } from '../../Infrastructure/Persistance/InMemoryPlantsRepository';
import { CreatePlantDTO } from './CreatePlantDTO';

@Injectable()
export class CreatePlant {
  constructor(private readonly plantsRepository: InMemoryPlantsRepository) {}

  public async execute({ uuid, name }: CreatePlantDTO): Promise<void> {
    // This should be a Domain Entity
    const plantToCreate = new Plant(uuid, name);

    this.plantsRepository.create(plantToCreate as Plant);
  }
}
