import { Choice } from "../enums";
import { BaseComputerPlayer } from "./base-computer-player";
import { Player } from "../interfaces";

export class TacticalComputerPlayer extends BaseComputerPlayer
  implements Player {
  /**
   * Set the player's next choice.
   * @param {Choice} choice
   * @memberof TacticalComputerPlayer
   */
  setNextChoice(choice: Choice): void {
    this.choice = choice;
  }
}
