import { Player } from '../interfaces';

export class GameResult {
  constructor(init?: Partial<GameResult>) {
    Object.assign(this, init);
  }
  player1: Player;
  player2: Player;
  winner: number;
}
