import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { ProgramaPage } from '../pages/programa/programa';
import { DocumentosPage } from '../pages/documentos/documentos';
import { InteresesPage } from '../pages/intereses/intereses';
import { PerfilPage } from '../pages/perfil/perfil';
import { ContactoPage } from '../pages/contacto/contacto';
import { PartnersPage } from '../pages/partners/partners';
import { SearchPage } from '../pages/search/search';
import {Http, Headers, RequestOptions} from '@angular/http';
import {CartelesPage} from "../pages/carteles/carteles";
import {DocsgeneralesPage} from "../pages/docsgenerales/docsgenerales";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any, icon: any, page: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, icon: 'md-home', page: 'congress' },
      { title: 'Patrocinadores', component: PartnersPage, icon: 'md-list-box', page: 'congress' },
      { title: 'Programa', component: ProgramaPage, icon: 'md-list', page: 'program' },
      { title: 'Carteles', component: CartelesPage, icon: 'md-tablet-portrait', page: 'carteles' },
      { title: 'Marcas', component: InteresesPage, icon: 'md-bookmark', page: 'congress' },
      { title: 'Documentos', component: DocsgeneralesPage, icon: 'md-book', page: 'docsgenerales' },
      { title: 'Configuración', component: PerfilPage, icon: 'md-cog', page: 'congress' },
      { title: 'Contacto', component: ContactoPage, icon: 'md-contacts', page: 'contact' },
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
