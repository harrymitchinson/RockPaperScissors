/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ChoicePickerComponent } from "./choice-picker.component";

describe("ChoicePickerComponent", () => {
  let component: ChoicePickerComponent;
  let fixture: ComponentFixture<ChoicePickerComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ChoicePickerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoicePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have data", () => expect(component.choiceTypes).toBeTruthy());

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
