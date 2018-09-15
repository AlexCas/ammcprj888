import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { RestProvider } from '../../providers/rest/rest';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    programa: any;
    last: any;
    date: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, private storage: Storage, public loadingCtrl: LoadingController) {
      storage.get('programa').then((val) => {
          console.log(val);
          if(!val){
              console.log('no');
              this.getHome();
          }else{
              console.log('si');
              this.getDate();
          }
      });
    //this.getHome();
  }

  getHome(){
      const loader = this.loadingCtrl.create({
          content: "Espere mientras se descarga la información..."
      });
      loader.present();
    this.restProvider.getPrograma()
    .then(data => {
      loader.dismiss();
      this.programa = data;
      this.storage.set('programa', data);
      this.setDate();
    });
  }


  getLast(table, date){
      this.restProvider.getLastupdate(table, date)
          .then(data => {
              this.last = data;
              console.log(this.last);
              if(this.last.update == 'true'){
                  this.getHome();
              }else{
                  this.storage.get('programa').then((val) => {
                      this.programa = val;
                  });
              }
          });
  }

  getDate(){
      this.restProvider.getDate()
          .then(data => {
              this.date = data;
              console.log(this.date);
              this.storage.get('lastupdate').then((val) => {
                  console.log(val.date);
                  this.getLast(1, val.date);
              });
          });
  }

  setDate(){
      this.restProvider.getDate()
          .then(data => {
              console.log(data);
              this.storage.set('lastupdate', data);
          });
  }

  searchForm(){
    this.navCtrl.push(SearchPage);
  }

  tema(programa, ide){
    this.navCtrl.push(ListPage, {
      program: programa,
      id: ide
    });
  }

}
