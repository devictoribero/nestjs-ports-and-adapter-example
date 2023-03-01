import { Plant } from 'src/plants/Domain/Plant';
import { Uuid } from 'src/shared/Domain/Uuid';
import { CreatePlant } from '../CreatePlant';
import { CreatePlantDTO } from '../CreatePlantDTO';
import { PlantsRepositoryStub } from './PlantsRepositoryStub';

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
    const repository = new PlantsRepositoryStub([plantEntityToCreate]);
    const createPlant = new CreatePlant(repository);

    await createPlant.execute(createPlantDTO);

    expect(repository.save).toHaveBeenCalledTimes(1);
    expect(repository.save).toBeCalledWith(plantEntityToCreate);
  });
});
