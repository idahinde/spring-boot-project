import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateUserAccount, UserDetailsComp, UserLoginComp} from "../userModule/comp";
import {AppRouterGuard} from "./app-router-guard";
import {AppDashboardComp} from "./app-dashboard.comp";

const routes: Routes = [
  {path: "", pathMatch: "full", component: AppDashboardComp},
  {path: "create-user", component: CreateUserAccount},
  {path: "user-login", component: UserLoginComp},
  {path: "user-details", canActivate: [AppRouterGuard], component: UserDetailsComp},
  {path: "**", component: AppDashboardComp}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
