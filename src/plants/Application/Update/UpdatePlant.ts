import { Injectable } from '@nestjs/common';
import { Plant } from '../../Domain/Plant';
import { InMemoryPlantsRepository } from '../../Infrastructure/Persistance/InMemoryPlantsRepository';
import { UpdatePlantDTO } from './UpdatePlantDTO';

@Injectable()
export class UpdatePlant {
  constructor(private readonly plantsRepository: InMemoryPlantsRepository) {}

  public async execute({ uuid, name }: UpdatePlantDTO): Promise<void> {
    const plantToUpdate = new Plant(uuid, name);

    this.plantsRepository.save(plantToUpdate as Plant);
  }
}
