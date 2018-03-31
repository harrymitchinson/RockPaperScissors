import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { GameService } from "../services";

@Injectable()
export class NoResultsGuard implements CanActivate {
  /**
   * Creates an instance of NoResultsGuard.
   * @param {GameService} gameService
   * @param {Router} router
   * @memberof NoResultsGuard
   */
  constructor(private gameService: GameService, private router: Router) {}

  /**
   * If there are no results the guard should redirect.
   * @returns {boolean}
   * @memberof NoResultsGuard
   */
  canActivate(): boolean {
    const results = this.gameService.getResults();
    if (results.length === 0) {
      this.router.navigate(["weapon", 1]);
      return false;
    }
    return true;
  }
}
