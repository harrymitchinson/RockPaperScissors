import { Choice } from "../enums";

export interface Player {
  /**
   * The player's id.
   * @type {number}
   * @memberof Player
   */
  id: number;

  /**
   * The player's choice.
   * @type {Choice}
   * @memberof Player
   */
  choice: Choice;

  /**
   * Set the player's next choice.
   * @memberof Player
   */
  setNextChoice: (choice?: Choice) => void;
}
