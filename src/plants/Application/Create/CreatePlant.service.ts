import { Injectable } from '@nestjs/common';
import { Plant } from '../../Domain/Plant';
import { InMemoryPlantsRepository } from '../../Infrastructure/Persistance/InMemoryPlantsRepository.service';
import { CreatePlantDTO } from './CreatePlantDTO';

@Injectable()
export class CreatePlant {
  constructor(private readonly plantsRepository: InMemoryPlantsRepository) {}

  public async execute(createPlantDTO: CreatePlantDTO): Promise<void> {
    // This should be a Domain Entity
    const plantToCreate = {
      uuid: createPlantDTO.uuid,
      name: createPlantDTO.name,
    };

    this.plantsRepository.create(plantToCreate as Plant);
  }
}
