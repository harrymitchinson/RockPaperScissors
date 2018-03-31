import { Component, OnInit } from "@angular/core";
import { GameService } from "../../services";
import { GameResult } from "../../models";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"],
})
export class ResultComponent implements OnInit {
  player1Score: number;
  player2Score: number;
  results: GameResult[];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    const results = this.gameService.getResults();
    this.player1Score = results.filter((x) => x.winner === 1).length;
    this.player2Score = results.filter((x) => x.winner === 2).length;
    this.results = results;
  }
}
