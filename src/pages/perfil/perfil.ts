import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { RestProvider} from '../../providers/rest/rest';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  nombre: string;
  email: string;
  notifications: number;
  asistente: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public toastCtrl: ToastController) {
    this.getAsistente();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  save(){
    this.restProvider.setAsistente(this.nombre, this.notifications, this.email)
    .then(data => {
      const toast = this.toastCtrl.create({
        message: 'Info Saved',
        showCloseButton: true,
        closeButtonText: 'Ok'
      });
      toast.present();
    })
  }

  searchForm(){
    this.navCtrl.push(SearchPage);
  }

  getAsistente(){
    this.restProvider.getAsistente()
    .then(data => {
      this.asistente = data;

      if (data != null) {
        this.nombre = this.asistente.nombre;
        this.notifications = this.asistente.notifications;
        this.email = this.asistente.email;
      }
    })
  }

}
