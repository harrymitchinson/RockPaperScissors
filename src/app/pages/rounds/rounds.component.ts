import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {
  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit() {

  }

  onSelectedRounds(rounds: number) {
    this.gameService.setRounds(rounds);
    this.router.navigate(['weapon', 1]);
  }
}
