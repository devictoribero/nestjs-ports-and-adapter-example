import { CreatePlant } from 'src/plants/Application/Create/CreatePlant';
import { CreatePlantDTO } from 'src/plants/Application/Create/CreatePlantDTO';
import { Plant } from 'src/plants/Domain/Plant';
import { Uuid } from 'src/shared/Domain/Uuid';

import { EmptyPlantsRepository } from '../../Infrastructure/Persistance/EmptyPlantsRepository';

describe('CreatePlant', () => {
  it('should create a plant', async () => {
    // Given a plant we want to create
    const createPlantDTO = new CreatePlantDTO(
      Uuid.random().toString(),
      'Monstera Deliciosa',
    );
    const plantEntityToCreate = new Plant(
      Uuid.fromString(createPlantDTO.uuid),
      createPlantDTO.name,
    );
    const repository = new EmptyPlantsRepository();
    const createPlant = new CreatePlant(repository);

    await createPlant.execute(createPlantDTO);

    expect(repository.save).toHaveBeenCalledTimes(1);
    expect(repository.save).toBeCalledWith(plantEntityToCreate);
  });
});
