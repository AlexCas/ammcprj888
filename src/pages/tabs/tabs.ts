import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { InteresesPage } from '../intereses/intereses';
import { PerfilPage } from '../perfil/perfil';
import { CongresosPage } from '../congresos/congresos';
import { ProgramaPage } from '../programa/programa';
import { DocumentosPage } from '../documentos/documentos';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {


  tab1 = HomePage;
  tab2 = SearchPage;
  tab3 = InteresesPage;
  tab4 = PerfilPage;
  tab5 = CongresosPage;

  page:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = navParams.get('page');

    if (this.page == 'congress') {
        this.navCtrl.parent.select(1);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }


}
