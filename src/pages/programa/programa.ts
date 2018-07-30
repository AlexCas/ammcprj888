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
  selectedDay = new Date();

  viewTitle: string;
  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
      // this.getToday();
      console.log(this.programa);
      var events = [];
      events.push({
          title: 'Murcielagos: ¿Cómo Vuelan?',
          startTime: new Date('2018-07-30'),
          endTime: new Date('2018-08-03'),
          allDay: true
      });

      events.push({
          title: 'Tigres: ¿Cómo Comen?',
          startTime: new Date('2018-08-05 15:00:00'),
          endTime: new Date('2018-08-05 17:30:00'),
          allDay: false,
          param: 9
      });
      this.programa = events;
      console.log(this.programa);
      // this.programa = this.createRandomEvents();
  }

  onEventSelected(event){
    console.log(event);
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
      this.programa = data;
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

  createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    }
}
