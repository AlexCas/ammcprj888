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
import { ContactoPage } from '../pages/contacto/contacto';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';

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
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
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
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
