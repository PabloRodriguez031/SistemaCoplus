(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["academia-academia-module"],{

/***/ "./src/app/academia/academia-editar/academia-editar.component.css":
/*!************************************************************************!*\
  !*** ./src/app/academia/academia-editar/academia-editar.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/academia/academia-editar/academia-editar.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/academia/academia-editar/academia-editar.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Editar Discipulado</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/academia']\" routerLinkActive=\"active\">Listado Academias</a></li>\n                    <li class=\"breadcrumb-item\"><a>Editar Academia</a></li>\n                  </ol>\n                </nav>\n              <form #documentoForm=\"ngForm\" (ngSubmit)=\"updateDocumento()\">\n\n                  <label>Red a la que pertenece</label> \n                  <div class=\"form-group\">\n                    <select name=\"red\" class=\"form-control\" [(ngModel)]=\"documento.data['red']\" required>\n                      <option value=\"{{documento2.id}}\" *ngFor=\"let documento2 of documentos2\">{{documento2.data['descripcion']}}</option>\n                    </select>\n                  </div>\n                  <label>Día que se realiza</label>\n                  <div class=\"form-group\">\n                      <select name=\"dia\" class=\"form-control\" [(ngModel)]=\"documento.data['dia']\" required>\n                        <option value=\"Lunes\">Lunes</option>\n                        <option value=\"Martes\">Martes</option>\n                        <option value=\"Miercoles\">Miércoles</option>\n                        <option value=\"Jueves\">Jueves</option>\n                        <option value=\"Viernes\">Viernes</option>\n                        <option value=\"Sabado\">Sábado</option>\n                        <option value=\"Domingo\">Domingo</option>\n                    </select>\n                  </div>\n                  <label>Direccion donde se realiza</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"direccion\" [(ngModel)]=\"documento.data['direccion']\" required>\n                  </div>\n                  <label>Zona ubicada</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"zona\" [(ngModel)]=\"documento.data['zona']\" required>\n                  </div>\n                  <label>Hora en que se realiza</label>\n                  <div class=\"form-group\">\n                    <input type=\"time\" class=\"form-control\" name=\"hora\" [(ngModel)]=\"documento.data['hora']\" required>\n                  </div>\n                  <label>Ciclo</label>                           \n                  <div class=\"form-group\">                    \n                    <select class=\"form-control\" name=\"ciclo\"  [(ngModel)]=\"documento.data['ciclo']\" required>\n                      <option value=\"1\">1</option>\n                      <option value=\"2\">2</option>\n                    </select>\n                  </div>\n                  <label>Año</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"anio\"  [(ngModel)]=\"documento.data['anio']\" required>\n                  </div>\n                  <label>Pensum</label> \n                  <div class=\"form-group\">\n                    <select name=\"pensum\" class=\"form-control\"  [(ngModel)]=\"documento.data['pensum']\" required >\n                      <option value=\"{{documento3.id}}\" *ngFor=\"let documento3 of documentos3\">{{documento3.id}}</option>\n                    </select>\n                  </div>\n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Editar Discipulado</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/academia/academia-editar/academia-editar.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/academia/academia-editar/academia-editar.component.ts ***!
  \***********************************************************************/
/*! exports provided: AcademiaEditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademiaEditarComponent", function() { return AcademiaEditarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/api.service */ "./src/app/servicios/api.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/servicios/notifications.service */ "./src/app/servicios/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AcademiaEditarComponent = /** @class */ (function () {
    function AcademiaEditarComponent(route, apiService, notificationsService) {
        this.route = route;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documento = [];
        this.coleccion = 'academia';
        this.documentos2 = {};
        this.coleccion2 = 'red';
        this.documentos3 = {};
        this.coleccion3 = 'pensum';
    }
    AcademiaEditarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notificationsService.showLoadingSwal('Cargando datos...', 'Espere por favor');
        var documentoId = this.route.snapshot.params['id'];
        this.apiService.getDocumentoById(this.coleccion, documentoId).then(function (documento) {
            _this.documento = {
                id: documento.id,
                data: documento.data()
            };
            _this.notificationsService.hideLoadingSwal();
        }).catch(function (error) {
            console.log(error);
            _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
        });
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection(this.coleccion2).onSnapshot(function (snapshot) {
            _this.documentos2 = [];
            snapshot.forEach(function (doc) {
                _this.documentos2.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
        });
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection(this.coleccion3).onSnapshot(function (snapshot) {
            _this.documentos3 = [];
            snapshot.forEach(function (doc) {
                _this.documentos3.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
        });
    };
    AcademiaEditarComponent.prototype.updateDocumento = function () {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.updateDocumento(_this.coleccion, {
                    red: _this.documento.data['red'],
                    dia: _this.documento.data['dia'],
                    direccion: _this.documento.data['direccion'],
                    zona: _this.documento.data['zona'],
                    hora: _this.documento.data['hora'],
                    ciclo: _this.documento.data['ciclo'],
                    anio: _this.documento.data['anio'],
                    pensum: _this.documento.data['pensum']
                }, _this.documento.id).then(function (respuesta) {
                    _this.notificationsService.showSwal('Editado', 'La red ha sido editada con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    AcademiaEditarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-academia-editar',
            template: __webpack_require__(/*! ./academia-editar.component.html */ "./src/app/academia/academia-editar/academia-editar.component.html"),
            styles: [__webpack_require__(/*! ./academia-editar.component.css */ "./src/app/academia/academia-editar/academia-editar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], AcademiaEditarComponent);
    return AcademiaEditarComponent;
}());



/***/ }),

/***/ "./src/app/academia/academia-form/academia-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/academia/academia-form/academia-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/academia/academia-form/academia-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/academia/academia-form/academia-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Nueva Academia</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/academia']\" routerLinkActive=\"active\">Listado Academias</a></li>\n                    <li class=\"breadcrumb-item\"><a>Crear Academia</a></li>\n                  </ol>\n                </nav>\n              <form #documentoForm=\"ngForm\" (ngSubmit)=\"addDocumento(documentoForm)\">\n                  <label>Red a la que pertenece</label> \n                  <div class=\"form-group\">\n                    <select name=\"red\" class=\"form-control\" ngModel required>\n                      <option value=\"{{documento2.id}}\" *ngFor=\"let documento2 of documentos2\">{{documento2.data['descripcion']}}</option>\n                    </select>\n                  </div>\n                  <label>Día en que se realiza</label>\n                  <div class=\"form-group\">                    \n                    <select class=\"form-control\" name=\"dia\" ngModel required>\n                        <option value=\"Lunes\">Lunes</option>\n                        <option value=\"Martes\">Martes</option>\n                        <option value=\"Miercoles\">Miércoles</option>\n                        <option value=\"Jueves\">Jueves</option>\n                        <option value=\"Viernes\">Viernes</option>\n                        <option value=\"Sabado\">Sábado</option>\n                        <option value=\"Domingo\">Domingo</option>\n                      </select>\n                  </div>\n                  <label>Direccion donde se realiza</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"direccion\" ngModel required>\n                  </div>\n                  <label>Zona ubicada</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"zona\" ngModel required>\n                  </div>\n                  <label>Hora en que se realiza</label>\n                  <div class=\"form-group\">\n                    <input type=\"time\" class=\"form-control\" name=\"hora\" ngModel required>\n                  </div>  \n                  <label>Ciclo</label>                           \n                  <div class=\"form-group\">                    \n                    <select class=\"form-control\" name=\"ciclo\" ngModel required>\n                      <option value=\"1\">1</option>\n                      <option value=\"2\">2</option>\n                    </select>\n                  </div>\n                  <label>Año</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"anio\" ngModel required>\n                  </div>\n                  <label>Pensum</label> \n                  <div class=\"form-group\">\n                    <select name=\"pensum\" class=\"form-control\" ngModel required>\n                      <option value=\"{{documento3.id}}\" *ngFor=\"let documento3 of documentos3\">{{documento3.id}}</option>\n                    </select>\n                  </div>\n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Agregar Academia</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/academia/academia-form/academia-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/academia/academia-form/academia-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: AcademiaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademiaFormComponent", function() { return AcademiaFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/api.service */ "./src/app/servicios/api.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/servicios/notifications.service */ "./src/app/servicios/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AcademiaFormComponent = /** @class */ (function () {
    function AcademiaFormComponent(apiService, notificationsService) {
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documentos = {};
        this.coleccion = 'academia';
        this.documentos2 = {};
        this.coleccion2 = 'red';
        this.documentos3 = {};
        this.coleccion3 = 'pensum';
    }
    AcademiaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection(this.coleccion2).onSnapshot(function (snapshot) {
            _this.documentos2 = [];
            snapshot.forEach(function (doc) {
                _this.documentos2.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
        });
        firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection(this.coleccion3).onSnapshot(function (snapshot) {
            _this.documentos3 = [];
            snapshot.forEach(function (doc) {
                _this.documentos3.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
        });
    };
    AcademiaFormComponent.prototype.addDocumento = function (form) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.addDocumento(_this.coleccion, {
                    red: form.value.red,
                    dia: form.value.dia,
                    direccion: form.value.direccion,
                    zona: form.value.zona,
                    hora: form.value.hora,
                    ciclo: form.value.ciclo,
                    anio: form.value.anio,
                    pensum: form.value.pensum,
                    lideresIds: [],
                    estudiantesIds: []
                }).then(function (respuesta) {
                    _this.notificationsService.showSwal('Creada', 'La academia ha sido creada con éxito', 'success');
                    form.resetForm();
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    AcademiaFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-academia-form',
            template: __webpack_require__(/*! ./academia-form.component.html */ "./src/app/academia/academia-form/academia-form.component.html"),
            styles: [__webpack_require__(/*! ./academia-form.component.css */ "./src/app/academia/academia-form/academia-form.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], AcademiaFormComponent);
    return AcademiaFormComponent;
}());



/***/ }),

/***/ "./src/app/academia/academia.component.css":
/*!*************************************************!*\
  !*** ./src/app/academia/academia.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acciontabla{\r\n    margin: 0 5px;\r\n}"

/***/ }),

/***/ "./src/app/academia/academia.component.html":
/*!**************************************************!*\
  !*** ./src/app/academia/academia.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\">Lista de Academias</h4>\n          </div>\n          <div class=\"card-body \">\n            <div class=\"toolbar\">\n              <button class=\"btn btn-primary\" [routerLink]=\"['/crear-academia']\">Crear Academia</button>\n            </div>    \n            <div class=\"toolbar\">\n                <button class=\"btn btn-primary\" [routerLink]=\"['/editar-pensum']\">Editar Pensum</button>\n              </div>              \n            <div class=\"col-md-12\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <tr>\n                        <th>Red</th>\n                        <th>Día</th>\n                        <th>Direccion</th>\n                        <th>Zona</th>                  \n                        <th>Hora</th>\n                        <th>Ciclo</th>\n                        <th>Año</th>\n                        <th>Pensum</th>\n                        <th class=\"text-right\">Acción</th>\n                      </tr>\n                      <tr *ngFor=\"let documento of documentos\">\n                        <td>{{documento.data['red_nombre']}}</td>\n                        <td>{{documento.data['dia']}}</td>\n                        <td>{{documento.data['direccion']}}</td>\n                        <td>{{documento.data['zona']}}</td>\n                        <td>{{documento.data['hora']}}</td>\n                        <td>{{documento.data['ciclo']}}</td>\n                        <td>{{documento.data['anio']}}</td>\n                        <td>{{documento.data['pensum']}}</td>\n                        <td class=\"text-right\">\n                            <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"editDocumento(documento)\">\n                                <i class=\"nc-icon nc-zoom-split\"></i>\n                            </button>\n                            <button class=\"btn btn-info btn-sm acciontabla\" (click)=\"agregarUsuario(documento)\">\n                              <i class=\"nc-icon nc-single-02\"></i>\n                            </button>\n                            <button class=\"btn btn-info btn-sm acciontabla\" (click)=\"ingresarNotas(documento)\">\n                                <i class=\"nc-icon nc-single-copy-04\"></i>\n                              </button>\n                            <button class=\"btn btn-danger btn-sm acciontabla\" (click)=\"deleteDocumento(documento)\">\n                                <i class=\"nc-icon nc-simple-remove\"></i>\n                              </button>\n                        </td>\n                      </tr>\n                    </table>\n              </div>\n            </div>\n  \n        </div>\n      </div>  \n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/academia/academia.component.ts":
/*!************************************************!*\
  !*** ./src/app/academia/academia.component.ts ***!
  \************************************************/
/*! exports provided: AcademiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademiaComponent", function() { return AcademiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servicios/api.service */ "./src/app/servicios/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/servicios/notifications.service */ "./src/app/servicios/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AcademiaComponent = /** @class */ (function () {
    function AcademiaComponent(apiService, router, notificationsService) {
        this.apiService = apiService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.documentos = [];
        this.coleccion = 'academia';
        this.redes = [];
    }
    AcademiaComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('red').onSnapshot(function (snapshot) {
            _this.redes = [];
            snapshot.forEach(function (doc) {
                _this.redes.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection(_this.coleccion).onSnapshot(function (snapshot) {
                _this.documentos = [];
                snapshot.forEach(function (doc) {
                    _this.documentos.push({
                        id: doc.id,
                        data: doc.data()
                    });
                });
                _this.documentos.forEach(function (academia) {
                    _this.redes.forEach(function (red) {
                        if (academia.data['red'] === red.id) {
                            academia.data['red_nombre'] = red.data['descripcion'];
                        }
                    });
                });
            });
        });
    };
    AcademiaComponent.prototype.deleteDocumento = function (documento) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.deleteDocumento(_this.coleccion, documento).then(function (respuesta) {
                    _this.notificationsService.showSwal('Borrado', 'El discipulado ha sido borrado con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    AcademiaComponent.prototype.editDocumento = function (documento) {
        this.router.navigate(['/editar-academia', documento.id]);
    };
    AcademiaComponent.prototype.ingresarNotas = function (documento) {
        this.router.navigate(['/ingreso-notas', documento.id]);
    };
    AcademiaComponent.prototype.agregarUsuario = function (documento) {
        this.router.navigate(['/agregar-usuario-academia', documento.id]);
    };
    AcademiaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-academia',
            template: __webpack_require__(/*! ./academia.component.html */ "./src/app/academia/academia.component.html"),
            styles: [__webpack_require__(/*! ./academia.component.css */ "./src/app/academia/academia.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], AcademiaComponent);
    return AcademiaComponent;
}());



/***/ }),

/***/ "./src/app/academia/academia.module.ts":
/*!*********************************************!*\
  !*** ./src/app/academia/academia.module.ts ***!
  \*********************************************/
/*! exports provided: AcademiaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademiaModule", function() { return AcademiaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _academia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./academia.component */ "./src/app/academia/academia.component.ts");
/* harmony import */ var _academia_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./academia.routing */ "./src/app/academia/academia.routing.ts");
/* harmony import */ var _academia_form_academia_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./academia-form/academia-form.component */ "./src/app/academia/academia-form/academia-form.component.ts");
/* harmony import */ var _agregar_usuario_agregar_usuario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agregar-usuario/agregar-usuario.component */ "./src/app/academia/agregar-usuario/agregar-usuario.component.ts");
/* harmony import */ var _academia_editar_academia_editar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./academia-editar/academia-editar.component */ "./src/app/academia/academia-editar/academia-editar.component.ts");
/* harmony import */ var _notas_notas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notas/notas.component */ "./src/app/academia/notas/notas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AcademiaModule = /** @class */ (function () {
    function AcademiaModule() {
    }
    AcademiaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_academia_routing__WEBPACK_IMPORTED_MODULE_5__["AcademiaRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_academia_component__WEBPACK_IMPORTED_MODULE_4__["AcademiaComponent"], _academia_form_academia_form_component__WEBPACK_IMPORTED_MODULE_6__["AcademiaFormComponent"], _agregar_usuario_agregar_usuario_component__WEBPACK_IMPORTED_MODULE_7__["AgregarUsuarioComponent"], _academia_editar_academia_editar_component__WEBPACK_IMPORTED_MODULE_8__["AcademiaEditarComponent"], _notas_notas_component__WEBPACK_IMPORTED_MODULE_9__["NotasComponent"]]
        })
    ], AcademiaModule);
    return AcademiaModule;
}());



/***/ }),

/***/ "./src/app/academia/academia.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/academia/academia.routing.ts ***!
  \**********************************************/
/*! exports provided: AcademiaRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademiaRoutes", function() { return AcademiaRoutes; });
/* harmony import */ var _academia_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./academia.component */ "./src/app/academia/academia.component.ts");
/* harmony import */ var _academia_form_academia_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./academia-form/academia-form.component */ "./src/app/academia/academia-form/academia-form.component.ts");
/* harmony import */ var _agregar_usuario_agregar_usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agregar-usuario/agregar-usuario.component */ "./src/app/academia/agregar-usuario/agregar-usuario.component.ts");
/* harmony import */ var _academia_editar_academia_editar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academia-editar/academia-editar.component */ "./src/app/academia/academia-editar/academia-editar.component.ts");
/* harmony import */ var _notas_notas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notas/notas.component */ "./src/app/academia/notas/notas.component.ts");





var AcademiaRoutes = [{
        path: '',
        children: [{
                path: 'academia',
                component: _academia_component__WEBPACK_IMPORTED_MODULE_0__["AcademiaComponent"]
            }, {
                path: 'crear-academia',
                component: _academia_form_academia_form_component__WEBPACK_IMPORTED_MODULE_1__["AcademiaFormComponent"]
            }, {
                path: 'editar-academia/:id',
                component: _academia_editar_academia_editar_component__WEBPACK_IMPORTED_MODULE_3__["AcademiaEditarComponent"]
            }, {
                path: 'agregar-usuario-academia/:id',
                component: _agregar_usuario_agregar_usuario_component__WEBPACK_IMPORTED_MODULE_2__["AgregarUsuarioComponent"]
            }, {
                path: 'ingreso-notas/:id',
                component: _notas_notas_component__WEBPACK_IMPORTED_MODULE_4__["NotasComponent"]
            }]
    }];


/***/ }),

/***/ "./src/app/academia/agregar-usuario/agregar-usuario.component.css":
/*!************************************************************************!*\
  !*** ./src/app/academia/agregar-usuario/agregar-usuario.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/academia/agregar-usuario/agregar-usuario.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/academia/agregar-usuario/agregar-usuario.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"formModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h5 class=\"modal-title\">\n                  Agregar lideres a academia\n                </h5>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <tr>\n                        <th>Nombre de lider</th>\n                        <th class=\"text-right\">Agregar</th>\n                      </tr> \n                      <tr *ngFor=\"let liderRed of lideresRed\">\n                        <td>{{liderRed.data['nombre']}} {{liderRed.data['apellido']}}</td>\n                        <td class=\"text-right\">\n                          <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"agregarLider(liderRed.id);\">\n                            <i class=\"nc-icon nc-simple-add\"></i>\n                          </button>   \n                        </td>\n                      </tr>                     \n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"formModal2\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h5 class=\"modal-title\">\n                  Agregar usuarios a academia\n                </h5>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <tr>\n                        <th>Nombre y apellido</th>\n                        <th class=\"text-right\">Agregar</th>\n                      </tr> \n                      <tr *ngFor=\"let usuarioRed of usuariosRed\">\n                        <td>{{usuarioRed.data['nombre']}} {{usuarioRed.data['apellido']}}</td>\n                        <td class=\"text-right\">\n                          <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"agregarUsuario(usuarioRed.id);\">\n                            <i class=\"nc-icon nc-simple-add\"></i>\n                          </button>   \n                        </td>\n                      </tr>                     \n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Personas que conforman esta academia</h4>\n        </div>\n        <div class=\"card-body\">\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                  <li class=\"breadcrumb-item\"><a [routerLink]=\"['/academia']\" routerLinkActive=\"active\">Listado Academias</a></li>\n                  <li class=\"breadcrumb-item\"><a>Usuarios en Academia</a></li>\n                </ol>\n              </nav>\n            <form #documentoForm=\"ngForm\" (ngSubmit)=\"addDocumento(documentoForm)\">\n                <label>Nombre de lideres</label>\n                <br>\n                <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"openForm();\">\n                  <i class=\"nc-icon nc-zoom-split\"></i>\n                </button>       \n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <tr>\n                          <th>Lider</th>\n                          <th class=\"text-right\">Acción</th>\n                      </tr>\n                      <tr *ngFor=\"let liderAcademia of lideresAcademia; let i = index\">\n                        <td>{{liderAcademia.data['nombre']}}  {{liderAcademia.data['apellido']}}</td>\n                        <td class=\"text-right\">\n                          <button class=\"btn btn-danger btn-sm acciontabla\" (click)=\"deleteLider(liderAcademia.id, i)\">\n                            <i class=\"nc-icon nc-simple-remove\"></i>\n                         </button>\n                        </td>\n                      </tr>\n                  </table>\n                </div>  \n                <br>\n                <label>Personas que asisten a esta academia</label>\n                <br>\n                <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"openForm2();\">\n                  <i class=\"nc-icon nc-zoom-split\"></i>\n                </button>  \n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <tr>\n                            <th>Estudiantes</th>\n                            <th class=\"text-right\">Acción</th>\n                        </tr>\n                        <tr *ngFor=\"let usuarioAcademia of usuariosAcademia; let i = index\">\n                          <td>{{usuarioAcademia.data['nombre']}} {{usuarioAcademia.data['apellido']}}</td>\n                          <td class=\"text-right\">\n                            <button class=\"btn btn-danger btn-sm acciontabla\" (click)=\"deleteUsuario(usuarioAcademia.id, i)\">\n                              <i class=\"nc-icon nc-simple-remove\"></i>\n                           </button>\n                          </td>\n                        </tr>\n                    </table>\n                  </div>  \n                <div class=\"card-footer text-center\">\n                    <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Agregar Usuarios</button>\n                  </div>\n              </form>                \n        </div>  \n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/academia/agregar-usuario/agregar-usuario.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/academia/agregar-usuario/agregar-usuario.component.ts ***!
  \***********************************************************************/
/*! exports provided: AgregarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarUsuarioComponent", function() { return AgregarUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_servicios_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/servicios/api.service */ "./src/app/servicios/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/servicios/notifications.service */ "./src/app/servicios/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgregarUsuarioComponent = /** @class */ (function () {
    function AgregarUsuarioComponent(apiService, route, notificationsService) {
        this.apiService = apiService;
        this.route = route;
        this.notificationsService = notificationsService;
        this.lideresAcademia = [];
        this.usuariosAcademia = [];
        this.documentos = [];
        this.coleccion = 'usuario';
        this.documentos2 = [];
        this.coleccion2 = 'academia';
        this.lideresRed = [];
        this.usuariosRed = [];
        this.lider = [];
    }
    AgregarUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentoId = this.route.snapshot.params['id'];
        this.apiService.getDocumentoById(this.coleccion2, this.documentoId).then(function (academia) {
            _this.documentos2 = {
                id: academia.id,
                data: academia.data()
            };
        });
        if (this.lideresRed) {
            this.lideresRed = this.filtrarUsuarios(this.lideresRed, 'lideresIds');
        }
        if (this.usuariosRed) {
            this.usuariosRed = this.filtrarUsuarios(this.usuariosRed, 'estudiantesIds');
        }
        firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection(this.coleccion).where('liderAcademiaId', '==', this.documentoId).
            where('graduado', '==', 'Si').onSnapshot(function (snapshot) {
            _this.lideresAcademia = [];
            snapshot.forEach(function (lideresAcademia) {
                _this.lideresAcademia.push({
                    id: lideresAcademia.id,
                    data: lideresAcademia.data()
                });
            });
        });
        firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection(this.coleccion).where('estudiantesIds', '==', this.documentoId).
            where('graduado', '==', 'No').onSnapshot(function (snapshot) {
            _this.usuariosAcademia = [];
            snapshot.forEach(function (usuariosAcademia) {
                _this.usuariosAcademia.push({
                    id: usuariosAcademia.id,
                    data: usuariosAcademia.data()
                });
            });
        });
    };
    AgregarUsuarioComponent.prototype.openForm = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection('usuario').where('graduado', '==', 'Si').
            where('red', '==', this.documentos2.data['red']).onSnapshot(function (snapshot) {
            _this.lideresRed = [];
            snapshot.forEach(function (doc) {
                _this.lideresRed.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            _this.lideresRed = _this.filtrarUsuarios(_this.lideresRed, 'lideresIds');
            $('#formModal').modal('toggle');
        });
    };
    AgregarUsuarioComponent.prototype.agregarLider = function (id) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                if (!_this.documentos2.data['lideresIds']) {
                    _this.documentos2.data['lideresIds'] = [];
                }
                _this.documentos2.data['lideresIds'].push(id);
                _this.apiService.updateDocumento(_this.coleccion2, {
                    lideresIds: _this.documentos2.data['lideresIds']
                }, _this.documentoId).then(function (respuesta) {
                    _this.lideresRed.splice(_this.lideresRed.findIndex(function (lider) {
                        return lider.id === id;
                    }), 1);
                    _this.notificationsService.showSwal('Editado', 'El lider ha sido agregado con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
                _this.apiService.updateDocumento(_this.coleccion, {
                    liderAcademiaId: _this.documentos2.id
                }, id).then(function (respuesta) {
                    _this.usuariosRed.splice(_this.usuariosRed.findIndex(function (discipulo) {
                        return discipulo.id === id;
                    }), 1);
                    _this.notificationsService.showSwal('Editado', 'El lider ha sido agregado con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    AgregarUsuarioComponent.prototype.deleteLider = function (id, index) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.lideresAcademia.splice(index, 1);
                var lideresRestantes_1 = [];
                _this.lideresAcademia.forEach(function (lideres) {
                    lideresRestantes_1.push(lideres.id);
                });
                _this.apiService.updateDocumento(_this.coleccion, {
                    liderAcademiaId: ''
                }, id).then(function (respuesta) {
                    _this.apiService.updateDocumento('academia', {
                        lideresIds: lideresRestantes_1
                    }, _this.documentoId);
                    _this.notificationsService.showSwal('Editado', 'El lider ha sido eliminado con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    AgregarUsuarioComponent.prototype.filtrarUsuarios = function (usuarios, campo) {
        var _this = this;
        var usuariosfiltrados = [];
        usuarios.forEach(function (usuario) {
            var existe = false;
            _this.documentos2.data[campo].forEach(function (discipulo) {
                if (usuario.id === discipulo) {
                    existe = true;
                }
            });
            if (existe === false) {
                usuariosfiltrados.push(usuario);
            }
        });
        console.log(usuarios);
        return usuariosfiltrados;
    };
    AgregarUsuarioComponent.prototype.openForm2 = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection('usuario').where('red', '==', this.documentos2.data['red']).
            where('graduado', '==', 'No').
            where('estudiantesIds', '==', '').
            onSnapshot(function (snapshot) {
            _this.usuariosRed = [];
            snapshot.forEach(function (doc) {
                _this.usuariosRed.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            _this.filtrarUsuarios(_this.usuariosRed, 'estudiantesIds');
            $('#formModal2').modal('toggle');
        });
    };
    AgregarUsuarioComponent.prototype.agregarUsuario = function (id) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                if (!_this.documentos2.data['estudiantes']) {
                    _this.documentos2.data['estudiantes'] = [];
                }
                _this.documentos2.data['estudiantes'].push({
                    id: id
                });
                _this.apiService.updateDocumento(_this.coleccion2, {
                    estudiantes: _this.documentos2.data['estudiantes']
                }, _this.documentoId).then(function (respuesta) {
                    _this.usuariosRed.splice(_this.usuariosRed.findIndex(function (discipulo) {
                        return discipulo.id === id;
                    }), 1);
                    _this.notificationsService.showSwal('Editado', 'El usuario ha sido agregado con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
                _this.apiService.updateDocumento(_this.coleccion, {
                    estudiantesIds: _this.documentos2.id
                }, id).then(function (respuesta) {
                    _this.usuariosRed.splice(_this.usuariosRed.findIndex(function (discipulo) {
                        return discipulo.id === id;
                    }), 1);
                    _this.notificationsService.showSwal('Editado', 'El usuario ha sido agregado con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    AgregarUsuarioComponent.prototype.deleteUsuario = function (id, index) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.usuariosAcademia.splice(index, 1);
                var usuariosRestantes_1 = [];
                _this.usuariosAcademia.forEach(function (usuarios) {
                    usuariosRestantes_1.push(usuarios.id);
                });
                _this.apiService.updateDocumento(_this.coleccion, {
                    estudiantesIds: ''
                }, id).then(function (respuesta) {
                    _this.apiService.updateDocumento('academia', {
                        estudiantesIds: usuariosRestantes_1
                    }, _this.documentoId);
                    _this.notificationsService.showSwal('Editado', 'El estudiante ha sido eliminado con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    AgregarUsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agregar-usuario',
            template: __webpack_require__(/*! ./agregar-usuario.component.html */ "./src/app/academia/agregar-usuario/agregar-usuario.component.html"),
            styles: [__webpack_require__(/*! ./agregar-usuario.component.css */ "./src/app/academia/agregar-usuario/agregar-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [app_servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], AgregarUsuarioComponent);
    return AgregarUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/academia/notas/notas.component.css":
/*!****************************************************!*\
  !*** ./src/app/academia/notas/notas.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/academia/notas/notas.component.html":
/*!*****************************************************!*\
  !*** ./src/app/academia/notas/notas.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\">Ingreso de Notas Academias</h4>\n          </div>\n          <div class=\"card-body \">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/academia']\" routerLinkActive=\"active\">Listado Academias</a></li>\n                    <li class=\"breadcrumb-item\"><a>Ingreso de Notas Academia</a></li>\n                  </ol>\n                </nav>             \n            <div class=\"col-md-12\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <tr>\n                        <th>Estudiante</th>\n                        <th>Nota</th>\n                        <th class=\"text-right\">Acción</th>\n                      </tr>\n\n                      <tr *ngFor=\"let usuarioAcademia of usuariosAcademia\">\n                        <td>{{usuarioAcademia.data['nombre']}} {{usuarioAcademia.data['apellido']}}</td>\n                        <td> <input type=\"text\" name=\"nota\" ngModel #nota = \"ngModel\"> </td>\n                          <td class=\"text-right\">\n                              <button class=\"btn btn-success btn-sm acciontabla\" (click)=\"ingresarNota(usuarioAcademia.id, nota.value)\">\n                                  <i class=\"nc-icon nc-check-2\"></i>\n                              </button>\n                          </td>\n                        </tr>\n\n                    </table>\n              </div>\n            </div>\n  \n        </div>\n      </div>  \n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/academia/notas/notas.component.ts":
/*!***************************************************!*\
  !*** ./src/app/academia/notas/notas.component.ts ***!
  \***************************************************/
/*! exports provided: NotasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasComponent", function() { return NotasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/api.service */ "./src/app/servicios/api.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/servicios/notifications.service */ "./src/app/servicios/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotasComponent = /** @class */ (function () {
    function NotasComponent(route, apiService, notificationsService) {
        this.route = route;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.usuariosAcademia = [];
        this.coleccion = 'usuario';
        this.documentos2 = [];
        this.coleccion2 = 'academia';
    }
    NotasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentoId = this.route.snapshot.params['id'];
        this.apiService.getDocumentoById(this.coleccion2, this.documentoId).then(function (academia) {
            _this.documentos2 = {
                id: academia.id,
                data: academia.data()
            };
        });
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection(this.coleccion).where('estudiantesIds', '==', this.documentoId).onSnapshot(function (snapshot) {
            _this.usuariosAcademia = [];
            snapshot.forEach(function (doc) {
                _this.usuariosAcademia.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
        });
    };
    NotasComponent.prototype.ingresarNota = function (id, nota) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                var indice = _this.documentos2.data['estudiantes'].findIndex(function (estudiante) {
                    return estudiante.id === id;
                });
                if (!_this.documentos2.data['estudiantes'][indice]['notas']) {
                    _this.documentos2.data['estudiantes'][indice]['notas'] = [];
                }
                _this.documentos2.data['estudiantes'][indice]['notas'][0] = {
                    id: 'prueba',
                    nota: nota
                };
                _this.apiService.updateDocumento('academia', {
                    estudiantes: _this.documentos2.data['estudiantes']
                }, _this.documentoId).then(function (respuesta) {
                    _this.notificationsService.showSwal('Editado', 'La nota ha sido ingresada con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    NotasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notas',
            template: __webpack_require__(/*! ./notas.component.html */ "./src/app/academia/notas/notas.component.html"),
            styles: [__webpack_require__(/*! ./notas.component.css */ "./src/app/academia/notas/notas.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], NotasComponent);
    return NotasComponent;
}());



/***/ })

}]);
//# sourceMappingURL=academia-academia-module.js.map