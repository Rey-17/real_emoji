import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RouterExtensions} from "nativescript-angular/router";
import { AppService } from '~/app.service';

@Component({
  moduleId: module.id,
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {
  public atencion: number;
  public claridad: number;
  public reparacion: number;
  public data: any;
  public welcome: number;

  public data_save: any;
  public id_user: number;
  public msgerr: any;
  public msgt: any;
  public genero: any;
  public msg_atencion: String;
  applicationSettings = require("application-settings");
  msg_claridad: string;
  msg_reparacion: string;

  constructor(private route: ActivatedRoute, private router: RouterExtensions, private appService: AppService) {
    this.route.queryParams.subscribe(params => {
      this.atencion = params['atencion'];
      this.claridad = params['claridad'];
      this.reparacion = params['reparacion'];
      this.data = JSON.parse(params['data']);
      this.welcome = params['welcome'];
      this.id_user = this.applicationSettings.getNumber('id_user');

      this.data_save = {atencion: params['atencion'], claridad: params['claridad'],
      reparacion: params['reparacion'], data: JSON.parse(params['data']), welcome: params['welcome'], id_user: this.id_user};
    });
  }

  ngOnInit() { 
    //console.dir(this.data_save);
    // if( this.atencion == )
    this.genero = this.applicationSettings.getNumber('genero');
    // 0 es hombre
    if(this.genero == 0){
      if(this.atencion < 21){
        this.msg_atencion = 'Presta poca atención';
      } else if(this.atencion >= 22 && this.atencion <= 32 ){
        this.msg_atencion = 'Adecuada atención';
      } else if( this.atencion > 33){
        this.msg_atencion = 'Presta demasiada Atención';
      }

      if(this.claridad < 25 ){
        this.msg_claridad = 'Debe mejorar su claridad';
      }else if(this.claridad >= 26 && this.claridad <= 35){
        this.msg_claridad = 'Adecuada Claridad';
      }else if(this.claridad > 36){
        this.msg_claridad = 'Excelente Claridad';
      }

      if(this.reparacion < 23) {
        this.msg_reparacion = 'Debe mejorar su reparación';
      } else if(this.reparacion >= 24 && this.reparacion <= 35){
        this.msg_reparacion = 'Adecuada Reparación';
      }else if( this.reparacion > 36 ) {
        this.msg_reparacion = 'Excelente Reparación';
      }
    }else if( this.genero == 1 ){
      if(this.atencion < 24){
        this.msg_atencion = 'Presta poca atención';
      } else if(this.atencion >= 25 && this.atencion <= 35 ){
        this.msg_atencion = 'Adecuada atención';
      } else if( this.atencion > 36){
        this.msg_atencion = 'Presta demasiada Atención';
      }

      if(this.claridad < 23 ){
        this.msg_claridad = 'Debe mejorar su claridad';
      }else if(this.claridad >= 24 && this.claridad <= 34){
        this.msg_claridad = 'Adecuada Claridad';
      }else if(this.claridad > 35){
        this.msg_claridad = 'Excelente Claridad';
      }

      if(this.reparacion < 23) {
        this.msg_reparacion = 'Debe mejorar su reparación';
      } else if(this.reparacion >= 24 && this.reparacion <= 34){
        this.msg_reparacion = 'Adecuada Reparación';
      }else if( this.reparacion > 35 ) {
        this.msg_reparacion = 'Excelente Reparación';
      }
    }
    this.saveDta();
  }

  saveDta() {
    this.appService.saveData(this.data_save).subscribe(res => {
      console.dir(res);
    }, error => {
      console.dir(error);
    });
  }

}
