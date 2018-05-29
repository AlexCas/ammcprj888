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
      this.http.get(this.url + 'getdocumentos').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  searchDocuments(search){
    return new Promise(resolve => {
      this.http.get(this.url + 'searchdocuments?search=' + search).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getPrograma(){
    return new Promise(resolve => {
      this.http.get(this.url + 'getprograma').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getToday(){
    return new Promise(resolve => {
      this.http.get(this.url + 'getprogramatoday').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getDocprogram(id:any){
    return new Promise(resolve => {
      this.http.get(this.url+'getdocumentosprogram?id=' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }



}
