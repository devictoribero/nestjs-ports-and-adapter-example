import { Inject, Injectable } from '@nestjs/common';
import {
  PlantsRepository,
  PLANTS_REPOSITORY_TOKEN,
} from 'src/plants/Domain/PlantsRepository';
import { Plant } from '../../Domain/Plant';
import { CreatePlantDTO } from './CreatePlantDTO';

@Injectable()
export class CreatePlant {
  constructor(
    @Inject(PLANTS_REPOSITORY_TOKEN)
    private readonly plantsRepository: PlantsRepository,
  ) {}

  public async execute({ uuid, name }: CreatePlantDTO): Promise<void> {
    const plantToCreate = new Plant(uuid, name);

    this.plantsRepository.save(plantToCreate as Plant);
  }
}
