import { DeletePlant } from 'src/plants/Application/Delete/DeletePlant';
import { Uuid } from 'src/shared/Domain/Uuid';

import { EmptyPlantsRepository } from '../../Infrastructure/Persistance/EmptyPlantsRepository';

describe('DeletePlant', () => {
  it('should create a plant', async () => {
    // Given a plant we want to create
    const repository = new EmptyPlantsRepository();
    const deletePlant = new DeletePlant(repository);
    const plantUUid = Uuid.random().toString();

    await deletePlant.execute(plantUUid);

    expect(repository.save).toHaveBeenCalledTimes(1);
    expect(repository.save).toBeCalledWith(plantUUid);
  });
});
