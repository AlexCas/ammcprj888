import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {SearchPage} from "../search/search";
import {ListPage} from "../list/list";

/**
 * Generated class for the ProgramsearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programsearch',
  templateUrl: 'programsearch.html',
})

export class ProgramsearchPage {

  programs: any;
  search:any;
  ponentepro:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.search = navParams.get('str');
    console.log(this.search);
    this.getProgram();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramsearchPage');
  }
    getProgram(){
        this.restProvider.searchProgram(this.search)
            .then(data => {
              console.log(data);
                this.programs = data;
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
