(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporte-discipulado-reporte-discipulado-module"],{

/***/ "./src/app/reporte-discipulado/asistencia/asistencia.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/reporte-discipulado/asistencia/asistencia.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reporte-discipulado/asistencia/asistencia.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/reporte-discipulado/asistencia/asistencia.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">Lista de Asistencia Discipulado</h4>\n        </div>\n        <div class=\"card-body \"> \n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                  <li class=\"breadcrumb-item\"><a [routerLink]=\"['/reporte-discipulado']\" routerLinkActive=\"active\">Listado Reportes</a></li>\n                  <li class=\"breadcrumb-item\"><a>Tomar Asistencia</a></li>\n                </ol>\n              </nav>           \n          <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n            <table class=\"table\">\n              <tr>\n                <th>Nombre</th>\n                <th>Fecha de Asistencia</th>        \n                <th class=\"text-right\">Acción</th>\n              </tr>\n              <tr>\n                  <td>Pablo Rodriguez</td>\n                  <td>28-may-2019</td>                                     \n                  <td class=\"text-right\">\n                    <button class=\"btn btn-success btn-sm acciontabla\" (click)=\"marcarAsistencia(documento)\">\n                      Tomar asistencia <i class=\"nc-icon nc-check-2\"></i> \n                    </button>                  \n                </td>\n              </tr>\n            </table>\n            </div>\n          </div>\n\n      </div>\n    </div>  \n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/reporte-discipulado/asistencia/asistencia.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/reporte-discipulado/asistencia/asistencia.component.ts ***!
  \************************************************************************/
/*! exports provided: AsistenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsistenciaComponent", function() { return AsistenciaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsistenciaComponent = /** @class */ (function () {
    function AsistenciaComponent() {
    }
    AsistenciaComponent.prototype.ngOnInit = function () {
    };
    AsistenciaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asistencia',
            template: __webpack_require__(/*! ./asistencia.component.html */ "./src/app/reporte-discipulado/asistencia/asistencia.component.html"),
            styles: [__webpack_require__(/*! ./asistencia.component.css */ "./src/app/reporte-discipulado/asistencia/asistencia.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AsistenciaComponent);
    return AsistenciaComponent;
}());



/***/ }),

/***/ "./src/app/reporte-discipulado/reporte-discipulado.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/reporte-discipulado/reporte-discipulado.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acciontabla{\r\n    margin: 0 5px;\r\n}"

/***/ }),

/***/ "./src/app/reporte-discipulado/reporte-discipulado.component.html":
/*!************************************************************************!*\
  !*** ./src/app/reporte-discipulado/reporte-discipulado.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\">Lista de Reportes</h4>\n          </div>\n          <div class=\"card-body \">\n            <div class=\"toolbar\">\n              <button class=\"btn btn-primary\" [routerLink]=\"['/crear-reporte-discipulado']\">Crear Reporte</button>\n            </div>              \n            <div class=\"col-md-12\">\n              <div class=\"table-responsive\">\n              <table class=\"table\">\n                <tr>\n                  <th>Discipulado</th>\n                  <th>Fecha</th>\n                  <th>Hora</th>\n                  <th>Asisitieron</th>                 \n                  <th class=\"text-right\">Acción</th>\n                </tr>\n                <tr *ngFor=\"let documento of documentos\">\n                    <td>{{documento.data['discipulado_nombre']}}</td>\n                    <td>{{documento.data['fecha']}}</td>\n                    <td>{{documento.data['hora']}}</td>\n                    <td>{{documento.data['asistieron']}}</td>                                      \n                    <td class=\"text-right\">\n                      <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"editDocumento(documento)\">\n                          <i class=\"nc-icon nc-zoom-split\"></i>\n                      </button>\n                      <button class=\"btn btn-info btn-sm acciontabla\" (click)=\"asistencia(documento)\">\n                        <i class=\"nc-icon nc-tap-01\"></i>\n                    </button>\n                      <button class=\"btn btn-danger btn-sm acciontabla\" (click)=\"deleteDocumento(documento)\">\n                          <i class=\"nc-icon nc-simple-remove\"></i>\n                        </button>\n                  </td>\n                </tr>\n              </table>\n              </div>\n            </div>\n  \n        </div>\n      </div>  \n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/reporte-discipulado/reporte-discipulado.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/reporte-discipulado/reporte-discipulado.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReporteDiscipuladoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteDiscipuladoComponent", function() { return ReporteDiscipuladoComponent; });
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





var ReporteDiscipuladoComponent = /** @class */ (function () {
    function ReporteDiscipuladoComponent(apiService, router, notificationsService) {
        this.apiService = apiService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.documentos = [];
        this.coleccion = 'reporte_discipulado';
        this.discipulados = [];
    }
    ReporteDiscipuladoComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('discipulado').onSnapshot(function (snapshot) {
            _this.discipulados = [];
            snapshot.forEach(function (doc) {
                _this.discipulados.push({
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
                _this.documentos.forEach(function (discipulado) {
                    _this.discipulados.forEach(function (nombre) {
                        if (discipulado.data['discipulado'] === nombre.id) {
                            discipulado.data['discipulado_nombre'] = nombre.data['discipulado'];
                        }
                    });
                });
            });
        });
    };
    ReporteDiscipuladoComponent.prototype.deleteDocumento = function (documento) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.deleteDocumento(_this.coleccion, documento).then(function (respuesta) {
                    _this.notificationsService.showSwal('Borrado', 'El reporte ha sido borrado con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    ReporteDiscipuladoComponent.prototype.editDocumento = function (documento) {
        this.router.navigate(['/editar-reporte-discipulado', documento.id]);
    };
    ReporteDiscipuladoComponent.prototype.asistencia = function (documento) {
        this.router.navigate(['/asistencia-discipulado', documento.id]);
    };
    ReporteDiscipuladoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporte-discipulado',
            template: __webpack_require__(/*! ./reporte-discipulado.component.html */ "./src/app/reporte-discipulado/reporte-discipulado.component.html"),
            styles: [__webpack_require__(/*! ./reporte-discipulado.component.css */ "./src/app/reporte-discipulado/reporte-discipulado.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], ReporteDiscipuladoComponent);
    return ReporteDiscipuladoComponent;
}());



/***/ }),

/***/ "./src/app/reporte-discipulado/reporte-discipulado.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/reporte-discipulado/reporte-discipulado.module.ts ***!
  \*******************************************************************/
/*! exports provided: ReporteDiscipuladoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteDiscipuladoModule", function() { return ReporteDiscipuladoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reporte_editar_reporte_editar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reporte-editar/reporte-editar.component */ "./src/app/reporte-discipulado/reporte-editar/reporte-editar.component.ts");
/* harmony import */ var _reporte_form_reporte_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporte-form/reporte-form.component */ "./src/app/reporte-discipulado/reporte-form/reporte-form.component.ts");
/* harmony import */ var _reporte_discipulado_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reporte-discipulado.routing */ "./src/app/reporte-discipulado/reporte-discipulado.routing.ts");
/* harmony import */ var _reporte_discipulado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reporte-discipulado.component */ "./src/app/reporte-discipulado/reporte-discipulado.component.ts");
/* harmony import */ var _asistencia_asistencia_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asistencia/asistencia.component */ "./src/app/reporte-discipulado/asistencia/asistencia.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ReporteDiscipuladoModule = /** @class */ (function () {
    function ReporteDiscipuladoModule() {
    }
    ReporteDiscipuladoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_reporte_discipulado_routing__WEBPACK_IMPORTED_MODULE_6__["ReporteDiscipuladoRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_reporte_discipulado_component__WEBPACK_IMPORTED_MODULE_7__["ReporteDiscipuladoComponent"], _reporte_editar_reporte_editar_component__WEBPACK_IMPORTED_MODULE_4__["ReporteEditarComponent"], _reporte_form_reporte_form_component__WEBPACK_IMPORTED_MODULE_5__["ReporteFormComponent"], _asistencia_asistencia_component__WEBPACK_IMPORTED_MODULE_8__["AsistenciaComponent"]]
        })
    ], ReporteDiscipuladoModule);
    return ReporteDiscipuladoModule;
}());



/***/ }),

/***/ "./src/app/reporte-discipulado/reporte-discipulado.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/reporte-discipulado/reporte-discipulado.routing.ts ***!
  \********************************************************************/
/*! exports provided: ReporteDiscipuladoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteDiscipuladoRoutes", function() { return ReporteDiscipuladoRoutes; });
/* harmony import */ var _reporte_discipulado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporte-discipulado.component */ "./src/app/reporte-discipulado/reporte-discipulado.component.ts");
/* harmony import */ var _reporte_editar_reporte_editar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reporte-editar/reporte-editar.component */ "./src/app/reporte-discipulado/reporte-editar/reporte-editar.component.ts");
/* harmony import */ var _reporte_form_reporte_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reporte-form/reporte-form.component */ "./src/app/reporte-discipulado/reporte-form/reporte-form.component.ts");
/* harmony import */ var _asistencia_asistencia_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asistencia/asistencia.component */ "./src/app/reporte-discipulado/asistencia/asistencia.component.ts");




var ReporteDiscipuladoRoutes = [{
        path: '',
        children: [{
                path: 'reporte-discipulado',
                component: _reporte_discipulado_component__WEBPACK_IMPORTED_MODULE_0__["ReporteDiscipuladoComponent"]
            }, {
                path: 'crear-reporte-discipulado',
                component: _reporte_form_reporte_form_component__WEBPACK_IMPORTED_MODULE_2__["ReporteFormComponent"]
            }, {
                path: 'editar-reporte-discipulado/:id',
                component: _reporte_editar_reporte_editar_component__WEBPACK_IMPORTED_MODULE_1__["ReporteEditarComponent"]
            }, {
                path: 'asistencia-discipulado/:id',
                component: _asistencia_asistencia_component__WEBPACK_IMPORTED_MODULE_3__["AsistenciaComponent"]
            }]
    }];


/***/ }),

/***/ "./src/app/reporte-discipulado/reporte-editar/reporte-editar.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/reporte-discipulado/reporte-editar/reporte-editar.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reporte-discipulado/reporte-editar/reporte-editar.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/reporte-discipulado/reporte-editar/reporte-editar.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Editar Reporte</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/reporte-discipulado']\" routerLinkActive=\"active\">Listado Reportes</a></li>\n                    <li class=\"breadcrumb-item\"><a>Editar Reporte</a></li>\n                  </ol>\n                </nav>\n              <form #documentoForm=\"ngForm\" (ngSubmit)=\"updateDocumento()\">\n                  <label>Discipulado</label>\n                  <div class=\"form-group\">\n                    <select name=\"discipulado\" class=\"form-control\" [(ngModel)]=\"documento.data['discipulado']\" required>\n                     <option value=\"{{documento2.id}}\" *ngFor=\"let documento2 of documentos2\">{{documento2.data['discipulado']}}</option>\n                    </select>\n                  </div>\n                  <label>Fecha</label>\n                  <div class=\"form-group\">\n                    <input type=\"date\" class=\"form-control\" name=\"fecha\" [(ngModel)]=\"documento.data['fecha']\" required>\n                  </div>  \n                  <label>Hora</label>\n                  <div class=\"form-group\">\n                    <input type=\"time\" class=\"form-control\" name=\"hora\" [(ngModel)]=\"documento.data['hora']\" required>\n                  </div>  \n                    <label>Asistieron</label>\n                    <div class=\"form-group\">\n                      <input type=\"number\" class=\"form-control\" name=\"asistieron\" [(ngModel)]=\"documento.data['asistieron']\" required>\n                    </div>                      \n                    <label>Observaciones</label>\n                    <div class=\"form-group\">\n                      <textarea name=\"observaciones\" ngModel></textarea>\n                    </div>   \n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Editar Grupo</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/reporte-discipulado/reporte-editar/reporte-editar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/reporte-discipulado/reporte-editar/reporte-editar.component.ts ***!
  \********************************************************************************/
/*! exports provided: ReporteEditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteEditarComponent", function() { return ReporteEditarComponent; });
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





var ReporteEditarComponent = /** @class */ (function () {
    function ReporteEditarComponent(route, apiService, notificationsService) {
        this.route = route;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documento = [];
        this.coleccion = 'reporte_discipulado';
        this.documentos2 = {};
        this.coleccion2 = 'discipulado';
    }
    ReporteEditarComponent.prototype.ngOnInit = function () {
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
    };
    ReporteEditarComponent.prototype.updateDocumento = function () {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.updateDocumento(_this.coleccion, {
                    discipulado: _this.documento.data['discipulado'],
                    fecha: _this.documento.data['fecha'],
                    hora: _this.documento.data['hora'],
                    asistieron: _this.documento.data['asistieron'],
                    observaciones: _this.documento.data['observaciones']
                }, _this.documento.id).then(function (respuesta) {
                    _this.notificationsService.showSwal('Editado', 'El reporte ha sido editado con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    ReporteEditarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporte-editar',
            template: __webpack_require__(/*! ./reporte-editar.component.html */ "./src/app/reporte-discipulado/reporte-editar/reporte-editar.component.html"),
            styles: [__webpack_require__(/*! ./reporte-editar.component.css */ "./src/app/reporte-discipulado/reporte-editar/reporte-editar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], ReporteEditarComponent);
    return ReporteEditarComponent;
}());



/***/ }),

/***/ "./src/app/reporte-discipulado/reporte-form/reporte-form.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/reporte-discipulado/reporte-form/reporte-form.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reporte-discipulado/reporte-form/reporte-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/reporte-discipulado/reporte-form/reporte-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Nuevo Reporte</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/reporte-discipulado']\" routerLinkActive=\"active\">Listado Reportes</a></li>\n                    <li class=\"breadcrumb-item\"><a>Crear Reporte</a></li>\n                  </ol>\n                </nav>\n              <form #documentoForm=\"ngForm\" (ngSubmit)=\"addDocumento(documentoForm)\">\n                  <label>Discipulado</label>\n                  <div class=\"form-group\">\n                    <select name=\"discipulado\" class=\"form-control\" ngModel required>\n                     <option value=\"{{discipulado.id}}\" *ngFor=\"let discipulado of discipulados\">{{discipulado.data['discipulado']}}</option>\n                    </select>\n                  </div>\n                  <label>Fecha</label>\n                  <div class=\"form-group\">\n                    <input type=\"date\" class=\"form-control\" name=\"fecha\" ngModel required>\n                  </div>  \n                  <label>Hora</label>\n                  <div class=\"form-group\">\n                    <input type=\"time\" class=\"form-control\" name=\"hora\" ngModel required>\n                  </div>  \n                    <label>Asistieron</label>\n                    <div class=\"form-group\">\n                      <input type=\"number\" class=\"form-control\" name=\"asistieron\" ngModel required>\n                    </div>  \n                    <label>Observaciones</label>\n                    <div class=\"form-group\">\n                      <textarea name=\"observaciones\" ngModel></textarea>\n                    </div>      \n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Agregar Reporte</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/reporte-discipulado/reporte-form/reporte-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/reporte-discipulado/reporte-form/reporte-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: ReporteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteFormComponent", function() { return ReporteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/api.service */ "./src/app/servicios/api.service.ts");
/* harmony import */ var app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/servicios/notifications.service */ "./src/app/servicios/notifications.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReporteFormComponent = /** @class */ (function () {
    function ReporteFormComponent(apiService, notificationsService) {
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documentos = {};
        this.coleccion = 'reporte_discipulado';
        this.discipulados = [];
    }
    ReporteFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('discipulado').onSnapshot(function (snapshot) {
            _this.discipulados = [];
            snapshot.forEach(function (doc) {
                _this.discipulados.push({
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
            });
        });
    };
    ReporteFormComponent.prototype.addDocumento = function (form) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.addDocumento(_this.coleccion, {
                    discipulado: form.value.discipulado,
                    fecha: form.value.fecha,
                    hora: form.value.hora,
                    asistieron: form.value.asistieron,
                    observaciones: form.value.observaciones
                }).then(function (respuesta) {
                    _this.notificationsService.showSwal('Creado', 'El reporte ha sido creada con éxito', 'success');
                    form.resetForm();
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    ReporteFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporte-form',
            template: __webpack_require__(/*! ./reporte-form.component.html */ "./src/app/reporte-discipulado/reporte-form/reporte-form.component.html"),
            styles: [__webpack_require__(/*! ./reporte-form.component.css */ "./src/app/reporte-discipulado/reporte-form/reporte-form.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])
    ], ReporteFormComponent);
    return ReporteFormComponent;
}());



/***/ })

}]);
//# sourceMappingURL=reporte-discipulado-reporte-discipulado-module.js.map