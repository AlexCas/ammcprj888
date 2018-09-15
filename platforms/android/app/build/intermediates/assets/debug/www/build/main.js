webpackJsonp([13],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CongresosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CongresosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CongresosPage = /** @class */ (function () {
    function CongresosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CongresosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CongresosPage');
    };
    CongresosPage.prototype.searchForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    CongresosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-congresos',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/congresos/congresos.html"*/'\n<ion-content>\n  <ion-fab top right edge style="margin-top: 30px;">\n    <button menuToggle ion-fab color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n  </ion-fab>\n  <ion-fab bottom right edge style="margin-bottom: 30px;">\n    <button ion-fab color="primary" mini (click)="searchForm()"><ion-icon name="md-search"></ion-icon></button>\n  </ion-fab>\n  <div align="center" class="img-container">\n    <img class="img-icon" src="assets/imgs/congreso.svg" alt="" width="20%">\n    <h3 class="title-primary">CONGRESS 2018</h3>\n  </div>\n\n  <ion-card class="card-content-up">\n    <ion-card-content>\n      <img src="assets/imgs/congress.jpg" alt="">\n      <p style="margin-top: 10px; margin-bottom: 10px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eaque reiciendis quos eum, eveniet porro nisi deleniti sed accusantium quibusdam? Illo tenetur ipsum, alias explicabo officiis ipsam. Earum, neque, cupiditate.\n        Aut, soluta, sunt minus optio accusamus quibusdam maiores officia explicabo enim alias iusto delectus! Et officia ex unde amet laboriosam accusamus dolorum.\n        Ullam repellat eveniet numquam nisi ducimus esse mollitia impedit unde id dolore doloremque, tenetur repudiandae sapiente minima sed assumenda iste fugit nostrum.\n      </p>\n      <button ion-button full>More Info</button>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/congresos/congresos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CongresosPage);
    return CongresosPage;
}());

//# sourceMappingURL=congresos.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProgramsearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramsearchPage = /** @class */ (function () {
    function ProgramsearchPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.search = navParams.get('str');
        console.log(this.search);
        this.getProgram();
    }
    ProgramsearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramsearchPage');
    };
    ProgramsearchPage.prototype.getProgram = function () {
        var _this = this;
        this.restProvider.searchProgram(this.search)
            .then(function (data) {
            console.log(data);
            _this.programs = data;
        });
    };
    ProgramsearchPage.prototype.searchForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
    };
    ProgramsearchPage.prototype.tema = function (programa, ide) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */], {
            program: programa,
            id: ide
        });
    };
    ProgramsearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-programsearch',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/programsearch/programsearch.html"*/'<!--\n  Generated template for the ProgramsearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-searchbar placeholder="Buscar" (click)="searchForm()"></ion-searchbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item *ngFor="let program of programs">\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2>{{ program.nombre }}</h2>\n    <p>{{ program.descripcion }}</p>\n    <button ion-button clear item-end (click)="tema(program, program.id)">View</button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/programsearch/programsearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], ProgramsearchPage);
    return ProgramsearchPage;
}());

//# sourceMappingURL=programsearch.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotesPage = /** @class */ (function () {
    function NotesPage(navCtrl, navParams, restProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.toastCtrl = toastCtrl;
        this.id = navParams.get('id');
        this.getNotes();
    }
    NotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotesPage');
    };
    NotesPage.prototype.addNote = function () {
        var _this = this;
        this.restProvider.addNote(this.id, this.nota)
            .then(function (data) {
            if (data != null) {
                var toast = _this.toastCtrl.create({
                    message: 'Note Saved',
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                toast.present();
            }
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    NotesPage.prototype.sendNote = function () {
        var _this = this;
        this.restProvider.sendNotes(this.id)
            .then(function (data) {
            if (data != null) {
                var toast = _this.toastCtrl.create({
                    message: 'Notas Enviadas',
                    showCloseButton: true,
                    closeButtonText: 'Ok'
                });
                toast.present();
            }
        });
    };
    NotesPage.prototype.getNotes = function () {
        var _this = this;
        this.restProvider.getNotes(this.id)
            .then(function (data) {
            _this.notes = data;
        });
    };
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/notes/notes.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-searchbar placeholder="Buscar" (click)="searchForm()"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n  <ion-card-content>\n    <ion-list no-lines>\n      <ion-item ion-item *ngFor="let note of notes">\n        {{ note.notas }}\n      </ion-item>\n    </ion-list>\n    <br>\n      <ion-textarea cols="30" rows="10" placeholder="Escribe tus notas aquí" [(ngModel)]="nota"></ion-textarea>\n    <button ion-button full (click)="addNote()">Agregar</button>\n    <button ion-button full (click)="sendNote()">Enviar por Email</button>\n  </ion-card-content>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/notes/notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PonentessearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documentssearch_documentssearch__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PonentessearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PonentessearchPage = /** @class */ (function () {
    function PonentessearchPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.search = navParams.get('str');
        this.getPonentes();
    }
    PonentessearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PonentessearchPage');
    };
    PonentessearchPage.prototype.getPonentes = function () {
        var _this = this;
        this.restProvider.searchPonente(this.search)
            .then(function (data) {
            console.log(data);
            _this.ponentes = data;
        });
    };
    PonentessearchPage.prototype.getProgramponente = function (ponente) {
        var _this = this;
        this.restProvider.getProgramaponente(ponente)
            .then(function (data) {
            console.log(data);
            _this.ponentepro = data;
            console.log('PonentePrograma');
            console.log(data);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__documentssearch_documentssearch__["a" /* DocumentssearchPage */], {
                programa: data
            });
        });
    };
    PonentessearchPage.prototype.searchForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    PonentessearchPage.prototype.ponentee = function (ponente) {
        this.getProgramponente(ponente);
    };
    PonentessearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ponentessearch',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/ponentessearch/ponentessearch.html"*/'<!--\n  Generated template for the ProgramsearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-searchbar (click)="searchForm()"></ion-searchbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item *ngFor="let ponente of ponentes">\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2>{{ ponente.nombre }}</h2>\n    <p>{{ ponente.especialidad }}</p>\n    <button ion-button clear item-end (click)="ponentee(ponente.id)">View</button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/ponentessearch/ponentessearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
    ], PonentessearchPage);
    return PonentessearchPage;
}());

//# sourceMappingURL=ponentessearch.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentssearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DocumentssearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocumentssearchPage = /** @class */ (function () {
    function DocumentssearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.programa = navParams.get('programa');
        console.log('Hi');
        console.log(this.programa);
    }
    DocumentssearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentssearchPage');
    };
    DocumentssearchPage.prototype.searchForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    DocumentssearchPage.prototype.tema = function (programa, ide) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */], {
            program: programa,
            id: ide
        });
    };
    DocumentssearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documentssearch',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/documentssearch/documentssearch.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <button menuToggle ion-button color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n    <ion-searchbar placeholder="Buscar" (click)="searchForm()"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngFor="let pro of programa">\n    <ion-card style="margin: 0px !important; width: 100% !important;" (click)="tema(pro, pro.id)">\n      <img style="height:220px;" src="{{ pro.image }}"/>\n      <div class="card-title" style="padding: 5px; background: #0000005e; font-size: 14px">{{ pro.nombre }}</div>\n      <div class="card-subtitle" style="background: #0000005e;">\n        <p class="subtitle" style="color: white !mportant">\n          <ion-icon name="md-contact"></ion-icon> <strong>{{ pro.ponente }}</strong>\n        </p>\n        <p class="subtitle" style="color: white !mportant">\n          <ion-icon name="md-calendar"></ion-icon> <strong>{{ pro.fecha }} - {{ pro.hora }}</strong>\n        </p>\n        <p class="subtitle">\n          <ion-icon name="md-leaf"></ion-icon> <strong>{{ pro.congreso }}</strong>\n        </p>\n      </div>\n    </ion-card>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/documentssearch/documentssearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DocumentssearchPage);
    return DocumentssearchPage;
}());

//# sourceMappingURL=documentssearch.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DocumentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocumentosPage = /** @class */ (function () {
    function DocumentosPage(navCtrl, navParams, restProvider, browser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.browser = browser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        var search = navParams.get('str');
        this.search_input = search;
        this.searchDocs();
        //this.getDocumentos();
    }
    DocumentosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentosPage');
    };
    DocumentosPage.prototype.getDocumentos = function () {
        var _this = this;
        this.restProvider.getDocumentos()
            .then(function (data) {
            _this.documentos = data;
        });
    };
    DocumentosPage.prototype.searchDocs = function () {
        var _this = this;
        this.restProvider.searchDocuments(this.search_input)
            .then(function (data) {
            _this.documentos = data;
        });
    };
    DocumentosPage.prototype.openDoc = function (url) {
        var target = "_system";
        this.browser.create(url, target, this.options);
    };
    DocumentosPage.prototype.search = function () {
        this.searchDocs();
    };
    DocumentosPage.prototype.searchForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    DocumentosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documentos',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/documentos/documentos.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-searchbar placeholder="Buscar" (click)="searchForm()"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-list no-lines>\n\n        <div>\n          <ion-item *ngFor="let doc of documentos">\n            <ion-thumbnail item-start>\n              <img src="assets/imgs/book.png">\n            </ion-thumbnail>\n            <h2>{{ doc.nombre }}</h2>\n            <p>{{ doc.descripcion }}</p>\n            <button ion-button clear item-end (click)="openDoc(doc.url)">Ir</button>\n          </ion-item>\n        </div>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/documentos/documentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], DocumentosPage);
    return DocumentosPage;
}());

//# sourceMappingURL=documentos.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactoPage = /** @class */ (function () {
    function ContactoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactoPage');
    };
    ContactoPage.prototype.searchForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    ContactoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacto',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/contacto/contacto.html"*/'\n<ion-header>\n  <ion-toolbar color="primary">\n    <button menuToggle ion-button color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n    <ion-searchbar placeholder="Buscar" (click)="searchForm()"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content align="center">\n  <img src="assets/imgs/logoammac.png" alt="" style="width: 70%; margin-top: 20px">\n  <ion-card class="card-content-up">\n    <ion-card-content>\n      <ion-list no-lines>\n        <a href="mailto:ammac.presidencia@gmail.com" ion-item>\n          <strong>Email:</strong> ammac.presidencia@gmail.com\n        </a>\n        <a href="tel:999 271 1901" ion-item>\n          <strong>Mérida:</strong> 999 271 1901\n        </a>\n        <a href="tel:228 847 1512" ion-item>\n          <strong>Xalapa:</strong> 228 847 1512\n        </a>\n        <a href="tel:552 757 3226" ion-item>\n          <strong>CDMX:</strong> 552 757 3226\n        </a>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/contacto/contacto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ContactoPage);
    return ContactoPage;
}());

//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PartnersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PartnersPage = /** @class */ (function () {
    function PartnersPage(navCtrl, navParams, restProvider, browser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.browser = browser;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.getPatrocinadores();
    }
    PartnersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartnersPage');
    };
    PartnersPage.prototype.getPatrocinadores = function () {
        var _this = this;
        this.restProvider.getPatrocinadores()
            .then(function (data) {
            console.log(data);
            _this.patrocinadores = data;
        });
    };
    PartnersPage.prototype.openWeb = function (url) {
        var target = "_system";
        this.browser.create(url, target, this.options);
    };
    PartnersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-partners',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/partners/partners.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <button menuToggle ion-button color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n    <ion-searchbar placeholder="Buscar" (click)="searchForm()"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card *ngFor="let pat of patrocinadores">\n    <img src="{{ pat.logo }}"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{ pat.nombre }}\n        </ion-card-title>\n      <p>\n        {{ pat.descripcion }}\n      </p>\n      <button ion-button full (click)="openWeb(pat.website)">Ir al WebSite</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/partners/partners.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], PartnersPage);
    return PartnersPage;
}());

//# sourceMappingURL=partners.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProgramaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramaPage = /** @class */ (function () {
    function ProgramaPage(navCtrl, navParams, restProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.storage = storage;
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: this.selectedDay
        };
        // this.programa = this.createRandomEvents();
    }
    ProgramaPage.prototype.onEventSelected = function (event) {
        console.log(event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */], {
            program: event.program,
            id: event.id
        });
    };
    ProgramaPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    ProgramaPage.prototype.onTimeSelected = function () {
    };
    ProgramaPage.prototype.getLast = function (table, date) {
        var _this = this;
        this.restProvider.getLastupdate(table, date)
            .then(function (data) {
            _this.last = data;
            console.log(_this.last);
            if (_this.last.update == 'true') {
                _this.getToday();
            }
            else {
                _this.storage.get('programa').then(function (val) {
                    _this.today = val;
                    var events = [];
                    for (var i = 0; _this.today.length > i; i++) {
                        var ev = { title: '', startTime: null, endTime: null, program: Object, id: 0, allDay: false, param: 9 };
                        ev.title = _this.today[i]['nombre'];
                        ev.startTime = new Date(_this.today[i]['fecha'] + ' ' + _this.today[i]['hora']);
                        ev.endTime = new Date(_this.today[i]['fecha'] + ' ' + _this.today[i]['hora_final']);
                        ev.program = _this.today[i];
                        ev.id = _this.today[i]['id'];
                        events[i] = ev;
                    }
                    _this.programa = events;
                    console.log(_this.programa);
                });
            }
        });
    };
    ProgramaPage.prototype.getDate = function () {
        var _this = this;
        this.restProvider.getDate()
            .then(function (data) {
            _this.date = data;
            console.log(_this.date);
            _this.storage.get('lastupdate').then(function (val) {
                console.log(val.date);
                _this.getLast(1, val.date);
            });
        });
    };
    ProgramaPage.prototype.setDate = function () {
        var _this = this;
        this.restProvider.getDate()
            .then(function (data) {
            console.log(data);
            _this.storage.set('lastupdate', data);
        });
    };
    ProgramaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ProgramaPage');
        this.storage.get('programa').then(function (val) {
            console.log(val);
            if (!val) {
                console.log('no');
                _this.getToday();
            }
            else {
                console.log('si');
                _this.getDate();
            }
        });
    };
    ProgramaPage.prototype.getToday = function () {
        var _this = this;
        this.restProvider.getToday()
            .then(function (data) {
            _this.today = data;
            _this.storage.set('programa', data);
            _this.setDate();
            var events = [];
            _this.today = data;
            for (var i = 0; _this.today.length > i; i++) {
                console.log(_this.today[i]);
                var ev = { title: '', startTime: null, endTime: null, program: Object, id: 0, allDay: false, param: 9 };
                ev.title = _this.today[i]['nombre'];
                ev.startTime = new Date(_this.today[i]['fecha'] + ' ' + _this.today[i]['hora']);
                ev.endTime = new Date(_this.today[i]['fecha'] + ' ' + _this.today[i]['hora_final']);
                ev.program = _this.today[i];
                ev.id = _this.today[i]['id'];
                events[i] = ev;
            }
            _this.programa = events;
        });
    };
    ProgramaPage.prototype.tema = function (programa, ide) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */], {
            program: programa,
            id: ide
        });
    };
    ProgramaPage.prototype.searchForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    ProgramaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-programa',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/programa/programa.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <button menuToggle ion-button color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n    <ion-searchbar placeholder="Buscar" (click)="searchForm()"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h3 align="center">{{ viewTitle }}</h3>\n  <calendar [eventSource]="programa"\n  [calendarMode]="calendar.mode"\n  [currentDate]="calendar.currentDate"\n  (onEventSelected)="onEventSelected($event)"\n  (onTitleChanged)="onViewTitleChanged($event)"\n  (onTimeSelected)="onTimeSelected($event)"\n  step="30"\n  class="calendar">\n  </calendar>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/programa/programa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], ProgramaPage);
    return ProgramaPage;
}());

//# sourceMappingURL=programa.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programsearch_programsearch__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ponentessearch_ponentessearch__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documentos_documentos__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.category = null;
        this.strsearch = null;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.search = function () {
        if (this.category != null && this.strsearch != null) {
            if (this.category == 1) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__programsearch_programsearch__["a" /* ProgramsearchPage */], {
                    str: this.strsearch
                });
            }
            else if (this.category == 2) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ponentessearch_ponentessearch__["a" /* PonentessearchPage */], {
                    str: this.strsearch
                });
            }
            else if (this.category == 3) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__documentos_documentos__["a" /* DocumentosPage */], {
                    str: this.strsearch
                });
            }
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Category or Search input can not be blank',
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
        }
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/search/search.html"*/'\n<ion-content>\n  <ion-fab bottom left edge style="margin-bottom: 30px;">\n    <button navPop ion-fab color="primary" mini><ion-icon name="ios-arrow-back"></ion-icon></button>\n  </ion-fab>\n\n\n      <ion-list no-lines style="margin-top: 200px;">\n        <ion-item class="select-nolines">\n          <ion-label>Selecciona una Categoria</ion-label>\n          <ion-select [(ngModel)]="category" interface="action-sheet">\n            <ion-option value="1">Programa</ion-option>\n            <ion-option value="2">Ponentes</ion-option>\n            <ion-option value="3">Documentos</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item margin-top="30px;">\n          <ion-label stacked>¿Qué deseas buscar?</ion-label>\n          <ion-input placeholder="Type your search..." type="text" [(ngModel)]="strsearch"></ion-input>\n        </ion-item>\n      </ion-list>\n    <button ion-button full color="light" (click)="search()">Buscar</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    //url = 'http://www.ammacadmin.local/api/';
    function RestProvider(http, device) {
        this.http = http;
        this.device = device;
        this.url = 'http://app.mastozoologiamexicana.com/api/';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getDocumentos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'getdocumentos').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getLastupdate = function (table, date) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'getlastupdate/' + table + '/' + date).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getDate = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'getdate').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.searchDocuments = function (search) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'searchdocuments?search=' + search).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.searchProgram = function (search) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'searchprogram?search=' + search).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.searchPonente = function (search) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'searchponente?search=' + search).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getProgramaponente = function (ponente) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'searchprogramponente?ponente=' + ponente).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.sendNotes = function (programa) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'sendnotes/' + _this.device.uuid + '/' + programa).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getPrograma = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'getprograma').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getToday = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'getprogramatoday').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getDocprogram = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'getdocumentosprogram?id=' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.addMark = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'addmark?device=' + _this.device.uuid + '&id=' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getMarks = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'getmarks?device=' + _this.device.uuid).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.setAsistente = function (nombre, notifications, email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'setasistente?device=' + _this.device.uuid + '&nombre=' + nombre + '&notifications=' + notifications + '&email=' + email).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getAsistente = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'getasistente?device=' + _this.device.uuid).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getPatrocinadores = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'getpatrocinadores').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.addNote = function (programa, notas) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'addnote?device=' + _this.device.uuid + '&programa=' + programa + '&notas=' + notas).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getNotes = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'getnotes?device=' + _this.device.uuid + '&id=' + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/congresos/congresos.module": [
		309,
		12
	],
	"../pages/contacto/contacto.module": [
		310,
		11
	],
	"../pages/documentos/documentos.module": [
		311,
		10
	],
	"../pages/documentssearch/documentssearch.module": [
		312,
		9
	],
	"../pages/intereses/intereses.module": [
		313,
		8
	],
	"../pages/notes/notes.module": [
		315,
		7
	],
	"../pages/partners/partners.module": [
		314,
		6
	],
	"../pages/perfil/perfil.module": [
		316,
		5
	],
	"../pages/ponentessearch/ponentessearch.module": [
		317,
		4
	],
	"../pages/programa/programa.module": [
		318,
		3
	],
	"../pages/programsearch/programsearch.module": [
		319,
		2
	],
	"../pages/search/search.module": [
		320,
		1
	],
	"../pages/tabs/tabs.module": [
		321,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__intereses_intereses__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__perfil_perfil__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__congresos_congresos__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_4__intereses_intereses__["a" /* InteresesPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_5__perfil_perfil__["a" /* PerfilPage */];
        this.tab5 = __WEBPACK_IMPORTED_MODULE_6__congresos_congresos__["a" /* CongresosPage */];
        this.page = navParams.get('page');
        if (this.page == 'congress') {
            this.navCtrl.parent.select(1);
        }
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/tabs/tabs.html"*/'  <ion-tabs [selectedIndex]="4">\n    <ion-tab tabIcon="md-home" tabTitle="Home" [root]="tab1"></ion-tab>\n    <ion-tab tabIcon="md-search" tabTitle="Search" [root]="tab2"></ion-tab>\n    <ion-tab tabIcon="md-bookmark" tabTitle="Marks" [root]="tab3"></ion-tab>\n    <ion-tab tabIcon="md-person" tabTitle="User" [root]="tab4"></ion-tab>\n  </ion-tabs>`\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_congresos_congresos__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_programa_programa__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_documentos_documentos__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_intereses_intereses__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_partners_partners__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contacto_contacto__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_notes_notes__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_programsearch_programsearch__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ponentessearch_ponentessearch__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_documentssearch_documentssearch__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_device__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic2_calendar__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_storage__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_congresos_congresos__["a" /* CongresosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_programa_programa__["a" /* ProgramaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_documentos_documentos__["a" /* DocumentosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_intereses_intereses__["a" /* InteresesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contacto_contacto__["a" /* ContactoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_partners_partners__["a" /* PartnersPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_programsearch_programsearch__["a" /* ProgramsearchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ponentessearch_ponentessearch__["a" /* PonentessearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_documentssearch_documentssearch__["a" /* DocumentssearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/congresos/congresos.module#CongresosPageModule', name: 'CongresosPage', segment: 'congresos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacto/contacto.module#ContactoPageModule', name: 'ContactoPage', segment: 'contacto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/documentos/documentos.module#DocumentosPageModule', name: 'DocumentosPage', segment: 'documentos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/documentssearch/documentssearch.module#DocumentssearchPageModule', name: 'DocumentssearchPage', segment: 'documentssearch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intereses/intereses.module#InteresesPageModule', name: 'InteresesPage', segment: 'intereses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/partners/partners.module#PartnersPageModule', name: 'PartnersPage', segment: 'partners', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notes/notes.module#NotesPageModule', name: 'NotesPage', segment: 'notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ponentessearch/ponentessearch.module#PonentessearchPageModule', name: 'PonentessearchPage', segment: 'ponentessearch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/programa/programa.module#ProgramaPageModule', name: 'ProgramaPage', segment: 'programa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/programsearch/programsearch.module#ProgramsearchPageModule', name: 'ProgramsearchPage', segment: 'programsearch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_congresos_congresos__["a" /* CongresosPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_programa_programa__["a" /* ProgramaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_documentos_documentos__["a" /* DocumentosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_intereses_intereses__["a" /* InteresesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_contacto_contacto__["a" /* ContactoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_partners_partners__["a" /* PartnersPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_programsearch_programsearch__["a" /* ProgramsearchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_ponentessearch_ponentessearch__["a" /* PonentessearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_documentssearch_documentssearch__["a" /* DocumentssearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_device__["a" /* Device */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_programa_programa__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_intereses_intereses__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contacto_contacto__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_partners_partners__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'md-home', page: 'congress' },
            { title: 'Patrocinadores', component: __WEBPACK_IMPORTED_MODULE_9__pages_partners_partners__["a" /* PartnersPage */], icon: 'md-list-box', page: 'congress' },
            { title: 'Programa', component: __WEBPACK_IMPORTED_MODULE_5__pages_programa_programa__["a" /* ProgramaPage */], icon: 'md-list', page: 'program' },
            { title: 'Marcas', component: __WEBPACK_IMPORTED_MODULE_6__pages_intereses_intereses__["a" /* InteresesPage */], icon: 'md-bookmark', page: 'congress' },
            { title: 'Configuración', component: __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__["a" /* PerfilPage */], icon: 'md-cog', page: 'congress' },
            { title: 'Contacto', component: __WEBPACK_IMPORTED_MODULE_8__pages_contacto_contacto__["a" /* ContactoPage */], icon: 'md-contacts', page: 'contact' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.backgroundColorByHexString('#53b9a6');
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page, par) {
        this.nav.setRoot(page.component, {
            'page': par,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-content style="top:0px !important;" class="side-menu-left side-menu-gradient">\n    <div class="spacer" style="width: 268px; height: 24px;"></div>\n    <div class="profile-image">\n      <img src="assets/imgs/user.png" style="display: block; width: 40%; height: auto; margin-left: auto; margin-right: auto;">\n    </div>\n    <div class="spacer" style=" color:#313131; width: 268px; height: 19px;"></div>\n    <ion-list id="menu-list1" no-lines style="font-weight:250;">\n      <ion-item menuClose ion-item *ngFor="let p of pages" (click)="openPage(p, p.page)" class="side-menu-item" style="margin:10px;">\n        <ion-icon name="{{p.icon}}"></ion-icon>\n        {{p.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notes_notes__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, restProvider, browser, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.browser = browser;
        this.toastCtrl = toastCtrl;
        this.markers = [];
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        this.programa = navParams.get('program');
        console.log(this.programa);
        this.id = navParams.get('id');
        console.log(this.id);
        this.getDocprogram();
    }
    ListPage.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    ListPage.prototype.getDocprogram = function () {
        var _this = this;
        this.restProvider.getDocprogram(this.id)
            .then(function (data) {
            _this.documentos = data;
        });
    };
    ListPage.prototype.searchForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
    };
    ListPage.prototype.openDoc = function (url) {
        var target = "_system";
        this.browser.create(url, target, this.options);
    };
    ListPage.prototype.openNotes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__notes_notes__["a" /* NotesPage */], {
            id: this.id,
        });
    };
    ListPage.prototype.initMap = function () {
        var latlng = new google.maps.LatLng(+this.programa.latitud, +this.programa.longitud);
        console.log(latlng);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            center: latlng,
            mapTypeId: 'roadmap',
            disableDefaultUI: true
        });
        this.map.setCenter({ lat: +this.programa.latitud, lng: +this.programa.longitud });
        this.addMarker(latlng, 'Mark');
    };
    ListPage.prototype.addMarker = function (latlng, label) {
        var marker = new google.maps.Marker({
            position: latlng,
            map: this.map,
            title: label
        });
        this.markers.push(marker);
        return marker;
    };
    ListPage.prototype.addFavs = function () {
        var _this = this;
        this.restProvider.addMark(this.id)
            .then(function (data) {
            var toast = _this.toastCtrl.create({
                message: 'Add in your Marks',
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ListPage.prototype, "mapElement", void 0);
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/list/list.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <button menuToggle ion-button color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n      <ion-searchbar placeholder="Buscar" (click)="searchForm()"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card style="margin: 0px !important; width: 100% !important;">\n    <img style="height:220px;" src="{{ programa.image }}"/>\n    <div class="card-title" style="padding: 5px; background: #0000005e; font-size: 14px">{{ programa.nombre }}</div>\n    <div class="card-subtitle" style="background: #0000005e;">\n      <p class="subtitle" style="color: white !mportant">\n        <ion-icon name="md-contact"></ion-icon> <strong>{{ programa.ponente }}</strong>\n      </p>\n      <p class="subtitle" style="color: white !mportant">\n        <ion-icon name="md-calendar"></ion-icon> <strong>{{ programa.fecha }} - {{ programa.hora }}</strong>\n      </p>\n      <p class="subtitle">\n        <ion-icon name="md-leaf"></ion-icon> <strong>{{ programa.congreso }}</strong>\n      </p>\n        <p class="subtitle">\n            <ion-icon name="md-leaf"></ion-icon> <strong>{{ programa.salon }}</strong>\n        </p>\n    </div>\n  </ion-card>\n  <ion-card>\n\n  <ion-card-header>\n    Descripción\n  </ion-card-header>\n\n  <ion-card-content>\n    {{ programa.descripcion }}\n  </ion-card-content>\n\n</ion-card>\n  <ion-item *ngFor="let doc of documentos" no-lines>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2>{{ doc.nombre }}</h2>\n    <p>{{ doc.descripcion }}</p>\n    <button ion-button clear item-end (click)="openDoc(doc.url)">View</button>\n  </ion-item>\n  <div #map id="map"></div>\n  <ion-fab right top>\n      <button ion-fab mini color="primary"><ion-icon name="arrow-dropdown"></ion-icon></button>\n      <ion-fab-list side="bottom">\n        <button ion-fab (click)="addFavs()"><ion-icon name="md-star"></ion-icon></button>\n        <button ion-fab (click)="openNotes()"><ion-icon name="md-copy"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, restProvider, storage, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        storage.get('programa').then(function (val) {
            console.log(val);
            if (!val) {
                console.log('no');
                _this.getHome();
            }
            else {
                console.log('si');
                _this.getDate();
            }
        });
        //this.getHome();
    }
    HomePage.prototype.getHome = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Espere mientras se descarga la información..."
        });
        loader.present();
        this.restProvider.getPrograma()
            .then(function (data) {
            loader.dismiss();
            _this.programa = data;
            _this.storage.set('programa', data);
            _this.setDate();
        });
    };
    HomePage.prototype.getLast = function (table, date) {
        var _this = this;
        this.restProvider.getLastupdate(table, date)
            .then(function (data) {
            _this.last = data;
            console.log(_this.last);
            if (_this.last.update == 'true') {
                _this.getHome();
            }
            else {
                _this.storage.get('programa').then(function (val) {
                    _this.programa = val;
                });
            }
        });
    };
    HomePage.prototype.getDate = function () {
        var _this = this;
        this.restProvider.getDate()
            .then(function (data) {
            _this.date = data;
            console.log(_this.date);
            _this.storage.get('lastupdate').then(function (val) {
                console.log(val.date);
                _this.getLast(1, val.date);
            });
        });
    };
    HomePage.prototype.setDate = function () {
        var _this = this;
        this.restProvider.getDate()
            .then(function (data) {
            console.log(data);
            _this.storage.set('lastupdate', data);
        });
    };
    HomePage.prototype.searchForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.tema = function (programa, ide) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */], {
            program: programa,
            id: ide
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <button menuToggle ion-button color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n    <ion-searchbar placeholder="Buscar" (click)="searchForm()"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div *ngFor="let pro of programa">\n  <ion-card style="margin: 0px !important; width: 100% !important;" (click)="tema(pro, pro.id)">\n    <img style="height:220px;" src="{{ pro.image }}"/>\n    <div class="card-title" style="padding: 5px; background: #0000005e; font-size: 14px">{{ pro.nombre }}</div>\n    <div class="card-subtitle" style="background: #0000005e;">\n      <p class="subtitle" style="color: white !mportant">\n        <ion-icon name="md-contact"></ion-icon> <strong>{{ pro.ponente }}</strong>\n      </p>\n      <p class="subtitle" style="color: white !mportant">\n        <ion-icon name="md-calendar"></ion-icon> <strong>{{ pro.fecha }} - {{ pro.hora }}</strong>\n      </p>\n      <p class="subtitle">\n        <ion-icon name="md-leaf"></ion-icon> <strong>{{ pro.congreso }}</strong>\n      </p>\n    </div>\n  </ion-card>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteresesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the InteresesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InteresesPage = /** @class */ (function () {
    function InteresesPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.getMarks();
    }
    InteresesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InteresesPage');
    };
    InteresesPage.prototype.searchForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    InteresesPage.prototype.getMarks = function () {
        var _this = this;
        this.restProvider.getMarks()
            .then(function (data) {
            _this.items = data;
            console.log(data);
        });
    };
    InteresesPage.prototype.gopage = function (item) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */], {
            program: item.programa,
            id: item.id
        });
    };
    InteresesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intereses',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/intereses/intereses.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <button menuToggle ion-button color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n    <ion-searchbar placeholder="Buscar" (click)="searchForm()"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card style="margin: 0px !important; width: 100% !important;" (click)="gopage(pro)" *ngFor="let pro of items">\n    <img style="height:220px;" src="{{ pro.programa.image }}"/>\n    <div class="card-title" style="padding: 5px; background: #0000005e; font-size: 14px">{{ pro.programa.nombre }}</div>\n    <div class="card-subtitle" style="background: #0000005e;">\n      <p class="subtitle" style="color: white !mportant">\n        <ion-icon name="md-contact"></ion-icon> <strong>{{ pro.programa.ponente }}</strong>\n      </p>\n      <p class="subtitle" style="color: white !mportant">\n        <ion-icon name="md-calendar"></ion-icon> <strong>{{ pro.programa.fecha }} - {{ pro.programa.hora }}</strong>\n      </p>\n      <p class="subtitle">\n        <ion-icon name="md-leaf"></ion-icon> <strong>{{ pro.programa.congreso }}</strong>\n      </p>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/intereses/intereses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
    ], InteresesPage);
    return InteresesPage;
}());

//# sourceMappingURL=intereses.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, restProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.toastCtrl = toastCtrl;
        this.getAsistente();
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.save = function () {
        var _this = this;
        this.restProvider.setAsistente(this.nombre, this.notifications, this.email)
            .then(function (data) {
            var toast = _this.toastCtrl.create({
                message: 'Info Saved',
                showCloseButton: true,
                closeButtonText: 'Ok'
            });
            toast.present();
        });
    };
    PerfilPage.prototype.searchForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    PerfilPage.prototype.getAsistente = function () {
        var _this = this;
        this.restProvider.getAsistente()
            .then(function (data) {
            _this.asistente = data;
            if (data != null) {
                _this.nombre = _this.asistente.nombre;
                _this.notifications = _this.asistente.notifications;
                _this.email = _this.asistente.email;
            }
        });
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/perfil/perfil.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <button menuToggle ion-button color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n    <ion-searchbar placeholder="Buscar" (click)="searchForm()"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list no-lines style="margin-top: 170px;">\n  <ion-item>\n    <ion-label floating>Nombre Completo</ion-label>\n    <ion-input type="text" [(ngModel)]="nombre"></ion-input>\n  </ion-item>\n    <ion-item>\n      <ion-label floating>Correo</ion-label>\n      <ion-input type="text" [(ngModel)]="email"></ion-input>\n    </ion-item>\n  <ion-item>\n    <ion-label floating>Notificaciones</ion-label>\n    <ion-select [(ngModel)]="notifications" interface="action-sheet">\n      <ion-option value="1">Habilitadas</ion-option>\n      <ion-option value="2">Deshabilitadas</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n<button ion-button full color="light" (click)="save()">Guardar</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map