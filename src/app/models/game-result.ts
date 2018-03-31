import { Player } from "../interfaces";

export class GameResult {
  /**
   * Creates an instance of GameResult.
   * @param {Partial<GameResult>} [init]
   * @memberof GameResult
   */
  constructor(init?: Partial<GameResult>) {
    Object.assign(this, init);
  }

  /**
   * Player1 for this round.
   * @type {Player}
   * @memberof GameResult
   */
  player1: Player;

  /**
   * Player2 for this round.
   * @type {Player}
   * @memberof GameResult
   */
  player2: Player;

  /**
   * The id of the player which won the round.
   * @type {number}
   * @memberof GameResult
   */
  winner: number;
}
