import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
/**
 * Generated class for the CongresosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-congresos',
  templateUrl: 'congresos.html',
})
export class CongresosPage {



  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CongresosPage');
  }

  searchForm(){
    this.navCtrl.push(SearchPage);
  }

}
