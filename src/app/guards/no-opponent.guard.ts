import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { GameService } from "../services";

@Injectable()
export class NoOpponentGuard implements CanActivate {
  /**
   * Creates an instance of NoOpponentGuard.
   * @param {GameService} gameService
   * @param {Router} router
   * @memberof NoOpponentGuard
   */
  constructor(private gameService: GameService, private router: Router) {}

  /**
   * If the players are not set on the service the guard should redirect.
   * @returns {boolean}
   * @memberof NoOpponentGuard
   */
  canActivate(): boolean {
    const players = this.gameService.getPlayers();
    if (players[0] === undefined) {
      this.router.navigate(["opponent"]);
      return false;
    }
    return true;
  }
}
