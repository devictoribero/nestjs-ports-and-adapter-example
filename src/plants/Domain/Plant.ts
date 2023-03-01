export class Plant {
  constructor(private uuid: string, private name: string) {}

  public getUuid(): string {
    return this.uuid;
  }

  public isSamePlantAs(uuid: string): boolean {
    return this.uuid === uuid;
  }
}
