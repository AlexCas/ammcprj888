import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    searchQuery: string = '';
    items: string[];
  constructor(public navCtrl: NavController) {

  }

  searchForm(){
    this.navCtrl.push(SearchPage);
  }

}
