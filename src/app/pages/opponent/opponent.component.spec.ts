/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { OpponentComponent } from "./opponent.component";
import { PlayerPickerComponent } from "../../components/pickers";
import { GameService } from "../../services";
import { RouterTestingModule } from "@angular/router/testing";
import { PlayerType } from "../../enums";
import { inject } from "@angular/core/src/render3";
import { Router } from "@angular/router";
import {
  ComputerPlayer,
  HumanPlayer,
  TacticalComputerPlayer,
} from "../../players";

describe("OpponentComponent", () => {
  let component: OpponentComponent;
  let fixture: ComponentFixture<OpponentComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [OpponentComponent, PlayerPickerComponent],
        providers: [GameService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("onSelectedPlayerType", () => {
    describe("when playerType is 1", () => {
      let router: Router;
      let service: GameService;
      beforeEach(() => {
        // Arrange
        router = TestBed.get(Router);
        service = TestBed.get(GameService);
        spyOn(router, "navigate");
        spyOn(service, "setPlayers");

        // Act
        component.onSelectedPlayerType(PlayerType.Computer);
      });
      it("should set player 2 as ComputerPlayer", () => {
        expect(service.setPlayers).toHaveBeenCalledWith(
          jasmine.any(HumanPlayer),
          jasmine.any(ComputerPlayer)
        );
      });
      it("should route to rounds", () =>
        expect(router.navigate).toHaveBeenCalledWith(["rounds"]));
    });
    describe("when playerType is 2", () => {
      let router: Router;
      let service: GameService;
      beforeEach(() => {
        // Arrange
        router = TestBed.get(Router);
        service = TestBed.get(GameService);
        spyOn(router, "navigate");
        spyOn(service, "setPlayers");

        // Act
        component.onSelectedPlayerType(PlayerType.TacticalComputer);
      });
      it("should set player 2 as ComputerPlayer", () => {
        expect(service.setPlayers).toHaveBeenCalledWith(
          jasmine.any(HumanPlayer),
          jasmine.any(TacticalComputerPlayer)
        );
      });
      it("should route to rounds", () =>
        expect(router.navigate).toHaveBeenCalledWith(["rounds"]));
    });
  });
});
