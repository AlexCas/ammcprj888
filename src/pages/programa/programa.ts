import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ListPage } from '../list/list';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ProgramaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programa',
  templateUrl: 'programa.html',
})
export class ProgramaPage {

  programa;
  today: any;
  selectedDay = new Date();

  viewTitle: string;
  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
      this.getToday();


      // this.programa = this.createRandomEvents();
  }

  onEventSelected(event){
    console.log(event);
      this.navCtrl.push(ListPage, {
          program: event.program,
          id: event.id
      });
  }

  onViewTitleChanged(title){
      this.viewTitle = title;
  }

  onTimeSelected(){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramaPage');
  }

  getToday(){
    this.restProvider.getToday()
    .then(data => {
      this.today = data;
      console.log(this.today);
      var events = [];
      for(let event of this.today){
          events.push({
              title: event.nombre,
              startTime: new Date(event.fecha + ' ' + event.hora),
              endTime: new Date(event.fecha + ' ' + event.hora_final),
              program: event,
              id: event.id,
              allDay: false,
              param: 9
          });
      }

      this.programa = events;
    })
  }

  tema(programa, ide){
    this.navCtrl.push(ListPage, {
      program: programa,
      id: ide
    });
  }

  searchForm(){
    this.navCtrl.push(SearchPage);
  }

}
