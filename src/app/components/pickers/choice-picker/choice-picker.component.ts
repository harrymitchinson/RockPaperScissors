import { Component } from "@angular/core";
import { BasePicker } from "./../base-picker";
import { Choice } from "./../../../enums";

@Component({
  selector: "app-choice-picker",
  templateUrl: "./choice-picker.component.html",
})
export class ChoicePickerComponent extends BasePicker {
  /**
   * The types of weapons the user can pick from.
   * @memberof ChoicePickerComponent
   */
  choiceTypes = [
    {
      key: "Rock",
      icon: "fa-hand-rock",
      value: Choice.Rock,
    },
    {
      key: "Paper",
      icon: "fa-hand-paper",
      value: Choice.Paper,
    },
    {
      key: "Scissors",
      icon: "fa-hand-scissors",
      value: Choice.Scissors,
    },
  ];
}
