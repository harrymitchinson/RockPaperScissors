import { Component } from '@angular/core';
import { GameService } from './services';
import { HumanPlayer, ComputerPlayer, TacticalComputerPlayer } from './players';
import { Choice, Outcome, PlayerType } from './enums';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import { Player } from './interfaces';
import { routerTransition } from './router.animations';

@Component({
  animations: [routerTransition],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
