import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserModule} from "../userModule/user.module";
import {AppRouterGuard} from "./app-router-guard";
import {AppDashboardComp} from "./app-dashboard.comp";

@NgModule({
  declarations: [
    AppComponent, AppDashboardComp
  ],
  imports: [
    BrowserModule, UserModule,
    AppRoutingModule
  ],
  providers: [
    AppRouterGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
