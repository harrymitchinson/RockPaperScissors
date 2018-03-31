import { Component, OnInit, Input } from "@angular/core";
import { GameResult } from "../../models";

@Component({
  selector: "app-result-item",
  templateUrl: "./result-item.component.html",
  styles: [".choice { width: 85px; }"],
})
export class ResultItemComponent implements OnInit {
  @Input() result: GameResult;
  @Input() round: number;
  choices = ["Rock", "Paper", "Scissors"];
  badgeColour: any;
  constructor() {}

  ngOnInit() {
    this.badgeColour = {
      "badge-success": this.result.winner === 1,
      "badge-danger": this.result.winner === 2,
    };
  }
}
