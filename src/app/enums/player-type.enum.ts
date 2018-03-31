/**
 * The types of player available.
 * @export
 * @enum {number}
 */
export enum PlayerType {
  /**
   * A human player.
   */
  Human,

  /**
   * A computer player which randomly generates their choices.
   */
  Computer,

  /**
   * A tactical computer player which generates their first choice then follows a tactic for the rest of the game.
   */
  TacticalComputer,
}
