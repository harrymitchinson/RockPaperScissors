import { Injectable } from "@angular/core";
import { Player } from "../interfaces";
import { TacticalComputerPlayer, ComputerPlayer } from "../players";
import { Choice } from "../enums";
import { GameResult, PlayerResult } from "../models";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";

@Injectable()
export class GameService {
  /**
   * The game results.
   * @private
   * @memberof GameService
   */
  private results = new Array<GameResult>();

  /**
   * Player1
   * @type {Player}
   * @memberof GameService
   */
  player1: Player;

  /**
   * Player2
   * @type {Player}
   * @memberof GameService
   */
  player2: Player;

  /**
   * Play a round and get a result for the player's choices.
   * @param {number} round
   * @memberof GameService
   */
  playRound(round: number): void {
    if (this.player2 instanceof ComputerPlayer) {
      this.player2.setNextChoice();
    }

    // Get the winner.
    const winner = this.getWinner(this.player1, this.player2);

    // Create a result for the round.
    const result = new GameResult({
      player1: { ...this.player1 },
      player2: { ...this.player2 },
      winner: winner.id,
    });
    this.results[round - 1] = result;

    // If player 2 is a tactical computer,
    // set their next choice as whatever would have beaten their previous choice.
    if (this.player2 instanceof TacticalComputerPlayer) {
      switch (this.player2.choice) {
        case Choice.Rock:
          this.player2.setNextChoice(Choice.Paper);
          break;
        case Choice.Paper:
          this.player2.setNextChoice(Choice.Scissors);
          break;
        case Choice.Scissors:
          this.player2.setNextChoice(Choice.Rock);
          break;
      }
    }
  }

  /**
   * Work out the winner when the player's choices are compared.
   * @private
   * @param {Player} player1
   * @param {Player} player2
   * @returns PlayerResult
   * @memberof GameService
   */
  private getWinner(player1: Player, player2: Player): PlayerResult {
    if (
      (player1.choice === Choice.Rock && player2.choice === Choice.Paper) ||
      (player1.choice === Choice.Paper && player2.choice === Choice.Scissors) ||
      (player1.choice === Choice.Scissors && player2.choice === Choice.Rock)
    ) {
      return new PlayerResult(player2);
    } else if (player1.choice === player2.choice) {
      return new PlayerResult({ id: 0, choice: player1.choice });
    } else {
      return new PlayerResult(player1);
    }
  }

  /**
   * Get the game results.
   * @param {number} [round]
   * @returns {GameResult[]}
   * @memberof GameService
   */
  getResults(round?: number): Array<GameResult> {
    return this.results;
  }

  /**
   * Sets the player's in the service.
   * @param {Player} player1
   * @param {Player} player2
   * @memberof GameService
   */
  setPlayers(player1: Player, player2: Player): void {
    this.player1 = player1;
    this.player2 = player2;
  }

  /**
   * Get the player's from the service.
   * @returns Player[]
   * @memberof GameService
   */
  getPlayers(): Array<Player> {
    return [this.player1, this.player2];
  }

  /**
   * Set the number of rounds to be played in the service.
   * @param {number} rounds
   * @memberof GameService
   */
  setRounds(rounds: number): void {
    this.results = new Array<GameResult>(rounds);
  }

  /**
   * Get the total number of rounds.
   * @returns {number}
   * @memberof GameService
   */
  getTotalRounds(): number {
    return this.results.length;
  }

  /**
   * Set the player's choice.
   * @param {number} round
   * @param {number} id
   * @param {Choice} choice
   * @memberof GameService
   */
  setChoice(round: number, id: number, choice: Choice): void {
    // TODO: Remove round.
    switch (id) {
      case 1:
        this.player1.setNextChoice(choice);
        break;
      case 2:
        this.player2.setNextChoice(choice);
        break;
    }
  }
}
