import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SearchPage} from "../search/search";
import {RestProvider} from "../../providers/rest/rest";
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";

/**
 * Generated class for the DocsgeneralesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-docsgenerales',
  templateUrl: 'docsgenerales.html',
})
export class DocsgeneralesPage {

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public browser: InAppBrowser) {
    this.getDocumentos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocsgeneralesPage');
  }

    searchForm(){
        this.navCtrl.push(SearchPage);
    }

    getDocumentos(){
        this.restProvider.getDocumentsg()
            .then( data => {
            this.documentos = data;
        })
    }

    openDoc(url:any){
        let target = "_system";
        this.browser.create(url, target, this.options);
    }

}
