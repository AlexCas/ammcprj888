import { NgModule } from '@angular/core';
import { IonicPageModule, NavParams } from 'ionic-angular';
import { CongresosPage } from './congresos';

@NgModule({
  declarations: [
    CongresosPage,
  ],
  imports: [
    IonicPageModule.forChild(CongresosPage),
  ],
})
export class CongresosPageModule {}
