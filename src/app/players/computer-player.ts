import { BaseComputerPlayer } from "./base-computer-player";
import { Player } from "../interfaces";

export class ComputerPlayer extends BaseComputerPlayer implements Player {
  /**
   * Generate the player's next choice.
   * @memberof ComputerPlayer
   */
  setNextChoice(): void {
    this.choice = this.randomChoice();
  }
}
