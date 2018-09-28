import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";
import {RestProvider} from "../../providers/rest/rest";
import {SearchPage} from "../search/search";
import {NotesPage} from "../notes/notes";
declare const google;
/**
 * Generated class for the CartelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartel',
  templateUrl: 'cartel.html',
})
export class CartelPage {

    @ViewChild('map') mapElement: ElementRef;
    documentos: any;
    notas:any;
    programa: any;
    id:any;
    markers = [];
    map: any;
    options : InAppBrowserOptions = {
        location : 'yes',//Or 'no'
        hidden : 'no', //Or  'yes'
        clearcache : 'yes',
        clearsessioncache : 'yes',
        zoom : 'yes',//Android only ,shows browser zoom controls
        hardwareback : 'yes',
        mediaPlaybackRequiresUserAction : 'no',
        shouldPauseOnSuspend : 'no', //Android only
        closebuttoncaption : 'Close', //iOS only
        disallowoverscroll : 'no', //iOS only
        toolbar : 'yes', //iOS only
        enableViewportScale : 'no', //iOS only
        allowInlineMediaPlayback : 'no',//iOS only
        presentationstyle : 'pagesheet',//iOS only
        fullscreen : 'yes',//Windows only
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public browser: InAppBrowser, public toastCtrl: ToastController) {
        this.programa = navParams.get('program');
        console.log(this.programa);
        this.id = navParams.get('id');
        console.log(this.id);
        this.getDocprogram();
    }

    ionViewDidLoad(){
        this.initMap();
    }

    getDocprogram(){
        this.restProvider.getDocprogram(this.id)
            .then(data => {
                this.documentos = data;
            })
    }

    searchForm(){
        this.navCtrl.push(SearchPage);
    }

    openDoc(url:any){
        let target = "_system";
        this.browser.create(url, target, this.options);
    }

    openNotes(){
        this.navCtrl.push(NotesPage,{
            id: this.id,
        });
    }

    initMap() {
        var latlng = new google.maps.LatLng(+this.programa.latitud, +this.programa.longitud);
        console.log(latlng);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            center: latlng,
            mapTypeId: 'roadmap',
            disableDefaultUI: true
        });
        this.map.setCenter({lat: +this.programa.latitud, lng: +this.programa.longitud});

        this.addMarker(latlng, 'Mark');

    }

    addMarker(latlng, label){
        var marker = new google.maps.Marker({
            position: latlng,
            map: this.map,
            title: label
        });
        this.markers.push(marker);

        return marker;
    }


    addFavs(){
        this.restProvider.addMark(this.id)
            .then(data => {
                const toast = this.toastCtrl.create({
                    message: 'Add in your Marks',
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                toast.present();
            })
    }


}
