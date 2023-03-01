import { Inject, Injectable } from '@nestjs/common';
import {
  PlantsRepository,
  PLANTS_REPOSITORY_TOKEN,
} from 'src/plants/Domain/PlantsRepository';
import { Plant } from '../../Domain/Plant';

@Injectable()
export class FindPlant {
  constructor(
    @Inject(PLANTS_REPOSITORY_TOKEN)
    private readonly plantsRepository: PlantsRepository,
  ) {}

  public async execute(uuid: string): Promise<Plant | null> {
    return this.plantsRepository.find(uuid);
  }
}
