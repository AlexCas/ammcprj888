import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  url:any = 'http://fixingmexico.com/congreso/api/';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getDocumentos(){
    return new Promise(resolve => {
      this.http.get('http://fixingmexico.com/congreso/api/getdocumentos').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }



}
