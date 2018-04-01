import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";
import { ModuleMapLoaderModule } from "@nguniversal/module-map-ngfactory-loader";

import { FlexLayoutServerModule } from "@angular/flex-layout/server";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    FlexLayoutServerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
