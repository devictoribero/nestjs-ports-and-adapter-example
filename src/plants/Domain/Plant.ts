export class Plant {
  constructor(private uuid: string, private name: string) {}

  public rename(newName: string) {
    this.name = newName;
  }

  public isSamePlant(uuid: string) {
    return this.uuid === uuid;
  }
}
