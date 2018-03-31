import { Choice } from "../enums";
import { BaseComputerPlayer } from "./base-computer-player";
import { Player } from "../interfaces";

export class TacticalComputerPlayer extends BaseComputerPlayer
  implements Player {
  public setNextChoice(choice: Choice) {
    this.choice = choice;
  }
}
