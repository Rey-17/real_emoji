import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras} from "@angular/router";
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
  public respuestas = [{id: 1 ,q: 'Nada de acuerdo.'},{id: 2, q: 'Algo de acuerdo.'}, {id: 3, q: 'Bastante de acuerdo.'}, {id: 4, q: 'Muy de acuerdo'},{id: 5, q: 'Totalmente de acuerdo.'}];

  public index = 0;
  public q_a: any;   // pregunta
  public q_ida: any;  // id
  public resp_a: any;  // respuesta

  public f_ae: number = 0;  // atencion emocional puntajes
  public f_ce: number = 0; // claridad emocional
  public f_re: number = 0; // reparación de las emociones

  constructor(private route: ActivatedRoute, private router: RouterExtensions) {
    this.route.queryParams.subscribe(params => {
      this.id_w = params['id'];
      this.op_w = params['option'];
    });
  }

  ngOnInit() {
    this.loadQ();
   }

   loadQ() {
     if(this.index <= 23){
      this.q_a = this.q2[this.index].q;
      this.q_ida = this.q2[this.index].id;
     }
   }

  onItemTap(args) {
    let res = +args.index + 1;
    this.data.push({id: this.q_ida, resp: res});
    if(this.q_ida <= 8){
      this.f_ae += res;
    }else if(this.q_ida > 8 && this.q_ida <= 16){
      this.f_ce += res;
    }else if(this.q_ida > 16 && this.q_ida <= 24){
      this.f_re += res;
    }
    this.index ++;

    if(this.index == 24){
    let extras: NavigationExtras = {
      queryParams: {
        atencion: this.f_ae,
        claridad: this.f_ce,
        reparacion: this.f_re,
        data: JSON.stringify(this.data),
        welcome: this.id_w
      }
    };
    console.dir(this.data);
      this.router.navigate(["/end"], extras);
    }else{
      this.loadQ();
    }
  }  
}
