/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { WeaponComponent } from "./weapon.component";
import { ChoicePickerComponent } from "../../components/pickers";
import { GameService } from "../../services";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, ActivatedRoute, convertToParamMap } from "@angular/router";
import { Choice } from "../../enums";
import { of } from "rxjs/observable/of";

describe("WeaponComponent", () => {
  let component: WeaponComponent;
  let fixture: ComponentFixture<WeaponComponent>;
  let service: GameService;
  let router: Router;
  const totalRounds = 2;

  describe("round param valid", () => {
    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          imports: [RouterTestingModule],
          declarations: [WeaponComponent, ChoicePickerComponent],
          providers: [GameService],
        }).compileComponents();
      })
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(WeaponComponent);
      component = fixture.componentInstance;

      service = TestBed.get(GameService);
      spyOn(service, "getTotalRounds").and.returnValue(totalRounds);
      spyOn(service, "setChoice");
      spyOn(service, "playRound");
      router = TestBed.get(Router);
      spyOn(router, "navigate");
      fixture.detectChanges();
    });

    it("should create", () => {
      expect(component).toBeTruthy();
    });

    describe("onSelectedChoiceType", () => {
      it("should set choice for player 1", () => {
        // Act
        component.onSelectedChoiceType(Choice.Rock);
        // Assert
        expect(service.setChoice).toHaveBeenCalledWith(
          jasmine.anything(),
          1,
          Choice.Rock
        );
      });
      it("should play round", () => {
        // Act
        component.onSelectedChoiceType(Choice.Rock);
        // Assert
        expect(service.playRound).toHaveBeenCalled();
      });
      it("should route to next weapon choice", () => {
        // Arrange
        component.round = 1;
        // Act
        component.onSelectedChoiceType(Choice.Rock);
        // Assert
        expect(router.navigate).toHaveBeenCalledWith(["weapon", 2]);
      });
      it("should route to result", () => {
        // Arrange
        component.round = 2;
        // Act
        component.onSelectedChoiceType(Choice.Rock);
        // Assert
        expect(router.navigate).toHaveBeenCalledWith(["result"]);
      });
    });
  });

  describe("round param invalid", () => {
    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          imports: [RouterTestingModule],
          declarations: [WeaponComponent, ChoicePickerComponent],
          providers: [
            GameService,
            {
              provide: ActivatedRoute,
              useValue: {
                paramMap: of(convertToParamMap({ round: "invalid" })),
              },
            },
          ],
        }).compileComponents();
      })
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(WeaponComponent);
      component = fixture.componentInstance;

      router = TestBed.get(Router);
      spyOn(router, "navigate");
      fixture.detectChanges();
    });

    it("should redirect", () => {
      expect(router.navigate).toHaveBeenCalledWith(["/"]);
    });
  });
});
