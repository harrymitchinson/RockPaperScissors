import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./routing.module";
import { AppComponent } from "./app.component";

import { GameService } from "./services";

import {
  OpponentComponent,
  WeaponComponent,
  ResultComponent,
  LandingComponent,
  RoundsComponent,
} from "./pages";

import {
  PlayerPickerComponent,
  ChoicePickerComponent,
  RoundsPickerComponent,
} from "./components/pickers";

import { NoOpponentGuard, NoRoundsGuard, NoResultsGuard } from "./guards";
import { ResultItemComponent } from "./components/result-item/result-item.component";

const DECLARATIONS = [
  AppComponent,
  LandingComponent,
  OpponentComponent,
  RoundsComponent,
  WeaponComponent,
  ResultComponent,
  PlayerPickerComponent,
  ChoicePickerComponent,
  RoundsPickerComponent,
  ResultItemComponent,
];

const IMPORTS = [
  BrowserModule.withServerTransition({ appId: "rock-paper-scissors" }),
  BrowserAnimationsModule,
  FlexLayoutModule,
  AppRoutingModule,
];

const PROVIDERS = [GameService, NoOpponentGuard, NoRoundsGuard, NoResultsGuard];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: PROVIDERS,
  bootstrap: [AppComponent],
})
export class AppModule {}
