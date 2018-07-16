import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {RouterExtensions} from "nativescript-angular/router";
import {Page} from "ui/page";
import * as dialogs from "ui/dialogs";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "antonios1789@gmail.com";
  password: string = "123456";
  data : any;
  applicationSettings = require("application-settings");

  constructor(private router: RouterExtensions, private service: AppService, private page: Page) { }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  submit() {
    this.data = {"email": this.email, "password": this.password};
    console.dir(this.data);
    this.service.loginUser(this.data).subscribe(res => {
      this.applicationSettings.setString('token',res.data.api_token);
      console.dir(res);
      console.dir(this.applicationSettings.getString('token'));
      this.router.navigate(["/introduction"]);
    },
  error => {
    console.log(error.error.message);
    dialogs.alert(error.error.message).then(()=> {
      console.log("Dialog closed!");
  });
  })
    
  }

}
