import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({providedIn: "root"})
export class AppRouterGuard implements CanActivate {

  constructor(private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree |
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let refData = localStorage.getItem("userdata");
    if (refData) {
      return true;
    } else {
      this._router.navigate(["/user-login"]);
      return false;
    }
  }

}
