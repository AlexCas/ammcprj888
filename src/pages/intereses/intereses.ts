import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';
import { SearchPage } from '../search/search';
import { ListPage } from '../list/list';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the InteresesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intereses',
  templateUrl: 'intereses.html',
})
export class InteresesPage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getMarks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InteresesPage');
  }

  searchForm(){
    this.navCtrl.push(SearchPage);
  }

  getMarks(){
    this.restProvider.getMarks()
    .then(data => {
      this.items = data;
    })
  }

  gopage(item){
    this.navCtrl.setRoot(ListPage, {
      program: item.programa,
      id: item.id
    })
  }


}
