import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpParams} from "@angular/common/http";
import {UserService} from "../service";

@Component({
  templateUrl: "./html/create.user.account.html"
})
export class CreateUserAccount implements OnInit {

  message: any = "";
  userForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _userService: UserService) {
  }

  ngOnInit(): void {

    this.userForm = this._formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  f(key: any): boolean {
    return this.userForm.controls[key].touched && this.userForm.controls[key].invalid;
  }

  createEvent() {
    if (!this.userForm.invalid) {

      const data = new HttpParams()
        .append("firstName", `${this.userForm.controls['firstName'].value}`)
        .append("lastName", `${this.userForm.controls['lastName'].value}`)
        .append("username", `${this.userForm.controls['username'].value}`)
        .append("password", `${this.userForm.controls['password'].value}`);

      this._userService.save(data).subscribe((res: any) => {
          this.message = res.message;
          this.userForm.reset({
            firstName: "", lastName: "",
            username: "", password: ""
          });
        },
        err => {
          this.message = err.error.message;
        });

    } else {
      this.userForm.markAllAsTouched();
    }
  }

}
