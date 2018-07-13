import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable as RxObservable } from "rxjs";
import { HttpHeaders } from '@angular/common/http';

const urlApi = 'https://www.script-labs.com/trabajos/emoji/public/api/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class AppService {
  applicationSettings = require("application-settings");

  constructor(private http: HttpClient) { }

  loginUser(data) {
    return this.http.post<any>(urlApi + 'login', data);
  }

  getQuestionw() {
    let options = this.createRequestOptions();
    return this.http.get<any>(urlApi + 'q_welcome',{ headers: options })
  }

  // consultar el token desde el config
  private createRequestOptions() {
    let headers = new HttpHeaders({
        "Authorization": "Bearer " + this.applicationSettings.getString('token'),
        "Content-Type": "application/json"
    });
    return headers;
}

}
