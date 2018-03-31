import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { GameService } from "../services";

@Injectable()
export class NoOpponentGuard implements CanActivate {
  constructor(private gameService: GameService, private router: Router) {}
  canActivate(): boolean {
    const players = this.gameService.getPlayers();
    if (players[0] === undefined) {
      this.router.navigate(["opponent"]);
      return false;
    }
    return true;
  }
}
