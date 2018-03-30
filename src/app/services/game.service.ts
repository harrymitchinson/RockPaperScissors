import { Injectable } from '@angular/core';
import { Player } from '../interfaces';
import { TacticalComputerPlayer, ComputerPlayer } from '../players';
import { Choice, Outcome } from '../enums';
import { GameResult } from '../models/game-result';
import { PlayerResult } from '../models/player-result';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GameService {
  private results = new Array<GameResult>();
  private player1: Player;
  private player2: Player;

  public playRound(round: number) {
    if (this.player2 instanceof ComputerPlayer) {
      this.player2.setNextChoice();
    }

    // Get the winner.
    const winner = this.getWinner(this.player1, this.player2);

    // Create a result for the round.
    const result = new GameResult({
      player1: { ...this.player1 },
      player2: { ...this.player2 },
      winner: winner.id
    });
    this.results[round - 1] = result;

    // If player 2 is a tact computer, set their next choice as the winning choice.
    if (this.player2 instanceof TacticalComputerPlayer) {
      this.player2.setNextChoice(winner.choice);
    }
  }

  private getWinner(player1: Player, player2: Player) {
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

  public getResults(round?: number) {
    return this.results;
  }

  public setPlayers(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  public getPlayers() {
    return [this.player1, this.player2];
  }

  public setRounds(rounds: number) {
    this.results = new Array<GameResult>(rounds);
  }

  public getTotalRounds() {
    return this.results.length;
  }

  public setChoice(round: number, id: number, choice: Choice) {
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
