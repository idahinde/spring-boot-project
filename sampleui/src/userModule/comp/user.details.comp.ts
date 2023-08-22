import {Component} from "@angular/core";
import {UserData} from "../model";
import {Router} from "@angular/router";

@Component({
  templateUrl: "./html/user.details.comp.html"
})
export class UserDetailsComp {

  msg: string = "";
  userdata!: UserData;
  isShowShare: boolean = false;

  constructor(private _router: Router) {
    let refData = localStorage.getItem("userdata");
    if (refData) {
      this.userdata = JSON.parse(refData);
    } else {
      this._router.navigate(['/user-login']);
    }
  }

  shareEvent() {
    this.isShowShare = true;
  }

  shareDatEvent(name: string) {
    this.msg = ` Successfully shared to ${name}`;
  }

}
