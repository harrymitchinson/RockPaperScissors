/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OpponentComponent } from './opponent.component';
import { PlayerPickerComponent } from '../../components/pickers';
import { GameService } from '../../services';
import { RouterTestingModule } from '@angular/router/testing';
describe('OpponentComponent', () => {
  let component: OpponentComponent;
  let fixture: ComponentFixture<OpponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ OpponentComponent, PlayerPickerComponent ],
      providers: [GameService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
