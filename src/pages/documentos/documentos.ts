import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the DocumentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-documentos',
  templateUrl: 'documentos.html',
})
export class DocumentosPage {

  documentos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getDocumentos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentosPage');
  }

  getDocumentos(){
    this.restProvider.getDocumentos()
    .then(data => {
      this.documentos = data;
    });
  }

}
