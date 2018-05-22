import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CongresosPage } from '../pages/congresos/congresos';
import { ProgramaPage } from '../pages/programa/programa';
import { DocumentosPage } from '../pages/documentos/documentos';
import { InteresesPage } from '../pages/intereses/intereses';
import { PerfilPage } from '../pages/perfil/perfil';
import { ContactoPage } from '../pages/contacto/contacto';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any, page: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'md-home', page: 'congress' },
      { title: 'Congress', component: CongresosPage, icon: 'md-list-box', page: 'congress' },
      { title: 'Program', component: ProgramaPage, icon: 'md-list', page: 'program' },
      { title: 'Documents', component: DocumentosPage, icon: 'md-book', page: 'documents' },
      { title: 'Marks', component: InteresesPage, icon: 'md-bookmark', page: 'congress' },
      { title: 'Profile', component: PerfilPage, icon: 'md-person', page: 'congress' },
      { title: 'Contact', component: ContactoPage, icon: 'md-contacts', page: 'contact' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.backgroundColorByHexString('#53b9a6');
      this.splashScreen.hide();
    });
  }

  openPage(page, par) {
    this.nav.setRoot(page.component, {
      'page': par,
    });
  }
}
