import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchPage} from "../search/search";
import {ListPage} from "../list/list";

/**
 * Generated class for the DocumentssearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documentssearch',
  templateUrl: 'documentssearch.html',
})
export class DocumentssearchPage {

  programa:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.programa = navParams.get('programa');
    console.log('Hi');
    console.log(this.programa);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentssearchPage');
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
