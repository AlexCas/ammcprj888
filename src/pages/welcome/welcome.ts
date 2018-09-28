import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { HomePage } from '../home/home';
import { RestProvider } from "../../providers/rest/rest";
import { Storage } from '@ionic/storage';


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
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

    message: any;
    date: any;
    last:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public browser: InAppBrowser, public restProvider: RestProvider, public storage: Storage) {
          this.getLast();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

    goHome(){
      this.navCtrl.setRoot(HomePage);
    }

    getLast(){
      this.restProvider.getLastupdate(0, this.date)
          .then( data => {
              this.last = data;
              console.log(this.last);
              if(this.last.update == 'true'){
                  this.welcome();
              }else{
                  this.storage.get('welcome').then((val) => {
                     if (!val){
                         this.welcome();
                     }else{
                         this.message = val;
                     }
                  });
              }
          });
    }

    openWeb(url){
        let target = "_system";
        this.browser.create(url, target, this.options);
    }

    welcome(){
        this.restProvider.getWelcome()
            .then(data => {
                console.log(data);
                this.storage.set('welcome', data);
                this.setDate();
                this.message = data;
            });
    }

    getDate(){
        this.restProvider.getDate()
            .then(data => {
                this.date = data;
                console.log(this.date);
                this.storage.get('lastupdateWelcome').then((val) => {
                    console.log(val.date);
                    this.date = val;
                });
            });
    }

    setDate(){
        this.restProvider.getDate()
            .then(data => {
                console.log(data);
                this.storage.set('lastupdateWelcome', data);
            });
    }

}
