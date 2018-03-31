import { Component } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styles: [
    `:host {
    height: 100%;
    width: 100%;
    display: block;
  }`,
    `.full {
    height: 100%;
    width: 100%;
  }`,
  ],
})
export class LandingComponent {
  /**
   * Creates an instance of LandingComponent.
   * @memberof LandingComponent
   */
  constructor() {}
}
