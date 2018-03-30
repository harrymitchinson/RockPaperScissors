import { Component, Output, EventEmitter, Input } from '@angular/core';
import { BasePicker } from './../base-picker';
import { PlayerType } from '../../../enums';

@Component({
  selector: 'app-player-picker',
  templateUrl: './player-picker.component.html',
  styleUrls: ['./player-picker.component.scss']
})
export class PlayerPickerComponent extends BasePicker {
  playerTypes = [
    /* {
      key:  'Human',
      value: PlayerType.Human
    }, */
    {
      key:  'Computer',
      value: PlayerType.Computer
    },
    {
      key:  'Tactical Computer',
      value: PlayerType.TacticalComputer
    },
  ];
}
