import { Player } from '../interfaces';
import { Choice } from '../enums';

export class HumanPlayer implements Player {
  public id: number;

  public choice: Choice;
  public constructor(init?: Partial<HumanPlayer>) {
    Object.assign(this, init);
  }
  public setNextChoice(choice: Choice) {
    this.choice = choice;
  }
}
