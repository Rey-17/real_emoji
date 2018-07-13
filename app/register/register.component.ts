import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {RouterExtensions} from "nativescript-angular/router";
import {Page} from "ui/page";

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
    console.log(this.email + ' ' + this.nombre + ' ' + this.password);
  }

}
