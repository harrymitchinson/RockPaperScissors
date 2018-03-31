import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { GameService } from "./services";
import { RouterTestingModule } from "@angular/router/testing";
import { Route } from "@angular/router";
import { Component } from "@angular/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "app-test-route-component",
  template: "",
})
class TestRouteComponent {}

describe("AppComponent", () => {
  const routes: Route[] = [
    { path: "test", component: TestRouteComponent, data: { state: "test" } },
  ];
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(routes), NoopAnimationsModule],
        declarations: [TestRouteComponent, AppComponent],
        providers: [GameService],
      }).compileComponents();
    })
  );
  it(
    "should create the app",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );

  it("should pass route outlet", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const outlet = { activatedRouteData: { state: "test" } };
    const result = component.getState(outlet);
    expect(result).toBe(routes[0].data.state);
  });
});
