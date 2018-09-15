import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ListPage } from '../list/list';
import { SearchPage } from '../search/search';
import { Storage } from '@ionic/storage';

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

  programa: any;
  today: any;
  selectedDay = new Date();
  date: any;
  last:any;

  events: Array<Object>;
  viewTitle: string;
  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, private storage: Storage) {

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

    getLast(table, date){
        this.restProvider.getLastupdate(table, date)
            .then(data => {
                this.last = data;
                console.log(this.last);
                if(this.last.update == 'true'){
                    this.getToday();
                }else{
                    this.storage.get('programa').then((val) => {
                        this.today = val;
                        var events = [];

                        for (var i = 0; this.today.length > i; i++){

                            var ev = {title:'', startTime:null, endTime:null, program:Object, id:0, allDay: false, param:9};
                            ev.title = this.today[i]['nombre'];
                            ev.startTime = new Date(this.today[i]['fecha'] + ' ' + this.today[i]['hora']);
                            ev.endTime = new Date(this.today[i]['fecha'] + ' ' + this.today[i]['hora_final']);
                            ev.program = this.today[i];
                            ev.id = this.today[i]['id'];

                            events[i] = ev;
                        }
                        this.programa = events;
                        console.log(this.programa);
                    });
                }
            });
    }

    getDate(){
        this.restProvider.getDate()
            .then(data => {
                this.date = data;
                console.log(this.date);
                this.storage.get('lastupdate').then((val) => {
                    console.log(val.date);
                    this.getLast(1, val.date);
                });
            });
    }

    setDate(){
        this.restProvider.getDate()
            .then(data => {
                console.log(data);
                this.storage.set('lastupdate', data);
            });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramaPage');
      this.storage.get('programa').then((val) => {
          console.log(val);
          if(!val){
              console.log('no');
              this.getToday();
          }else{
              console.log('si');
              this.getDate();
          }
      });
  }

  getToday(){
    this.restProvider.getToday()
    .then(data => {
      this.today = data;
        this.storage.set('programa', data);
        this.setDate();
      var events = [];
        this.today = data;
      for (var i = 0; this.today.length > i; i++){
          console.log(this.today[i]);
          var ev = {title:'', startTime:null, endTime:null, program:Object, id:0, allDay: false, param:9};
          ev.title = this.today[i]['nombre'];
          ev.startTime = new Date(this.today[i]['fecha'] + ' ' + this.today[i]['hora']);
          ev.endTime = new Date(this.today[i]['fecha'] + ' ' + this.today[i]['hora_final']);
          ev.program = this.today[i];
          ev.id = this.today[i]['id'];

          events[i] = ev;
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
