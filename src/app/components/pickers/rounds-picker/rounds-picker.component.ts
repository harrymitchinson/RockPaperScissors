import { Component } from "@angular/core";
import { BasePicker } from "../base-picker";

@Component({
  selector: "app-rounds-picker",
  templateUrl: "./rounds-picker.component.html",
})
export class RoundsPickerComponent extends BasePicker {
  /**
   * The number of rounds the user can pick.
   * @memberof RoundsPickerComponent
   */
  numberOfRounds = [
    {
      key: "Three",
      value: 3,
    },
    {
      key: "Five",
      value: 5,
    },
    {
      key: "Seven",
      value: 7,
    },
  ];
}
