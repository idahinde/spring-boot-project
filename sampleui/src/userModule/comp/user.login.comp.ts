import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../service";
import {HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  templateUrl: "./html/user.login.comp.html"
})
export class UserLoginComp implements OnInit {

  msg: any = "";
  loginForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router,
              private _userService: UserService) {
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username: [""],
      password: [""]
    });
  }

  loginEvent() {

    const param = new HttpParams()
      .append("username", `${this.loginForm.controls["username"].value}`)
      .append("password", `${this.loginForm.controls["password"].value}`);

    this._userService.login(param).subscribe((res: any) => {
        localStorage.setItem("userdata", JSON.stringify(res.data));
        this._router.navigate(['/user-details']);
      },
      err => {
        this.msg = err.error.message;
      });
  }

}
