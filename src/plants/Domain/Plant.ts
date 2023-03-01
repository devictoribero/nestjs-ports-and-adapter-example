import { Uuid } from 'src/shared/Domain/Uuid';

export class Plant {
  constructor(private uuid: Uuid, private name: string) {}

  public getUuid(): string {
    return this.uuid.toString();
  }

  public isSamePlantAs(uuid: string): boolean {
    return this.getUuid() === uuid;
  }
}
