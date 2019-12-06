import { Component } from '@angular/core';
import { ServiceApiService } from './service-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CompanyMgmt';
  isUserLogin: string;
  constructor( private _ServiceApiService: ServiceApiService, private router: Router){}

  ngOnInit(){
    this.getUserLogin();
  }

  getUserLogin(){
    debugger;
    this.isUserLogin = this._ServiceApiService.isUserLoggedInData();
    debugger;
  }

  logOut(){
    localStorage.setItem("isUserLogin", "false");
    this.router.navigate(['/login']);
  }
}
