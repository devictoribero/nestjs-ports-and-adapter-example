import { Injectable } from '@nestjs/common';
import { Plant } from '../Domain/Plant';
import { InMemoryPlantsRepository } from '../Infrastructure/InMemoryPlantsRepository.service';
import { CreatePlantDTO } from './CreatePlantDTO';

@Injectable()
export class Plants {
  constructor(private readonly plantsRepository: InMemoryPlantsRepository) {}

  public async create(createPlantDTO: CreatePlantDTO): Promise<void> {
    // This should be a Domain Entity
    const plantToCreate = {
      uuid: createPlantDTO.uuid,
      name: createPlantDTO.name,
    };

    this.plantsRepository.create(plantToCreate as Plant);
  }

  public async findAll(): Promise<Plant[]> {
    return this.plantsRepository.search();
  }

  public async find(uuid: string): Promise<Plant | null> {
    return this.plantsRepository.find(uuid);
  }
}
