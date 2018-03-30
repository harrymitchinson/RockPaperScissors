import { Component, OnInit } from '@angular/core';
import { BasePicker } from '../base-picker';

@Component({
  selector: 'app-rounds-picker',
  templateUrl: './rounds-picker.component.html',
  styleUrls: ['./rounds-picker.component.scss']
})
export class RoundsPickerComponent extends BasePicker {
  numberOfRounds = [
    {
      key:  'Three',
      value: 3
    },
    {
      key:  'Five',
      value: 5
    },
    {
      key:  'Seven',
      value: 7
    },
  ];

}
