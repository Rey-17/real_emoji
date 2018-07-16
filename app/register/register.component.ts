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

  constructor(private router: RouterExtensions, private service: AppService) {
  }

  ngOnInit() { }

  submit() {
    const data = { nombre: this.nombre, email: this.email, password: this.password };
    console.log(this.email + ' ' + this.nombre + ' ' + this.password);
    this.service.register(data).subscribe(res => {
      console.dir(res);
      dialogs.alert('Te has registrado satisfactoriamente.').then(() => {
        console.log("Dialog closed!");
      });
    }, error => {
      dialogs.alert(error.error.message).then(() => {
        console.log("Dialog closed!");
      });
    });
  }

}
