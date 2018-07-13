import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";

import { Questi } from './mock-questions';

@Component({
  moduleId: module.id,
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public id_w: string;
  public op_w: string;
  public changeYes = true;

  public q2: any[] = Questi;
  public data=[];
  public respuestas = [1,2,3,4];

  public index = 0;
  public q_a: any;   // pregunta
  public q_ida: any;  // id
  public resp_a: any;  // respuesta

  constructor(private route: ActivatedRoute, private router: RouterExtensions) {
    this.route.queryParams.subscribe(params => {
      this.id_w = params['id'];
      this.op_w = params['option'];
    })
  }

  ngOnInit() {
    this.loadQ();
   }

   loadQ() {
     this.q_a = this.q2[this.index].q;
     this.q_ida = this.q2[this.index].id;
   }

  onItemTap(args) {
    let res = args.index;
    this.data.push({id: this.q_ida, resp: res});
    console.dir(this.data);
    this.index ++;
    if(this.index == 25){
      this.router.navigate(["/end"]);
    }else{
      this.loadQ();
    }
  }  
}
