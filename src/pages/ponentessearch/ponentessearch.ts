import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchPage} from "../search/search";
import {DocumentssearchPage} from "../documentssearch/documentssearch";
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the PonentessearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ponentessearch',
  templateUrl: 'ponentessearch.html',
})
export class PonentessearchPage {
  search:any;
  ponentes:any;
  programa:any;
  ponentepro:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
      this.search = navParams.get('str');
      this.getPonentes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PonentessearchPage');
  }

    getPonentes(){
        this.restProvider.searchPonente(this.search)
            .then(data => {
                console.log(data);
                this.ponentes = data;
            });
    }

    getProgramponente(ponente){
        this.restProvider.getProgramaponente(ponente)
            .then(data => {
                console.log(data);
                this.ponentepro = data;
                console.log('PonentePrograma');
                console.log(data);
                this.navCtrl.setRoot(DocumentssearchPage, {
                    programa: data
                });
            });
    }

    searchForm(){
        this.navCtrl.push(SearchPage);
    }

    ponentee(ponente){
      this.getProgramponente(ponente);
    }

}
