import { Choice } from '../enums';

export class PlayerResult {
  public id: number;
  public choice: Choice;
  public constructor(init?: Partial<PlayerResult>) {
    Object.assign(this, init);
  }
}
