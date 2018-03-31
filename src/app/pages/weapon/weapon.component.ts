import { Component, OnInit } from "@angular/core";
import { GameService } from "../../services";
import { Choice } from "../../enums";
import { Router, Route, ActivatedRoute, ParamMap } from "@angular/router";
import { map } from "rxjs/operators";

@Component({
  selector: "app-weapon",
  templateUrl: "./weapon.component.html",
})
export class WeaponComponent implements OnInit {
  /**
   * The current round number
   * @type {number}
   * @memberof WeaponComponent
   */
  round: number;

  /**
   * The total number of rounds.
   * @private
   * @type {number}
   * @memberof WeaponComponent
   */
  private totalRounds: number;

  /**
   * Creates an instance of WeaponComponent.
   * @param {GameService} gameService
   * @param {Router} router
   * @param {ActivatedRoute} route
   * @memberof WeaponComponent
   */
  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * Get the current round from the route params. If the param is invalid or missing, redirect the user.
   * @memberof WeaponComponent
   */
  ngOnInit(): void {
    // Try
    this.route.paramMap
      .pipe(map((params) => this.getRoundNumberFromParam(params)))
      .subscribe(
        (round) => {
          this.totalRounds = this.gameService.getTotalRounds();
          this.round = round;
        },
        (err) => this.router.navigate(["/"])
      );
  }

  /**
   * Parse the 'round' route param to a number.
   * @private
   * @param {ParamMap} paramMap
   * @returns
   * @memberof WeaponComponent
   */
  private getRoundNumberFromParam(paramMap: ParamMap): number {
    const value = Number(paramMap.get("round"));
    if (isNaN(value)) {
      throw new Error("Round is not a number");
    } else {
      return value;
    }
  }

  /**
   * Set the selected choice for the current round and redirect the user.
   * @param {Choice} choice
   * @memberof WeaponComponent
   */
  onSelectedChoiceType(choice: Choice): void {
    this.gameService.setChoice(this.round, 1, choice);
    this.gameService.playRound(this.round);
    if (this.round < this.totalRounds) {
      this.router.navigate(["weapon", this.round + 1]);
    } else {
      this.router.navigate(["result"]);
    }
  }
}
