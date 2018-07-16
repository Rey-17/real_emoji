import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import * as dialogs from "ui/dialogs";

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public nombre: String;
  public email: String;
  public password: String;

  applicationSettings = require("application-settings");

  constructor(private router: RouterExtensions, private service: AppService) {
  }

  ngOnInit() { }

  submit() {
    const data = { name: this.nombre, email: this.email, password: this.password, password_confirmation: this.password};
    console.log(this.email + ' ' + this.nombre + ' ' + this.password);
    this.service.register(data).subscribe(res => {
      console.dir(res);
      this.applicationSettings.setString('token',res.data.api_token);
      dialogs.alert('Te has registrado satisfactoriamente.').then(() => {
        this.router.navigate(["/introduction"]);
      });
    }, error => {
      console.dir(error);
      dialogs.alert(error.error.message).then(() => {
        console.log("Dialog closed!");
      });
    });
  }

}
