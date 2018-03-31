import { Choice } from "../enums";

export interface Player {
  id: number;
  choice: Choice;
  setNextChoice: (choice?: Choice) => void;
}
