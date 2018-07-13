import { Component, OnInit } from '@angular/core';
import { ListPicker } from "ui/list-picker";
import {RouterExtensions} from "nativescript-angular/router";
import { NavigationExtras } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  applicationSettings = require("application-settings");
  q1: string;
  qoptions: any = [];
  qopt: Array<string> = [];

  constructor(private service: AppService, private router: RouterExtensions) { }

  ngOnInit() { 
    this.loadQuestion();
  }

  loadQuestion() {
    this.service.getQuestionw().subscribe( res => {
      this.q1 = res[0].pregunta;
      this.qoptions = res[0].options_questions;
      console.dir(this.qoptions);
      this.createList();
    }, error => {
      console.dir(error);
    })
  }

  createList() {
    for (let i = 0; i < this.qoptions.length; i++) {
      this.qopt.push(this.qoptions[i].option);
    }
    console.dir(this.qopt);
  }

  public onItemTap(args) {
    let id = args.index + 1;
    let op = this.qopt[args.index];
    let extras: NavigationExtras = {
      queryParams: {
        'id' : id,
        'option' : op
      }
    }
    this.router.navigate(["/questions"], extras);
  }

}
