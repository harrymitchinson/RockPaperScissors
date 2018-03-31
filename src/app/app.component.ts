import { Component } from "@angular/core";
import { slideTransition } from "./routing.animations";
import { RouterOutlet } from "@angular/router";

@Component({
  animations: [slideTransition],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `:host {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }`,
    `main {
      height: 100%;
    }`,
    `div {
      height: 100%;
    }`,
  ],
})
export class AppComponent {
  /**
   * Get the state value from the activated route.
   * @param {(RouterOutlet | any)} outlet
   * @returns {string}
   * @memberof AppComponent
   */
  getState(outlet: RouterOutlet | any): string {
    return outlet.activatedRouteData.state;
  }
}
