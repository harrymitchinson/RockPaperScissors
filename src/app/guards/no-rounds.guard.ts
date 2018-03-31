import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { GameService } from "../services";

@Injectable()
export class NoRoundsGuard implements CanActivate {
  /**
   * Creates an instance of NoRoundsGuard.
   * @param {GameService} gameService
   * @param {Router} router
   * @memberof NoRoundsGuard
   */
  constructor(private gameService: GameService, private router: Router) {}

  /**
   * If the rounds have not been set in the service the guard should redirect.
   * @returns {boolean}
   * @memberof NoRoundsGuard
   */
  canActivate(): boolean {
    const rounds = this.gameService.getTotalRounds();
    if (rounds === 0) {
      this.router.navigate(["rounds"]);
      return false;
    }
    return true;
  }
}
