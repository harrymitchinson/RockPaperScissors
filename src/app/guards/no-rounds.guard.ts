import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GameService } from '../services';

@Injectable()
export class NoRoundsGuard implements CanActivate {
  constructor(private gameService: GameService, private router: Router) {}
  canActivate(): boolean {
    const rounds = this.gameService.getTotalRounds();
    if (rounds === 0) {
      this.router.navigate(['rounds']);
      return false;
    }
    return true;
  }
}
