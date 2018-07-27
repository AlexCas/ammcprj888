import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProgramsearchPage } from '../programsearch/programsearch';
import { PonentessearchPage } from '../ponentessearch/ponentessearch';
import { DocumentssearchPage } from '../documentssearch/documentssearch';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  category: any = null;
  strsearch: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  search(){
    if (this.category != null && this.strsearch != null) {
        if (this.category == 1) {
            this.navCtrl.push(ProgramsearchPage, {
              str: this.strsearch
            });
        }else if(this.category == 2){
          this.navCtrl.push(PonentessearchPage, {
            str: this.strsearch
          });
        }else if(this.category == 3){
          this.navCtrl.push(DocumentssearchPage, {
            str: this.strsearch
          });
        }
    }else{
      const toast = this.toastCtrl.create({
        message: 'Category or Search input can not be blank',
        showCloseButton: true,
        closeButtonText: 'Ok'
      });
      toast.present();
    }
  }

}
