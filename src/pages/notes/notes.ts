import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider} from '../../providers/rest/rest';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  id: any;
  nota: any;

  notes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public toastCtrl: ToastController) {
    this.id = navParams.get('id');
    this.getNotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

  addNote(){
    this.restProvider.addNote(this.id, this.nota)
    .then(data => {
      if(data != null ){
        const toast = this.toastCtrl.create({
          message: 'Note Saved',
          showCloseButton: true,
          closeButtonText: 'Ok'
        });
        toast.present();
      }
    });

    this.navCtrl.setRoot(HomePage);
  }

  getNotes(){
    this.restProvider.getNotes(this.id)
    .then(data => {
      this.notes = data;
    })
  }

}
