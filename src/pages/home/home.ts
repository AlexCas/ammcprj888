import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { RestProvider } from '../../providers/rest/rest';
import { ListPage } from '../list/list';

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

  tema(programa, ide){
    this.navCtrl.push(ListPage, {
      program: programa,
      id: ide
    });
  }

}
