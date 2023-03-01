import { Plant } from 'src/plants/Domain/Plant';
import { Uuid } from 'src/shared/Domain/Uuid';

export class PlantMother {
  static random(): Plant {
    const uuid = Uuid.random();

    return new Plant(uuid, this.randomName());
  }

  static randomWithUuid(uuid: string): Plant {
    return new Plant(Uuid.fromString(uuid), this.randomName());
  }

  static randomName(): string {
    return Uuid.random().toString();
  }
}
