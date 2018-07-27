import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SearchPage } from '../search/search';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { NotesPage } from '../notes/notes';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  documentos: any;
  notas:any;
  programa: any;
  id:any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public browser: InAppBrowser, public toastCtrl: ToastController) {
      this.programa = navParams.get('program');
      console.log(this.programa);
      this.id = navParams.get('id');
      console.log(this.id);
      this.getDocprogram();
  }

  getDocprogram(){
    this.restProvider.getDocprogram(this.id)
    .then(data => {
      this.documentos = data;
    })
  }

  searchForm(){
    this.navCtrl.push(SearchPage);
  }

  openDoc(url:any){
    let target = "_system";
    this.browser.create(url, target, this.options);
  }

  openNotes(){
    this.navCtrl.push(NotesPage,{
      id: this.id,
    });
  }


  addFavs(){
    this.restProvider.addMark(this.id)
    .then(data => {
      const toast = this.toastCtrl.create({
        message: 'Add in your Marks',
        showCloseButton: true,
        closeButtonText: 'Ok'
      });
      toast.present();
    })
  }

}
