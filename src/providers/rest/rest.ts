import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  //url:any = 'http://fixingmexico.com/congreso/api/';
  url = 'http://www.ammacadmin.local/api/'
  constructor(public http: HttpClient, public device: Device) {
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

  addMark(id){
    return new Promise (resolve => {
      this.http.get(this.url + 'addmark?device=' + this.device.uuid + '&id=' + id ).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  getMarks(){
    return new Promise (resolve => {
      this.http.get(this.url + 'getmarks?device=' + this.device.uuid).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  setAsistente(nombre, notifications){
    return new Promise(resolve => {
      this.http.get(this.url + 'setasistente?device=' + this.device.uuid + '&nombre=' + nombre + '&notifications=' + notifications).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  getAsistente(){
    return new Promise(resolve => {
      this.http.get(this.url + 'getasistente?device=' + this.device.uuid).subscribe(data => {
        resolve(data);
      },err => {
        console.log(err);
      })
    })
  }

  addNote(programa, notas){
    return new Promise(resolve => {
      this.http.get(this.url + 'addnote?device=' + this.device.uuid + '&programa=' + programa + '&notas=' + notas).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  getNotes(id){
    return new Promise(resolve => {
      this.http.get(this.url + 'getnotes?device=' + this.device.uuid + '&id=' + id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }


}
