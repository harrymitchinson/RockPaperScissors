import { Component, OnInit, Input } from "@angular/core";
import { GameResult } from "../../models";

@Component({
  selector: "app-result-item",
  templateUrl: "./result-item.component.html",
  styles: [".choice { width: 85px; }"],
})
export class ResultItemComponent implements OnInit {
  /**
   * The result of the round.
   * @type {GameResult}
   * @memberof ResultItemComponent
   */
  @Input() result: GameResult;

  /**
   * The round this result is for.
   * @type {number}
   * @memberof ResultItemComponent
   */
  @Input() round: number;

  /**
   * The choices available.
   * @memberof ResultItemComponent
   */
  choices = ["Rock", "Paper", "Scissors"];

  /**
   * The badge colour object.
   * @type {*}
   * @memberof ResultItemComponent
   */
  badgeColour: any;

  /**
   * Sets the badge colour object for the result.
   * @memberof ResultItemComponent
   */
  ngOnInit(): void {
    this.badgeColour = {
      "badge-success": this.result.winner === 1,
      "badge-danger": this.result.winner === 2,
    };
  }
}
