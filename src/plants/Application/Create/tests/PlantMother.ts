import { Plant } from 'src/plants/Domain/Plant';
import { Uuid } from 'src/shared/Domain/Uuid';

export class PlantMother {
  static random(): Plant {
    const uuid = Uuid.random();
    const fakeName = Uuid.random();

    return new Plant(uuid, fakeName.toString());
  }
}
