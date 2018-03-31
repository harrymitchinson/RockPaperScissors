import { Choice } from "../enums";

export class PlayerResult {
  /**
   * The winning player's id.
   *
   * @type {number}
   * @memberof PlayerResult
   */
  id: number;

  /**
   * The winning player's choice.
   * @type {Choice}
   * @memberof PlayerResult
   */
  choice: Choice;

  /**
   * Creates an instance of PlayerResult.
   * @param {Partial<PlayerResult>} [init]
   * @memberof PlayerResult
   */
  constructor(init?: Partial<PlayerResult>) {
    Object.assign(this, init);
  }
}
