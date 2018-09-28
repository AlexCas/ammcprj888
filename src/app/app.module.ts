import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CongresosPage } from '../pages/congresos/congresos';
import { ProgramaPage } from '../pages/programa/programa';
import { DocumentosPage } from '../pages/documentos/documentos';
import { InteresesPage } from '../pages/intereses/intereses';
import { PerfilPage } from '../pages/perfil/perfil';
import { PartnersPage } from '../pages/partners/partners';
import { ContactoPage } from '../pages/contacto/contacto';
import { NotesPage } from '../pages/notes/notes';
import { WelcomePage } from '../pages/welcome/welcome';
import { ProgramsearchPage } from '../pages/programsearch/programsearch';
import { PonentessearchPage } from '../pages/ponentessearch/ponentessearch';
import { DocumentssearchPage } from '../pages/documentssearch/documentssearch';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Device } from '@ionic-native/device';
import { NgCalendarModule } from 'ionic2-calendar';
import { IonicStorageModule } from '@ionic/storage';
import {CartelesPage} from "../pages/carteles/carteles";
import {CartelPage} from "../pages/cartel/cartel";
import {DocsgeneralesPage} from "../pages/docsgenerales/docsgenerales";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CongresosPage,
    ProgramaPage,
    DocumentosPage,
    InteresesPage,
    PerfilPage,
    ContactoPage,
    TabsPage,
    SearchPage,
    PartnersPage,
    NotesPage,
    ProgramsearchPage,
    PonentessearchPage,
    DocumentssearchPage,
    CartelesPage,
    CartelPage,
    WelcomePage,
      DocsgeneralesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    NgCalendarModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CongresosPage,
    ProgramaPage,
    DocumentosPage,
    InteresesPage,
    PerfilPage,
    ContactoPage,
    TabsPage,
    SearchPage,
      WelcomePage,
    PartnersPage,
    NotesPage,
    ProgramsearchPage,
    PonentessearchPage,
    DocumentssearchPage,
      CartelesPage,
      CartelPage,
      DocsgeneralesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    InAppBrowser,
    Device
  ]
})
export class AppModule {}
