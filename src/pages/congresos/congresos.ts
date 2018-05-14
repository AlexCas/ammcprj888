import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  items: Array<{name: any, date: any, image: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CongresosPage');
  }

  initItems(){
    this.items = [
      { name: 'Mammal Description 1', date: '2018 May 20', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tiger_in_the_water.jpg/310px-Tiger_in_the_water.jpg' },
      { name: 'Mammal Description 2', date: '2018 May 20', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tiger_in_the_water.jpg/310px-Tiger_in_the_water.jpg' },
      { name: 'Mammal Description 3', date: '2018 May 20', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tiger_in_the_water.jpg/310px-Tiger_in_the_water.jpg' },
      { name: 'Mammal Description 4', date: '2018 May 20', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tiger_in_the_water.jpg/310px-Tiger_in_the_water.jpg' },
      { name: 'Mammal Description 5', date: '2018 May 20', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tiger_in_the_water.jpg/310px-Tiger_in_the_water.jpg' },
      { name: 'Mammal Description 6', date: '2018 May 20', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tiger_in_the_water.jpg/310px-Tiger_in_the_water.jpg' },
      { name: 'Mammal Description 7', date: '2018 May 20', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Tiger_in_the_water.jpg/310px-Tiger_in_the_water.jpg' },      
    ]
  }

}
