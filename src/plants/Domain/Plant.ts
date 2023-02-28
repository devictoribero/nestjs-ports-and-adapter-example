export class Plant {
  constructor(private uuid: string, private name: string) {}

  public getUuid(): string {
    return this.uuid;
  }
}
