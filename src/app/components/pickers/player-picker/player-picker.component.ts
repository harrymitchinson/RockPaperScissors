import { Component } from "@angular/core";
import { BasePicker } from "./../base-picker";
import { PlayerType } from "../../../enums";

@Component({
  selector: "app-player-picker",
  templateUrl: "./player-picker.component.html",
})
export class PlayerPickerComponent extends BasePicker {
  /**
   * The types of player the user can pick from.
   * @memberof PlayerPickerComponent
   */
  playerTypes = [
    {
      key: "Computer",
      value: PlayerType.Computer,
    },
    {
      key: "Tactical Computer",
      value: PlayerType.TacticalComputer,
    },
  ];
}
