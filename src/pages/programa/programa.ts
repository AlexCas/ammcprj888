import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ListPage } from '../list/list';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ProgramaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programa',
  templateUrl: 'programa.html',
})
export class ProgramaPage {

  programa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
      this.getToday();
      console.log(this.programa);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramaPage');
  }

  getToday(){
    this.restProvider.getToday()
    .then(data => {
      this.programa = data;
    })
  }

  tema(programa, ide){
    this.navCtrl.push(ListPage, {
      program: programa,
      id: ide
    });
  }

  searchForm(){
    this.navCtrl.push(SearchPage);
  }
}
