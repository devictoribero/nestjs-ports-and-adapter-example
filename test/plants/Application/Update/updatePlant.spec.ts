import { UpdatePlant } from 'src/plants/Application/Update/UpdatePlant';
import { UpdatePlantDTO } from 'src/plants/Application/Update/UpdatePlantDTO';
import { Plant } from 'src/plants/Domain/Plant';
import { Uuid } from 'src/shared/Domain/Uuid';

import { EmptyPlantsRepository } from '../../Infrastructure/Persistance/EmptyPlantsRepository';

describe('UpdatePlant', () => {
  it('should update a plant', async () => {
    // Given a plant we want to create
    const updatePlantDTO = new UpdatePlantDTO(
      Uuid.random().toString(),
      'Monstera Deliciosa',
    );
    const plantEntityToUpdate = new Plant(
      Uuid.fromString(updatePlantDTO.uuid),
      updatePlantDTO.name,
    );
    const repository = new EmptyPlantsRepository();
    const updatePlant = new UpdatePlant(repository);

    await updatePlant.execute(updatePlantDTO);

    expect(repository.save).toHaveBeenCalledTimes(1);
    expect(repository.save).toBeCalledWith(plantEntityToUpdate);
  });
});
