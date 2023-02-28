import { Injectable } from '@nestjs/common';
import { Plant } from '../../Domain/Plant';
import { InMemoryPlantsRepository } from '../../Infrastructure/Persistance/InMemoryPlantsRepository.service';
import { CreatePlantDTO } from './CreatePlantDTO';

@Injectable()
export class CreatePlant {
  constructor(private readonly plantsRepository: InMemoryPlantsRepository) {}

  public async execute({ uuid, name }: CreatePlantDTO): Promise<void> {
    const plantToCreate = new Plant(uuid, name);

    this.plantsRepository.save(plantToCreate as Plant);
  }
}
