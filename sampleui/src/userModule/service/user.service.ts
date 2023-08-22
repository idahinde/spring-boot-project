import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

const apiUrl = "http://localhost:8080/user";

@Injectable({providedIn: "root"})
export class UserService {

  constructor(private _http: HttpClient) {
  }

  save(param: HttpParams): Observable<any> {
    return this._http.post(`${apiUrl}`, param);
  }

  login(param: HttpParams): Observable<any> {
    return this._http.post(`${apiUrl}/login`, param);
  }

}
