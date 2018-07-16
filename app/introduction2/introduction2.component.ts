import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouterExtensions} from "nativescript-angular/router";
import { NavigationExtras } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  moduleId: module.id,
  selector: 'app-introduction2',
  templateUrl: './introduction2.component.html',
  styleUrls: ['./introduction2.component.scss']
})
export class Introduction2Component implements OnInit {
  public id_w: string;
  public op_w: string;
  public text: string;
  public text2: string;

  constructor(private route: ActivatedRoute, private router: RouterExtensions) {
    this.route.queryParams.subscribe(params => {
      this.id_w = params['id'];
      this.op_w = params['option'];
    });
    console.log(this.id_w);
    console.log(this.op_w);
   }

  ngOnInit() {
    this.text = 'A continuación encontrará algunas afirmaciones sobre sus emociones y sentimientos. Lea atentamente cada frase e ' +
    'indique por favor, el grado de acuerdo o desacuerdo con respecto a las mismas. Seleccione la respuesta que ' +
    'más se aproxime a sus preferencias. ';

    this.text2 = 'No hay respuestas correctas o incorrectas, ni buenas o malas. '+
    'No emplee mucho tiempo en cada respuesta.';
   }

  continue() {
    console.log('continuar');

    let extras: NavigationExtras = {
      queryParams: {
        'id' : this.id_w,
        'option' : this.op_w
      }
    }
    this.router.navigate(["/questions"], extras);
  }

}
