import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

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
    options : InAppBrowserOptions = {
      location : 'yes',//Or 'no'
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',//Android only ,shows browser zoom controls
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only
      toolbar : 'yes', //iOS only
      enableViewportScale : 'no', //iOS only
      allowInlineMediaPlayback : 'no',//iOS only
      presentationstyle : 'pagesheet',//iOS only
      fullscreen : 'yes',//Windows only
  };

  search_input: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public browser: InAppBrowser) {
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

  searchDocs(){
    this.restProvider.searchDocuments(this.search_input)
    .then(data => {
      this.documentos = data;
    });
  }

  openDoc(url:any){
    let target = "_system";
    this.browser.create(url, target, this.options);
  }

  search(){
    this.searchDocs();
  }

}
