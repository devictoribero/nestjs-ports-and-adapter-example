import { SearchPlants } from 'src/plants/Application/Search/SearchPlants';

import { EmptyPlantsRepository } from '../../Infrastructure/Persistance/EmptyPlantsRepository';

describe('SearchPlant', () => {
  it('should search a plant', async () => {
    // Given a plant we want to create
    const repository = new EmptyPlantsRepository();
    const searchPlants = new SearchPlants(repository);

    await searchPlants.execute();

    expect(repository.find).toHaveBeenCalledTimes(1);
  });
});
