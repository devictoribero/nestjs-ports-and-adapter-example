export class UpdatePlantDTO {
  readonly uuid: string;
  readonly name: string;

  constructor(uuid: string, name: string) {
    this.uuid = uuid;
    this.name = name;
  }
}
