import { Player } from "../interfaces";
import { Choice } from "../enums";

export class BaseComputerPlayer {
  /**
   * The player's id.
   * @type {number}
   * @memberof BaseComputerPlayer
   */
  id: number;

  /**
   * The player's current choice.
   * @type {Choice}
   * @memberof BaseComputerPlayer
   */
  choice: Choice;

  /**
   * Creates an instance of BaseComputerPlayer and sets the player's choice.
   * @param {Partial<BaseComputerPlayer>} [init]
   * @memberof BaseComputerPlayer
   */
  constructor(init?: Partial<BaseComputerPlayer>) {
    Object.assign(this, init);
    this.choice = this.randomChoice();
  }

  /**
   * Generate a random choice.
   * @returns number
   * @memberof BaseComputerPlayer
   */
  protected randomChoice(): number {
    return Math.floor(Math.random() * 3);
  }
}
