/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { RoundsPickerComponent } from "./rounds-picker.component";

describe("RoundsPickerComponent", () => {
  let component: RoundsPickerComponent;
  let fixture: ComponentFixture<RoundsPickerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [RoundsPickerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have data", () => expect(component.numberOfRounds).toBeTruthy());

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
