import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  applicationSettings = require("application-settings");
  q1: string = 'test';

  constructor(private service: AppService) { }

  ngOnInit() { 
    this.loadQuestion();
  }

  loadQuestion() {
    this.service.getQuestionw().subscribe( res => {
      console.dir(res);
    }, error => {
      console.dir(error);
    })
  }

}
