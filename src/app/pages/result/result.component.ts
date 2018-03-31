import { Component, OnInit } from "@angular/core";
import { GameService } from "../../services";
import { GameResult } from "../../models";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styles: [
    `:host {
    height: 100%;
    width: 100%;
    display: block;
  }`,
    `.full {
    height: 100%;
    width: 100%;
  }`,
  ],
})
export class ResultComponent implements OnInit {
  /**
   * Player 1's total score.
   * @type {number}
   * @memberof ResultComponent
   */
  player1Score: number;

  /**
   * Player 2's total score.
   * @type {number}
   * @memberof ResultComponent
   */
  player2Score: number;

  /**
   * The results of the game.
   * @type {GameResult[]}
   * @memberof ResultComponent
   */
  results: GameResult[];

  /**
   * Creates an instance of ResultComponent.
   * @param {GameService} gameService
   * @memberof ResultComponent
   */
  constructor(private gameService: GameService) {}

  /**
   * Set the players score's and the results from the service.
   * @memberof ResultComponent
   */
  ngOnInit(): void {
    const results = this.gameService.getResults();
    this.player1Score = results.filter((x) => x.winner === 1).length;
    this.player2Score = results.filter((x) => x.winner === 2).length;
    this.results = results;
  }
}
