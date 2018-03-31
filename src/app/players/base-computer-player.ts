import { Player } from "../interfaces";
import { Choice } from "../enums";

export class BaseComputerPlayer {
  public id: number;
  public choice: Choice;
  public constructor(init?: Partial<BaseComputerPlayer>) {
    Object.assign(this, init);
    this.choice = this.randomChoice();
  }
  protected randomChoice() {
    return Math.floor(Math.random() * 3) + 1 - 1;
  }
}
