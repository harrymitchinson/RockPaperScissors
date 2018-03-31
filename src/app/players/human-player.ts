import { Player } from "../interfaces";
import { Choice } from "../enums";

export class HumanPlayer implements Player {
  /**
   * The player's id.
   * @type {number}
   * @memberof HumanPlayer
   */
  id: number;

  /**
   * The player's current choice.
   * @type {Choice}
   * @memberof HumanPlayer
   */
  choice: Choice;

  /**
   * Creates an instance of HumanPlayer.
   * @param {Partial<HumanPlayer>} [init]
   * @memberof HumanPlayer
   */
  constructor(init?: Partial<HumanPlayer>) {
    Object.assign(this, init);
  }

  /**
   * Set the player's next choice.
   * @param {Choice} choice
   * @memberof HumanPlayer
   */
  setNextChoice(choice: Choice): void {
    this.choice = choice;
  }
}
