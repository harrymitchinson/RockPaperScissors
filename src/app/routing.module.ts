import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import {
  LandingComponent,
  OpponentComponent,
  RoundsComponent,
  WeaponComponent,
  ResultComponent,
} from "./pages";
import { NoRoundsGuard, NoResultsGuard, NoOpponentGuard } from "./guards";
import { RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" },
  { path: "landing", component: LandingComponent },
  {
    path: "opponent",
    component: OpponentComponent,
    data: { state: "opponent" },
  },
  {
    path: "rounds",
    component: RoundsComponent,
    data: { state: "rounds" },
    canActivate: [NoOpponentGuard],
  },
  {
    path: "weapon/:round",
    component: WeaponComponent,
    data: { state: "weapon" },
    canActivate: [NoRoundsGuard],
  },
  {
    path: "result",
    component: ResultComponent,
    data: { state: "result" },
    canActivate: [NoResultsGuard],
  },
  { path: "**", redirectTo: "/landing", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
