import { FindPlant } from 'src/plants/Application/Find/FindPlant';
import { Uuid } from 'src/shared/Domain/Uuid';

import { EmptyPlantsRepository } from '../../Infrastructure/Persistance/EmptyPlantsRepository';

describe('FindPlant', () => {
  it('should create a plant', async () => {
    // Given a plant we want to create
    const repository = new EmptyPlantsRepository();
    const findPlant = new FindPlant(repository);
    const plantUUid = Uuid.random().toString();

    await findPlant.execute(plantUUid);

    expect(repository.find).toHaveBeenCalledTimes(1);
    expect(repository.find).toBeCalledWith(plantUUid);
  });
});
