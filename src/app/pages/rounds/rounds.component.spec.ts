/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { RoundsComponent } from "./rounds.component";
import { RoundsPickerComponent } from "../../components/pickers/rounds-picker/rounds-picker.component";
import { GameService } from "../../services";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

describe("RoundsComponent", () => {
  let component: RoundsComponent;
  let fixture: ComponentFixture<RoundsComponent>;
  let service: GameService;
  let router: Router;
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [RoundsComponent, RoundsPickerComponent],
        providers: [GameService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.get(GameService);
    spyOn(service, "setRounds");
    router = TestBed.get(Router);
    spyOn(router, "navigate");
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("onSelectedRounds", () => {
    it("should set rounds", () => {
      // Arrange
      const rounds = 1;
      // Act
      component.onSelectedRounds(rounds);
      // Assert
      expect(service.setRounds).toHaveBeenCalledWith(rounds);
    });
    it("should route to weapon/1", () => {
      // Arrange
      const rounds = 1;
      // Act
      component.onSelectedRounds(rounds);
      // Assert
      expect(router.navigate).toHaveBeenCalledWith(["weapon", 1]);
    });
  });
});
