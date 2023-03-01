import { Inject, Injectable } from '@nestjs/common';
import {
  PlantsRepository,
  PLANTS_REPOSITORY_TOKEN,
} from 'src/plants/Domain/PlantsRepository';
import { Plant } from '../../Domain/Plant';
import { UpdatePlantDTO } from './UpdatePlantDTO';

@Injectable()
export class UpdatePlant {
  constructor(
    @Inject(PLANTS_REPOSITORY_TOKEN)
    private readonly plantsRepository: PlantsRepository,
  ) {}

  public async execute({ uuid, name }: UpdatePlantDTO): Promise<void> {
    const plantToUpdate = new Plant(uuid, name);

    this.plantsRepository.save(plantToUpdate as Plant);
  }
}
