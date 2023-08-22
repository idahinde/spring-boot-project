import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'sampleui';
  isLogin: boolean = false;

  constructor() {
    let refData = localStorage.getItem("userdata");
    if (refData) {
      this.isLogin = true;
    }
  }

  logout() {
    this.isLogin = false;
    localStorage.removeItem("userdata");
  }

}
