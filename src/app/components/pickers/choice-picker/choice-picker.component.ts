import { Component, OnInit } from '@angular/core';
import { BasePicker } from './../base-picker';
import { Choice } from './../../../enums';

@Component({
  selector: 'app-choice-picker',
  templateUrl: './choice-picker.component.html',
  styleUrls: ['./choice-picker.component.scss']
})
export class ChoicePickerComponent extends BasePicker {
  choiceTypes = [
    {
      key: 'Rock',
      icon: 'fa-hand-rock',
      value: Choice.Rock
    },
    {
      key: 'Paper',
      icon: 'fa-hand-paper',
      value: Choice.Paper
    },
    {
      key: 'Scissors',
      icon: 'fa-hand-scissors',
      value: Choice.Scissors
    }
  ];
}
