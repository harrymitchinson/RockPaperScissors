import { Component } from "@angular/core";
import { GameService } from "./services";
import { HumanPlayer, ComputerPlayer, TacticalComputerPlayer } from "./players";
import { Choice, Outcome, PlayerType } from "./enums";
import { OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { tap, map } from "rxjs/operators";
import { Player } from "./interfaces";
import { slideTransition } from "./routing.animations";
import { RouterOutlet } from "@angular/router";

@Component({
  animations: [slideTransition],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  getState(outlet: RouterOutlet | any) {
    return outlet.activatedRouteData.state;
  }
}
