import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services';
import { Player } from '../../interfaces';
import { HumanPlayer, ComputerPlayer, TacticalComputerPlayer } from '../../players';
import { PlayerType } from '../../enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.scss']
})
export class OpponentComponent implements OnInit {
  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit() {

  }

  onSelectedPlayerType(type: PlayerType) {
    const player1 = new HumanPlayer({ id: 1 });
    let player2: Player;
    switch (type) {
      case PlayerType.Computer:
        player2 = new ComputerPlayer({ id: 2 });
        break;
      case PlayerType.TacticalComputer:
        player2 = new TacticalComputerPlayer({ id: 2 });
        break;
    }
    this.gameService.setPlayers(player1, player2);
    this.router.navigate(['rounds']);
  }
}
