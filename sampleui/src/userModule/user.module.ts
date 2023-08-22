import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {userComp} from "./comp";
import {userService} from "./service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ...userService
  ],
  exports: [
    ...userComp
  ],
  declarations: [
    ...userComp
  ]
})
export class UserModule {
}
