import { v4 as uuidv4 } from 'uuid';

export class Uuid {
  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  public static create(): Uuid {
    return new Uuid(uuidv4());
  }

  public static random(): Uuid {
    return new Uuid(uuidv4());
  }

  public static fromString(value: string): Uuid {
    return new Uuid(value);
  }

  public toString(): string {
    return this.value;
  }
}
