/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ResultComponent } from "./result.component";
import { GameService } from "../../services";
import { RouterTestingModule } from "@angular/router/testing";
import { ResultItemComponent } from "../../components/result-item/result-item.component";
import { GameResult } from "../../models";
import { HumanPlayer } from "../../players";
import { Choice } from "../../enums";

describe("ResultComponent", () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let service: GameService;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ResultComponent, ResultItemComponent],
        providers: [GameService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;

    service = TestBed.get(GameService);
    const results = new Array<GameResult>(
      new GameResult({
        winner: 0,
        player1: new HumanPlayer({ choice: Choice.Rock }),
        player2: new HumanPlayer({ choice: Choice.Rock }),
      }),
      new GameResult({
        winner: 1,
        player1: new HumanPlayer({ choice: Choice.Rock }),
        player2: new HumanPlayer({ choice: Choice.Scissors }),
      }),
      new GameResult({
        winner: 2,
        player1: new HumanPlayer({ choice: Choice.Scissors }),
        player2: new HumanPlayer({ choice: Choice.Rock }),
      })
    );
    spyOn(service, "getResults").and.returnValue(results);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set player1Score", () => expect(component.player1Score).toBe(1));
  it("should set player2Score", () => expect(component.player2Score).toBe(1));
  it("should set results", () => expect(component.results.length).toBe(3));
});
