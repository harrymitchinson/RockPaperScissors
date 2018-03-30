import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GameService } from '../services';

@Injectable()
export class NoResultsGuard implements CanActivate {
  constructor(private gameService: GameService, private router: Router) {}
  canActivate(): boolean {
    const results = this.gameService.getResults();
    if (results.length === 0) {
      this.router.navigate(['weapon', 1]);
      return false;
    }
    return true;
  }
}
