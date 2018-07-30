webpackJsonp([13],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CongresosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(16);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CongresosPage);
    return CongresosPage;
}());

//# sourceMappingURL=congresos.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function ProgramsearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProgramsearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramsearchPage');
    };
    ProgramsearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-programsearch',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/programsearch/programsearch.html"*/'<!--\n  Generated template for the ProgramsearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>programsearch</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/programsearch/programsearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProgramsearchPage);
    return ProgramsearchPage;
}());

//# sourceMappingURL=programsearch.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PonentessearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function PonentessearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PonentessearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PonentessearchPage');
    };
    PonentessearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ponentessearch',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/ponentessearch/ponentessearch.html"*/'<!--\n  Generated template for the PonentessearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ponentessearch</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/ponentessearch/ponentessearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PonentessearchPage);
    return PonentessearchPage;
}());

//# sourceMappingURL=ponentessearch.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentssearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    }
    DocumentssearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentssearchPage');
    };
    DocumentssearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documentssearch',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/documentssearch/documentssearch.html"*/'<!--\n  Generated template for the DocumentssearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>documentssearch</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/documentssearch/documentssearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DocumentssearchPage);
    return DocumentssearchPage;
}());

//# sourceMappingURL=documentssearch.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(16);
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
            selector: 'page-contacto',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/contacto/contacto.html"*/'\n<ion-content>\n  <ion-fab top right edge style="margin-top: 30px;">\n    <button menuToggle ion-fab color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n  </ion-fab>\n  <ion-fab bottom right edge style="margin-bottom: 30px;">\n    <button ion-fab color="primary" mini (click)="searchForm()"><ion-icon name="md-search"></ion-icon></button>\n  </ion-fab>\n  <div align="center" class="img-container">\n    <img class="img-icon" src="assets/imgs/contacto.svg" alt="" width="20%">\n    <h3 class="title-primary">CONTACT</h3>\n  </div>\n\n  <ion-card class="card-content-up">\n    <ion-card-content>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis praesentium omnis excepturi, nihil dicta ullam a facilis minus sed deserunt quasi, architecto explicabo soluta est, ea sunt magnam hic odit.</p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/contacto/contacto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactoPage);
    return ContactoPage;
}());

//# sourceMappingURL=contacto.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(16);
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
        this.getDocumentos();
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
            selector: 'page-documentos',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/documentos/documentos.html"*/'\n<ion-content>\n  <ion-fab top right edge style="margin-top: 30px;">\n    <button menuToggle ion-fab color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n  </ion-fab>\n  <ion-fab bottom right edge style="margin-bottom: 30px;">\n    <button ion-fab color="primary" mini (click)="searchForm()"><ion-icon name="md-search"></ion-icon></button>\n  </ion-fab>\n  <div align="center" class="img-container">\n    <img class="img-icon" src="assets/imgs/documento.svg" alt="" width="20%">\n    <h3 class="title-primary">DOCUMENTS</h3>\n  </div>\n\n  <ion-card class="card-content-up">\n    <ion-card-content>\n      <ion-list no-lines>\n        <ion-item>\n          <ion-label floating>Type your search...</ion-label>\n          <ion-input type="text" (ionChange)="search()" [(ngModel)]="search_input"></ion-input>\n        </ion-item>\n        <br>\n        <div>\n          <ion-item *ngFor="let doc of documentos">\n            <ion-thumbnail item-start>\n              <img src="assets/imgs/book.png">\n            </ion-thumbnail>\n            <h2>{{ doc.nombre }}</h2>\n            <p>{{ doc.descripcion }}</p>\n            <button ion-button clear item-end (click)="openDoc(doc.url)">View</button>\n          </ion-item>\n        </div>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/documentos/documentos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], DocumentosPage);
    return DocumentosPage;
}());

//# sourceMappingURL=documentos.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(50);
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
    NotesPage.prototype.getNotes = function () {
        var _this = this;
        this.restProvider.getNotes(this.id)
            .then(function (data) {
            _this.notes = data;
        });
    };
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/notes/notes.html"*/'\n<ion-content>\n  <ion-fab top right edge style="margin-top: 30px;">\n    <button menuToggle ion-fab color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n  </ion-fab>\n  <ion-fab bottom left edge style="margin-bottom: 30px;">\n    <button navPop ion-fab color="primary" mini><ion-icon name="ios-arrow-back"></ion-icon></button>\n  </ion-fab>\n\n  <div align="center" class="img-container">\n    <img class="img-icon" src="assets/imgs/notes.svg" alt="" width="20%">\n    <h3 class="title-primary">NOTES</h3>\n  </div>\n\n  <ion-card class="card-content-up">\n  <ion-card-content>\n    <ion-list no-lines>\n      <button ion-item *ngFor="let note of notes">\n        {{ note.notas }}\n      </button>\n    </ion-list>\n    <br>\n      <ion-textarea cols="30" rows="10" placeholder="Nueva Nota" [(ngModel)]="nota"></ion-textarea>\n    <button ion-button full (click)="addNote()">Agregar Nota</button>\n  </ion-card-content>\n</ion-card>\n<!-- <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n<ion-list>\n  <ion-item *ngFor="let item of items">\n    {{ item }}\n  </ion-item>\n</ion-list> -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/notes/notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function PartnersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PartnersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PartnersPage');
    };
    PartnersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-partners',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/partners/partners.html"*/'\n<ion-content>\n  <ion-fab top right edge style="margin-top: 30px;">\n    <button menuToggle ion-fab color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n  </ion-fab>\n  <ion-fab bottom right edge style="margin-bottom: 30px;">\n    <button ion-fab color="primary" mini (click)="searchForm()"><ion-icon name="md-search"></ion-icon></button>\n  </ion-fab>\n  <div align="center" class="img-container">\n    <img class="img-icon" src="assets/imgs/partners.svg" alt="" width="20%">\n    <h3 class="title-primary">Partners</h3>\n  </div>\n\n  <ion-card class="card-content-up">\n    <ion-card-content>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/partners/partners.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PartnersPage);
    return PartnersPage;
}());

//# sourceMappingURL=partners.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(16);
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
    function ProgramaPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.getToday();
        console.log(this.programa);
    }
    ProgramaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgramaPage');
    };
    ProgramaPage.prototype.getToday = function () {
        var _this = this;
        this.restProvider.getToday()
            .then(function (data) {
            _this.programa = data;
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
            selector: 'page-programa',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/programa/programa.html"*/'\n<ion-content>\n  <ion-fab top right edge style="margin-top: 30px;">\n    <button menuToggle ion-fab color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n  </ion-fab>\n  <ion-fab bottom right edge style="margin-bottom: 30px;">\n    <button ion-fab color="primary" mini (click)="searchForm()"><ion-icon name="md-search"></ion-icon></button>\n  </ion-fab>\n  <div align="center" class="img-container">\n    <img class="img-icon" src="assets/imgs/programa.svg" alt="" width="20%">\n    <h3 class="title-primary">PROGRAM</h3>\n  </div>\n\n  <ion-card class="card-content-up">\n    <ion-card-content>\n      <ion-list no-lines>\n\n        <ion-list-header>Today</ion-list-header>\n        <div *ngFor="let pro of programa">\n          <ion-item *ngIf="pro.today == 1">\n            <ion-avatar item-start>\n              <img src="{{pro.image}}">\n            </ion-avatar>\n            <h2>{{pro.id}} {{pro.nombre}}</h2>\n            <p>{{pro.ponente}}</p>\n            <ion-note item-end>{{ pro.fecha }} - {{ pro.hora }}</ion-note>\n          </ion-item>\n        </div>\n\n      </ion-list>\n\n      <ion-list no-lines>\n\n        <ion-list-header>Upcoming Events</ion-list-header>\n\n        <div *ngFor="let pro of programa">\n          <ion-item *ngIf="pro.today == 0" (click)="tema(pro, pro.id)">\n            <ion-avatar item-start>\n              <img src="{{pro.image}}">\n            </ion-avatar>\n            <h2>{{pro.nombre}}</h2>\n            <p>{{pro.ponente}} - {{ pro.fecha }}</p>\n          </ion-item>\n        </div>\n\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/programa/programa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], ProgramaPage);
    return ProgramaPage;
}());

//# sourceMappingURL=programa.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__programsearch_programsearch__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ponentessearch_ponentessearch__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documentssearch_documentssearch__ = __webpack_require__(110);
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
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__documentssearch_documentssearch__["a" /* DocumentssearchPage */], {
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
            selector: 'page-search',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/search/search.html"*/'\n<ion-content>\n  <ion-fab bottom left edge style="margin-bottom: 30px;">\n    <button navPop ion-fab color="primary" mini><ion-icon name="ios-arrow-back"></ion-icon></button>\n  </ion-fab>\n\n  <div align="center" class="img-container">\n    <img class="img-icon" src="assets/imgs/lupa.svg" alt="" width="20%">\n    <h3 class="title-primary">SEARCH</h3>\n  </div>\n\n  <ion-card class="card-content-up">\n    <ion-card-content>\n      <ion-list no-lines>\n        <ion-item class="select-nolines">\n          <ion-label>Select a Category</ion-label>\n          <ion-select [(ngModel)]="category" interface="action-sheet">\n            <ion-option value="1">Program</ion-option>\n            <ion-option value="2">Exhibitors</ion-option>\n            <ion-option value="3">Documents</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item margin-top="30px;">\n          <ion-label stacked>What do you want to find?</ion-label>\n          <ion-input type="text" [(ngModel)]="strsearch"></ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n    <button ion-button full (click)="search()">Search</button>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/congresos/congresos.module": [
		293,
		12
	],
	"../pages/contacto/contacto.module": [
		294,
		11
	],
	"../pages/documentos/documentos.module": [
		295,
		10
	],
	"../pages/documentssearch/documentssearch.module": [
		296,
		9
	],
	"../pages/intereses/intereses.module": [
		297,
		8
	],
	"../pages/notes/notes.module": [
		298,
		7
	],
	"../pages/partners/partners.module": [
		299,
		6
	],
	"../pages/perfil/perfil.module": [
		300,
		5
	],
	"../pages/ponentessearch/ponentessearch.module": [
		301,
		4
	],
	"../pages/programa/programa.module": [
		302,
		3
	],
	"../pages/programsearch/programsearch.module": [
		303,
		2
	],
	"../pages/search/search.module": [
		304,
		1
	],
	"../pages/tabs/tabs.module": [
		305,
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
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__intereses_intereses__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__perfil_perfil__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__congresos_congresos__ = __webpack_require__(107);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_congresos_congresos__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_programa_programa__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_documentos_documentos__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_intereses_intereses__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_perfil_perfil__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_partners_partners__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contacto_contacto__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_notes_notes__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_programsearch_programsearch__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ponentessearch_ponentessearch__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_documentssearch_documentssearch__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_search_search__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_rest_rest__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_device__ = __webpack_require__(171);
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
                        { loadChildren: '../pages/notes/notes.module#NotesPageModule', name: 'NotesPage', segment: 'notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/partners/partners.module#PartnersPageModule', name: 'PartnersPage', segment: 'partners', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ponentessearch/ponentessearch.module#PonentessearchPageModule', name: 'PonentessearchPage', segment: 'ponentessearch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/programa/programa.module#ProgramaPageModule', name: 'ProgramaPage', segment: 'programa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/programsearch/programsearch.module#ProgramsearchPageModule', name: 'ProgramsearchPage', segment: 'programsearch', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["a" /* HttpModule */]
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(171);
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
    function RestProvider(http, device) {
        this.http = http;
        this.device = device;
        this.url = 'http://fixingmexico.com/congreso/api/';
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
    RestProvider.prototype.setAsistente = function (nombre, notifications) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'setasistente?device=' + _this.device.uuid + '&nombre=' + nombre + '&notifications=' + notifications).subscribe(function (data) {
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
    RestProvider.prototype.addNote = function (programa, notas) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + 'addnote?device=jasdhasd7a&programa=' + programa + '&notas=' + notas).subscribe(function (data) {
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

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_programa_programa__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_documentos_documentos__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_intereses_intereses__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_perfil_perfil__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contacto_contacto__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_partners_partners__ = __webpack_require__(114);
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
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'md-home', page: 'congress' },
            { title: 'Partners', component: __WEBPACK_IMPORTED_MODULE_10__pages_partners_partners__["a" /* PartnersPage */], icon: 'md-list-box', page: 'congress' },
            { title: 'Program', component: __WEBPACK_IMPORTED_MODULE_5__pages_programa_programa__["a" /* ProgramaPage */], icon: 'md-list', page: 'program' },
            { title: 'Documents', component: __WEBPACK_IMPORTED_MODULE_6__pages_documentos_documentos__["a" /* DocumentosPage */], icon: 'md-book', page: 'documents' },
            { title: 'Marks', component: __WEBPACK_IMPORTED_MODULE_7__pages_intereses_intereses__["a" /* InteresesPage */], icon: 'md-bookmark', page: 'congress' },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_8__pages_perfil_perfil__["a" /* PerfilPage */], icon: 'md-person', page: 'congress' },
            { title: 'Contact', component: __WEBPACK_IMPORTED_MODULE_9__pages_contacto_contacto__["a" /* ContactoPage */], icon: 'md-contacts', page: 'contact' }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-content style="top:0px !important;" class="side-menu-left side-menu-gradient">\n    <div class="spacer" style="width: 268px; height: 24px;"></div>\n    <div class="profile-image">\n      <img src="assets/imgs/user.svg" style="display: block; width: 40%; height: auto; margin-left: auto; margin-right: auto;">\n    </div>\n    <div class="spacer" style=" color:#313131; width: 268px; height: 19px;"></div>\n    <ion-list id="menu-list1" no-lines style="font-weight:250;">\n      <ion-item menuClose ion-item *ngFor="let p of pages" (click)="openPage(p, p.page)" class="side-menu-item" style="margin:10px;">\n        <ion-icon name="{{p.icon}}"></ion-icon>\n        {{p.title}}\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notes_notes__ = __webpack_require__(113);
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], ListPage.prototype, "mapElement", void 0);
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/list/list.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <button menuToggle ion-button color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n    <ion-searchbar (click)="searchForm()"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card style="margin: 0px !important; width: 100% !important;">\n    <img style="height:220px;" src="{{ programa.image }}"/>\n    <div class="card-title" style="padding: 5px; background: #0000005e;">{{ programa.nombre }}</div>\n    <div class="card-subtitle" style="background: #0000005e;">\n      <p style="color: white !mportant">\n        <ion-icon name="md-contact"></ion-icon> <strong>{{ programa.ponente }}</strong>\n      </p>\n      <p style="color: white !mportant">\n        <ion-icon name="md-calendar"></ion-icon> <strong>{{ programa.fecha }} - {{ programa.hora }}</strong>\n      </p>\n      <p>\n        <ion-icon name="md-leaf"></ion-icon> <strong>{{ programa.congreso }}</strong>\n      </p>\n    </div>\n  </ion-card>\n  <ion-card>\n\n  <ion-card-header>\n    Descripción\n  </ion-card-header>\n\n  <ion-card-content>\n    {{ programa.descripcion }}\n  </ion-card-content>\n\n</ion-card>\n  <ion-item *ngFor="let doc of documentos" no-lines>\n    <ion-thumbnail item-start>\n      <img src="assets/imgs/book.png">\n    </ion-thumbnail>\n    <h2>{{ doc.nombre }}</h2>\n    <p>{{ doc.descripcion }}</p>\n    <button ion-button clear item-end (click)="openDoc(doc.url)">View</button>\n  </ion-item>\n  <div #map id="map"></div>\n  <ion-fab right top>\n      <button ion-fab mini color="primary"><ion-icon name="arrow-dropdown"></ion-icon></button>\n      <ion-fab-list side="bottom">\n        <button ion-fab (click)="addFavs()"><ion-icon name="md-star"></ion-icon></button>\n        <button ion-fab (click)="openNotes()"><ion-icon name="md-copy"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _f || Object])
    ], ListPage);
    return ListPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(49);
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
    function HomePage(navCtrl, restProvider) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.getHome();
    }
    HomePage.prototype.getHome = function () {
        var _this = this;
        this.restProvider.getPrograma()
            .then(function (data) {
            _this.programa = data;
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
            selector: 'page-home',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <button menuToggle ion-button color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n    <ion-searchbar (click)="searchForm()"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<div *ngFor="let pro of programa">\n  <ion-card style="margin: 0px !important; width: 100% !important;" (click)="tema(pro, pro.id)">\n    <img style="height:220px;" src="{{ pro.image }}"/>\n    <div class="card-title" style="padding: 5px; background: #0000005e;">{{ pro.nombre }}</div>\n    <div class="card-subtitle" style="background: #0000005e;">\n      <p style="color: white !mportant">\n        <ion-icon name="md-contact"></ion-icon> <strong>{{ pro.ponente }}</strong>\n      </p>\n      <p style="color: white !mportant">\n        <ion-icon name="md-calendar"></ion-icon> <strong>{{ pro.fecha }} - {{ pro.hora }}</strong>\n      </p>\n      <p>\n        <ion-icon name="md-leaf"></ion-icon> <strong>{{ pro.congreso }}</strong>\n      </p>\n    </div>\n  </ion-card>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteresesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(28);
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
            selector: 'page-intereses',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/intereses/intereses.html"*/'\n<ion-content>\n  <ion-fab top right edge style="margin-top: 30px;">\n    <button menuToggle ion-fab color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n  </ion-fab>\n  <ion-fab bottom right edge style="margin-bottom: 30px;">\n    <button ion-fab color="primary" mini (click)="searchForm()"><ion-icon name="md-search"></ion-icon></button>\n  </ion-fab>\n  <div align="center" class="img-container">\n    <img class="img-icon" src="assets/imgs/estrella.svg" alt="" width="20%">\n    <h3 class="title-primary">MARKS</h3>\n  </div>\n\n  <ion-card class="card-content-up">\n    <ion-card-content>\n      <ion-list no-lines>\n        <button ion-item *ngFor="let item of items" (click)="gopage(item)">\n          {{ item.nombre }}\n        </button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/intereses/intereses.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
    ], InteresesPage);
    return InteresesPage;
}());

//# sourceMappingURL=intereses.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(28);
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
        this.restProvider.setAsistente(this.nombre, this.notifications)
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
            }
        });
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Applications/MAMP/htdocs/ammcprj888/src/pages/perfil/perfil.html"*/'\n<ion-content>\n  <ion-fab top right edge style="margin-top: 30px;">\n    <button menuToggle ion-fab color="light" mini><ion-icon name="md-menu"></ion-icon></button>\n  </ion-fab>\n  <ion-fab bottom right edge style="margin-bottom: 30px;">\n    <button ion-fab color="primary" mini (click)="searchForm()"><ion-icon name="md-search"></ion-icon></button>\n  </ion-fab>\n  <div align="center" class="img-container">\n    <img class="img-icon" src="assets/imgs/usuario.svg" alt="" width="20%">\n    <h3 class="title-primary">USER</h3>\n  </div>\n\n  <ion-card class="card-content-up">\n    <ion-card-content>\n      <ion-list no-lines>\n      <ion-item>\n        <ion-label floating>Full Name</ion-label>\n        <ion-input type="text" [(ngModel)]="nombre"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Select a Category</ion-label>\n        <ion-select [(ngModel)]="notifications" interface="action-sheet">\n          <ion-option value="1">Enabled</ion-option>\n          <ion-option value="2">Disabled</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <br>\n    <button ion-button full (click)="save()">Save</button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Applications/MAMP/htdocs/ammcprj888/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map