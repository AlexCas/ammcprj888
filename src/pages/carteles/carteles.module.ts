import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartelesPage } from './carteles';

@NgModule({
  declarations: [
    CartelesPage,
  ],
  imports: [
    IonicPageModule.forChild(CartelesPage),
  ],
})
export class CartelesPageModule {}
