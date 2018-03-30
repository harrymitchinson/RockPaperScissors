import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services';
import { Choice } from '../../enums';
import { Router, Route, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss']
})
export class WeaponComponent implements OnInit {
  round: number;
  private totalRounds: number;
  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(map(params => this.getRoundNumberFromParam(params)))
      .subscribe(
        round => (this.round = round),
        err => this.router.navigate(['/'])
      );

    this.totalRounds = this.gameService.getTotalRounds();
  }

  private getRoundNumberFromParam(paramMap: ParamMap) {
    const value = Number(paramMap.get('round'));
    if (isNaN(value)) {
      throw new Error('Round is not a number');
    } else {
      return value;
    }
  }

  onSelectedChoiceType(choice: Choice) {
    this.gameService.setChoice(this.round, 1, choice);
    this.gameService.playRound(this.round);
    if (this.round < this.totalRounds) {
      this.router.navigate(['weapon', this.round + 1]);
    } else {
      this.router.navigate(['result']);
    }
  }
}
