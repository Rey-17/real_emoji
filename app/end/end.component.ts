import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RouterExtensions} from "nativescript-angular/router";

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

  constructor(private route: ActivatedRoute, private router: RouterExtensions) {
    this.route.queryParams.subscribe(params => {
      this.atencion = params['atencion'];
      this.claridad = params['claridad'];
      this.reparacion = params['reparacion'];
      this.data = params['data'];
      this.welcome = params['welcome'];
    });
  }

  ngOnInit() { }

}
