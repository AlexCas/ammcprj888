import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";
import {Storage} from "@ionic/storage";
import {SearchPage} from "../search/search";
import {CartelPage} from "../cartel/cartel";

/**
 * Generated class for the CartelesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carteles',
  templateUrl: 'carteles.html',
})
export class CartelesPage {

    programa: any;
    last: any;
    date: any;

    constructor(public navCtrl: NavController, public restProvider: RestProvider, private storage: Storage, public loadingCtrl: LoadingController) {
        storage.get('cartel').then((val) => {
            console.log(val);
            if(!val){
                console.log('no');
                this.getHome();
            }else{
                console.log('si');
                this.getDate();
            }
        });
        //this.getHome();
    }

    getHome(){
        const loader = this.loadingCtrl.create({
            content: "Espere mientras se descarga la información..."
        });
        loader.present();
        this.restProvider.getCartel()
            .then(data => {
                loader.dismiss();
                this.programa = data;
                this.storage.set('cartel', data);
                this.setDate();
            });
    }


    getLast(table, date){
        this.restProvider.getLastupdate(table, date)
            .then(data => {
                this.last = data;
                console.log(this.last);
                if(this.last.update == 'true'){
                    this.getHome();
                }else{
                    this.storage.get('cartel').then((val) => {
                        this.programa = val;
                    });
                }
            });
    }

    getDate(){
        this.restProvider.getDate()
            .then(data => {
                this.date = data;
                console.log(this.date);
                this.storage.get('lastupdateCartel').then((val) => {
                    console.log(val.date);
                    this.getLast(1, val.date);
                });
            });
    }

    setDate(){
        this.restProvider.getDate()
            .then(data => {
                console.log(data);
                this.storage.set('lastupdateCartel', data);
            });
    }

    searchForm(){
        this.navCtrl.push(SearchPage);
    }

    tema(programa, ide){
        this.navCtrl.push(CartelPage, {
            program: programa,
            id: ide
        });
    }

}
