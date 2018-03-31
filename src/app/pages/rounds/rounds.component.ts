import { Component } from "@angular/core";
import { GameService } from "../../services";
import { Router } from "@angular/router";

@Component({
  selector: "app-rounds",
  templateUrl: "./rounds.component.html",
})
export class RoundsComponent {
  /**
   * Creates an instance of RoundsComponent.
   * @param {GameService} gameService
   * @param {Router} router
   * @memberof RoundsComponent
   */
  constructor(private gameService: GameService, private router: Router) {}

  /**
   * Set the number of rounds and redirect the user.
   * @param {number} rounds
   * @memberof RoundsComponent
   */
  onSelectedRounds(rounds: number): void {
    this.gameService.setRounds(rounds);
    this.router.navigate(["weapon", 1]);
  }
}
