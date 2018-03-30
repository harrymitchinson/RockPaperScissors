import { Choice } from '../enums';
import { BaseComputerPlayer } from './base-computer-player';
import { Player } from '../interfaces';

export class TacticalComputerPlayer extends BaseComputerPlayer
  implements Player {
  public setNextChoice(choice?: Choice) {
    if (choice !== undefined) {
      this.choice = choice;
    } else {
      this.choice = this.randomChoice();
    }
  }
}
