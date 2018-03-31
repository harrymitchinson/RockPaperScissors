/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ResultItemComponent } from "./result-item.component";
import { GameResult } from "../../models";
import { HumanPlayer } from "../../players";
import { Choice } from "../../enums";

describe("ResultItemComponent", () => {
  let component: ResultItemComponent;
  let fixture: ComponentFixture<ResultItemComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ResultItemComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultItemComponent);
    component = fixture.componentInstance;
    component.result = new GameResult({
      winner: 1,
      player1: new HumanPlayer({ choice: Choice.Rock }),
      player2: new HumanPlayer({ choice: Choice.Scissors }),
    });
    component.round = 1;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set badge colour", () =>
    expect(component.badgeColour["badge-success"]).toBe(true));
});
