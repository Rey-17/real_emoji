import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {RouterExtensions} from "nativescript-angular/router";
import {Page} from "ui/page";
import * as dialogs from "ui/dialogs";
import {LoadingIndicator} from "nativescript-loading-indicator";

//var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;

var loader = new LoadingIndicator();

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string ;//
  password: string; // 
  data : any;
  applicationSettings = require("application-settings");
  public loading: boolean   = true;

  constructor(private router: RouterExtensions, private service: AppService, private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  submit() {
    this.loading = false;
    loader.show();
    this.data = {"email": this.email, "password": this.password};
    console.dir(this.data);
    this.service.loginUser(this.data).subscribe(res => {
      this.applicationSettings.setString('token',res.data.api_token);
      this.applicationSettings.setNumber('id_user', res.data.id);
      console.dir(res);
      console.dir(this.applicationSettings.getString('token'));
      loader.hide();
      this.router.navigate(["/introduction"],{ clearHistory: true });
      this.loading = true;
    },
  error => {
    loader.hide();
    this.loading = true;
    console.log(error.error.message);
    dialogs.alert(error.error.message).then(()=> {
      console.log("Dialog closed!");
  });
  })
    
  }

}
