import { Injectable } from '@nestjs/common';
import { Plant } from '../Domain/Plant';
import { CreatePlantDTO } from './CreatePlantDTO';

@Injectable()
export class Plants {
  private plants: Plant[] = [{ uuid: '1', name: 'Monstera Deliciosa' }];

  public async findAll(): Promise<Plant[]> {
    return this.plants;
  }

  public async find(uuid: string): Promise<Plant | null> {
    return this.plants.find((plant) => plant.uuid === uuid) || null;
  }

  public async create(createPlantDTO: CreatePlantDTO): Promise<void> {
    // This should be a Domain Entity
    const plantToCreate = {
      uuid: createPlantDTO.uuid,
      name: createPlantDTO.name,
    };

    this.plants.push(plantToCreate as Plant);
  }
}
