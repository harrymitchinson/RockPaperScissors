/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoundsComponent } from './rounds.component';
import { RoundsPickerComponent } from '../../components/pickers/rounds-picker/rounds-picker.component';
import { GameService } from '../../services';
import { RouterTestingModule } from '@angular/router/testing';
describe('RoundsComponent', () => {
  let component: RoundsComponent;
  let fixture: ComponentFixture<RoundsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [RoundsComponent, RoundsPickerComponent],
        providers: [GameService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
