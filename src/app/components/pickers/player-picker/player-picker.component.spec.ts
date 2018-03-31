/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { PlayerPickerComponent } from "./player-picker.component";

describe("PlayerPickerComponent", () => {
  let component: PlayerPickerComponent;
  let fixture: ComponentFixture<PlayerPickerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PlayerPickerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have data", () => expect(component.playerTypes).toBeTruthy());

  it(
    "should output selected",
    async(() => {
      // Arrange
      const value = 1;

      // Act
      component.select(value);

      // Assert
      component.selectedType.toPromise().then((x) => expect(x).toBe(value));
    })
  );
});
