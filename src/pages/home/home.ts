import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    programa: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getHome();
  }

  getHome(){
    this.restProvider.getPrograma()
    .then(data => {
      this.programa = data;
    });
  }

  searchForm(){
    this.navCtrl.push(SearchPage);
  }

}
