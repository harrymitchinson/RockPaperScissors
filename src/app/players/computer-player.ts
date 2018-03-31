import { BaseComputerPlayer } from "./base-computer-player";
import { Player } from "../interfaces";

export class ComputerPlayer extends BaseComputerPlayer implements Player {
  public setNextChoice() {
    this.choice = this.randomChoice();
  }
}
