import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { GameService } from './services';
import {
  PlayerPickerComponent,
  ChoicePickerComponent,
} from './components/pickers';
import { OpponentComponent } from './pages/opponent/opponent.component';
import { WeaponComponent } from './pages/weapon/weapon.component';
import { ResultComponent } from './pages/result/result.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RoundsPickerComponent } from './components/pickers/rounds-picker/rounds-picker.component';
import { RoundsComponent } from './pages/rounds/rounds.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoOpponentGuard } from './guards/no-opponent.guard';
import { NoRoundsGuard } from './guards/no-rounds.guard';
import { NoResultsGuard } from './guards/no-results.guard';

export const ROUTES: Routes = [
  { path: '', component: LandingComponent, data: { state: 'landing' } },
  {
    path: 'opponent',
    component: OpponentComponent,
    data: { state: 'opponent' },
  },
  {
    path: 'rounds',
    component: RoundsComponent,
    data: { state: 'rounds' },
    canActivate: [NoOpponentGuard],
  },
  {
    path: 'weapon/:round',
    component: WeaponComponent,
    data: { state: 'weapon' },
    canActivate: [NoRoundsGuard],
  },
  {
    path: 'result',
    component: ResultComponent,
    data: { state: 'result' },
    canActivate: [NoResultsGuard],
  },
];

const DECLARATIONS = [
  AppComponent,
  PlayerPickerComponent,
  ChoicePickerComponent,
  RoundsPickerComponent,
  LandingComponent,
  OpponentComponent,
  RoundsComponent,
  WeaponComponent,
  ResultComponent,
];

const IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,
  RouterModule.forRoot(ROUTES),
  FlexLayoutModule,
];

const PROVIDERS = [GameService, NoOpponentGuard, NoRoundsGuard, NoResultsGuard];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: PROVIDERS,
  bootstrap: [AppComponent],
})
export class AppModule {}
