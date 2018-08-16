import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  applicationSettings = require("application-settings");
  public generos: any;
  public gen: string;

  constructor() { }

  ngOnInit() {
    this.generos = ['Hombre','Mujer'];
  }

  public onItemTap(args){
    let id = args.index;
    this.applicationSettings.setNumber('genero',id);
    this.gen = this.generos[id];
  }

}
