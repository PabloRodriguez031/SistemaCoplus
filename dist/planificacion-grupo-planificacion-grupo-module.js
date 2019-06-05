(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planificacion-grupo-planificacion-grupo-module"],{

/***/ "./src/app/planificacion-grupo/planificacion-editar/planificacion-editar.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/planificacion-grupo/planificacion-editar/planificacion-editar.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/planificacion-grupo/planificacion-editar/planificacion-editar.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/planificacion-grupo/planificacion-editar/planificacion-editar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Editar Planificación</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/planificacion-grupo']\" routerLinkActive=\"active\">Listado Planificaciones</a></li>\n                    <li class=\"breadcrumb-item\"><a>Editar Planificación</a></li>\n                  </ol>\n                </nav>\n              <form #documentoForm=\"ngForm\" (ngSubmit)=\"updateDocumento()\">\n\n                  <label>Tema</label>\n                  <div class=\"form-group\">\n                      <select name=\"tema\" class=\"form-control\" [(ngModel)]=\"documento.data['tema']\" required>\n                        <option value=\"{{documento2.id}}\" *ngFor=\"let documento2 of documentos2\">{{documento2.data['nombre']}}</option>\n                      </select>\n                    </div>\n                  <label>Fecha</label>\n                  <div class=\"form-group\">\n                    <input type=\"date\" class=\"form-control\" name=\"fecha\" [(ngModel)]=\"documento.data['fecha']\" required>\n                  </div>\n                  <label>Grupos al que pertenece</label> \n                  <div class=\"form-group\">\n                    <select name=\"grupo\" class=\"form-control\" [(ngModel)]=\"documento.data['grupo']\" required>\n                      <option value=\"{{documento3.id}}\" *ngFor=\"let documento3 of documentos3\">{{documento3.data['nombre']}}</option>\n                    </select>\n                  </div>\n                  <label>Predicador</label> \n                  <div class=\"form-group\">\n                    <select name=\"predicador\" class=\"form-control\" [(ngModel)]=\"documento.data['predicador']\" required>\n                        <option value=\"{{documento4.id}}\" *ngFor=\"let documento4 of documentos4\">{{documento4.data['nombre']}} {{documento4.data['apellido']}}</option>\n                    </select>\n                  </div>\n                  <label>Bienvenida y visión</label> \n                  <div class=\"form-group\">\n                    <select name=\"bienvenida_vision\" class=\"form-control\" [(ngModel)]=\"documento.data['bienvenida_vision']\" required>\n                        <option value=\"{{documento4.id}}\" *ngFor=\"let documento4 of documentos4\">{{documento4.data['nombre']}} {{documento4.data['apellido']}}</option> \n                      </select>\n                  </div>\n                  <label>Ofrenda</label> \n                  <div class=\"form-group\">\n                    <select name=\"ofrenda\" class=\"form-control\" [(ngModel)]=\"documento.data['ofrenda']\" required>\n                        <option value=\"{{documento4.id}}\" *ngFor=\"let documento4 of documentos4\">{{documento4.data['nombre']}} {{documento4.data['apellido']}}</option>              \n                      </select>\n                  </div>\n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Editar Grupo</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/planificacion-grupo/planificacion-editar/planificacion-editar.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/planificacion-grupo/planificacion-editar/planificacion-editar.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PlanificacionEditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanificacionEditarComponent", function() { return PlanificacionEditarComponent; });
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





var PlanificacionEditarComponent = /** @class */ (function () {
    function PlanificacionEditarComponent(route, apiService, notificationsService) {
        this.route = route;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documento = [];
        this.coleccion = 'planificacion_grupo';
        this.documentos2 = {};
        this.coleccion2 = 'predica';
        this.documentos3 = {};
        this.coleccion3 = 'grupo';
        this.documentos4 = {};
        this.coleccion4 = 'usuario';
    }
    PlanificacionEditarComponent.prototype.ngOnInit = function () {
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
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection(this.coleccion4).where("graduado", "==", "Si").onSnapshot(function (snapshot) {
            _this.documentos4 = [];
            snapshot.forEach(function (doc) {
                _this.documentos4.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
        });
    };
    PlanificacionEditarComponent.prototype.updateDocumento = function () {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.updateDocumento(_this.coleccion, {
                    tema: _this.documento.data['tema'],
                    fecha: _this.documento.data['fecha'],
                    grupo: _this.documento.data['grupo'],
                    predicador: _this.documento.data['predicador'],
                    bienvenida_vision: _this.documento.data['bienvenida_vision'],
                    ofrenda: _this.documento.data['ofrenda']
                }, _this.documento.id).then(function (respuesta) {
                    _this.notificationsService.showSwal('Editado', 'La planificacion ha sido editada con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    PlanificacionEditarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planificacion-editar',
            template: __webpack_require__(/*! ./planificacion-editar.component.html */ "./src/app/planificacion-grupo/planificacion-editar/planificacion-editar.component.html"),
            styles: [__webpack_require__(/*! ./planificacion-editar.component.css */ "./src/app/planificacion-grupo/planificacion-editar/planificacion-editar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], PlanificacionEditarComponent);
    return PlanificacionEditarComponent;
}());



/***/ }),

/***/ "./src/app/planificacion-grupo/planificacion-form/planificacion-form.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/planificacion-grupo/planificacion-form/planificacion-form.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/planificacion-grupo/planificacion-form/planificacion-form.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/planificacion-grupo/planificacion-form/planificacion-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Nueva Planificacion de grupo</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/planificacion-grupo']\" routerLinkActive=\"active\">Listado Planificaciones</a></li>\n                    <li class=\"breadcrumb-item\"><a>Crear Planificación</a></li>\n                  </ol>\n                </nav>\n              <form #documentoForm=\"ngForm\" (ngSubmit)=\"addDocumento(documentoForm)\">\n                <label>Grupo al que pertenece</label> \n                <div class=\"form-group\">\n                  <select name=\"grupo\" class=\"form-control\" ngModel required>\n                    <option value=\"{{documento3.id}}\" *ngFor=\"let documento3 of documentos3\">{{documento3.data['nombre']}}</option>\n                  </select>\n                </div> \n                <label>Tema</label> \n                  <div class=\"form-group\">\n                    <select name=\"tema\" class=\"form-control\" ngModel required>\n                      <option value=\"{{documento2.id}}\" *ngFor=\"let documento2 of documentos2\">{{documento2.data['nombre']}}</option>\n                    </select>\n                  <label>Fecha a realizar</label>\n                  <div class=\"form-group\">\n                    <input type=\"date\" class=\"form-control\" name=\"fecha\" ngModel required>\n                  </div>                    \n                  </div>\n                  <label>Predicador</label> \n                  <div class=\"form-group\">\n                    <select name=\"predicador\" class=\"form-control\" ngModel required>\n                      <option value=\"{{documento4.id}}\" *ngFor=\"let documento4 of documentos4\">{{documento4.data['nombre']}} {{documento4.data['apellido']}}</option>\n                    </select>\n                  </div> \n                  <label>Bienvenida y visión</label> \n                  <div class=\"form-group\">\n                    <select name=\"bienvenida_vision\" class=\"form-control\" ngModel required>\n                        <option value=\"{{documento4.id}}\" *ngFor=\"let documento4 of documentos4\">{{documento4.data['nombre']}} {{documento4.data['apellido']}}</option>                    \n                      </select>\n                  </div> \n                  <label>Ofrenda</label> \n                  <div class=\"form-group\">\n                    <select name=\"ofrenda\" class=\"form-control\" ngModel required>\n                        <option value=\"{{documento4.id}}\" *ngFor=\"let documento4 of documentos4\">{{documento4.data['nombre']}} {{documento4.data['apellido']}}</option>                    \n                      </select>\n                  </div>                                               \n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Agregar Planificación</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/planificacion-grupo/planificacion-form/planificacion-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/planificacion-grupo/planificacion-form/planificacion-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PlanificacionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanificacionFormComponent", function() { return PlanificacionFormComponent; });
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




var PlanificacionFormComponent = /** @class */ (function () {
    function PlanificacionFormComponent(apiService, notificationsService) {
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documentos = {};
        this.coleccion = 'planificacion_grupo';
        this.documentos2 = {};
        this.coleccion2 = 'predica';
        this.documentos3 = {};
        this.coleccion3 = 'grupo';
        this.documentos4 = {};
        this.coleccion4 = 'usuario';
    }
    PlanificacionFormComponent.prototype.ngOnInit = function () {
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
        firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection(this.coleccion4).where("graduado", "==", "Si").onSnapshot(function (snapshot) {
            _this.documentos4 = [];
            snapshot.forEach(function (doc) {
                _this.documentos4.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
        });
    };
    PlanificacionFormComponent.prototype.addDocumento = function (form) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.addDocumento(_this.coleccion, {
                    tema: form.value.tema,
                    fecha: form.value.fecha,
                    grupo: form.value.grupo,
                    predicador: form.value.predicador,
                    bienvenida_vision: form.value.bienvenida_vision,
                    ofrenda: form.value.ofrenda
                }).then(function (respuesta) {
                    _this.notificationsService.showSwal('Creado', 'La planificacion ha sido creada con éxito', 'success');
                    form.resetForm();
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    PlanificacionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planificacion-form',
            template: __webpack_require__(/*! ./planificacion-form.component.html */ "./src/app/planificacion-grupo/planificacion-form/planificacion-form.component.html"),
            styles: [__webpack_require__(/*! ./planificacion-form.component.css */ "./src/app/planificacion-grupo/planificacion-form/planificacion-form.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], PlanificacionFormComponent);
    return PlanificacionFormComponent;
}());



/***/ }),

/***/ "./src/app/planificacion-grupo/planificacion-grupo.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/planificacion-grupo/planificacion-grupo.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acciontabla{\r\n    margin: 0 5px;\r\n}"

/***/ }),

/***/ "./src/app/planificacion-grupo/planificacion-grupo.component.html":
/*!************************************************************************!*\
  !*** ./src/app/planificacion-grupo/planificacion-grupo.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\">Lista de Planificaciones</h4>\n          </div>\n          <div class=\"card-body \">\n            <div class=\"toolbar\">\n              <button class=\"btn btn-primary\" [routerLink]=\"['/crear-planificacion-grupo']\">Crear Planificación</button>\n            </div>              \n            <div class=\"col-md-12\">\n              <div class=\"table-responsive\">\n              <table class=\"table\">\n                <tr>\n                  <th>Tema</th>\n                  <th>Fecha</th>\n                  <th>Grupo</th>\n                  <th>Predicador</th>\n                  <th>Bienvenida y visión</th>\n                  <th>Ofrenda</th>\n                  <th class=\"text-right\">Acción</th>\n                </tr>\n                <tr *ngFor=\"let documento of documentos\">\n                    <td>{{documento.data['predica_nombre']}}</td>\n                    <td>{{documento.data['fecha']}}</td>\n                    <td>{{documento.data['grupo_nombre']}}</td>\n                    <td>{{documento.data['predicador_nombre']}} {{documento.data['predicador_apellido']}}</td>\n                    <td>{{documento.data['bienvenida_vision_nombre']}} {{documento.data['bienvenida_vision_apellido']}}</td>\n                    <td>{{documento.data['ofrenda_nombre']}} {{documento.data['ofrenda_apellido']}}</td>\n                    <td class=\"text-right\">\n                      <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"editDocumento(documento)\">\n                          <i class=\"nc-icon nc-zoom-split\"></i>\n                      </button>\n                      <button class=\"btn btn-danger btn-sm acciontabla\" (click)=\"deleteDocumento(documento)\">\n                          <i class=\"nc-icon nc-simple-remove\"></i>\n                        </button>\n                  </td>\n                </tr>\n              </table>\n              </div>\n            </div>\n  \n        </div>\n      </div>  \n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/planificacion-grupo/planificacion-grupo.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/planificacion-grupo/planificacion-grupo.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlanificacionGrupoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanificacionGrupoComponent", function() { return PlanificacionGrupoComponent; });
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





var PlanificacionGrupoComponent = /** @class */ (function () {
    function PlanificacionGrupoComponent(apiService, router, notificationsService) {
        this.apiService = apiService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.documentos = [];
        this.coleccion = 'planificacion_grupo';
        this.predicas = [];
        this.grupos = [];
        this.usuarios = [];
    }
    PlanificacionGrupoComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('predica').onSnapshot(function (snapshot) {
            _this.predicas = [];
            snapshot.forEach(function (doc) {
                _this.predicas.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('grupo').onSnapshot(function (snapshot) {
                _this.grupos = [];
                snapshot.forEach(function (doc) {
                    _this.grupos.push({
                        id: doc.id,
                        data: doc.data()
                    });
                });
                firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('usuario').onSnapshot(function (snapshot) {
                    _this.usuarios = [];
                    snapshot.forEach(function (doc) {
                        _this.usuarios.push({
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
                        _this.documentos.forEach(function (tema) {
                            _this.predicas.forEach(function (predica) {
                                if (tema.data['tema'] === predica.id) {
                                    tema.data['predica_nombre'] = predica.data['nombre'];
                                }
                            });
                            _this.grupos.forEach(function (grupo) {
                                if (tema.data['grupo'] === grupo.id) {
                                    tema.data['grupo_nombre'] = grupo.data['nombre'];
                                }
                            });
                            _this.usuarios.forEach(function (usuario) {
                                if (tema.data['predicador'] === usuario.id) {
                                    tema.data['predicador_nombre'] = usuario.data['nombre'];
                                    tema.data['predicador_apellido'] = usuario.data['apellido'];
                                }
                            });
                            _this.usuarios.forEach(function (usuario) {
                                if (tema.data['bienvenida_vision'] === usuario.id) {
                                    tema.data['bienvenida_vision_nombre'] = usuario.data['nombre'];
                                    tema.data['bienvenida_vision_apellido'] = usuario.data['apellido'];
                                }
                            });
                            _this.usuarios.forEach(function (usuario) {
                                if (tema.data['ofrenda'] === usuario.id) {
                                    tema.data['ofrenda_nombre'] = usuario.data['nombre'];
                                    tema.data['ofrenda_apellido'] = usuario.data['apellido'];
                                }
                            });
                        });
                    });
                });
            });
        });
    };
    PlanificacionGrupoComponent.prototype.deleteDocumento = function (documento) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.deleteDocumento(_this.coleccion, documento).then(function (respuesta) {
                    _this.notificationsService.showSwal('Borrado', 'La planificacion ha sido borrada con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    PlanificacionGrupoComponent.prototype.editDocumento = function (documento) {
        this.router.navigate(['/editar-planificacion-grupo', documento.id]);
    };
    PlanificacionGrupoComponent.prototype.reporteGrupo = function (documento) {
        this.router.navigate(['/reporte-grupo', documento.id]);
    };
    PlanificacionGrupoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planificacion-grupo',
            template: __webpack_require__(/*! ./planificacion-grupo.component.html */ "./src/app/planificacion-grupo/planificacion-grupo.component.html"),
            styles: [__webpack_require__(/*! ./planificacion-grupo.component.css */ "./src/app/planificacion-grupo/planificacion-grupo.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], PlanificacionGrupoComponent);
    return PlanificacionGrupoComponent;
}());



/***/ }),

/***/ "./src/app/planificacion-grupo/planificacion-grupo.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/planificacion-grupo/planificacion-grupo.module.ts ***!
  \*******************************************************************/
/*! exports provided: PlanificacionGrupoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanificacionGrupoModule", function() { return PlanificacionGrupoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _planificacion_grupo_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./planificacion-grupo.routing */ "./src/app/planificacion-grupo/planificacion-grupo.routing.ts");
/* harmony import */ var _planificacion_grupo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planificacion-grupo.component */ "./src/app/planificacion-grupo/planificacion-grupo.component.ts");
/* harmony import */ var _planificacion_form_planificacion_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planificacion-form/planificacion-form.component */ "./src/app/planificacion-grupo/planificacion-form/planificacion-form.component.ts");
/* harmony import */ var _planificacion_editar_planificacion_editar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./planificacion-editar/planificacion-editar.component */ "./src/app/planificacion-grupo/planificacion-editar/planificacion-editar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PlanificacionGrupoModule = /** @class */ (function () {
    function PlanificacionGrupoModule() {
    }
    PlanificacionGrupoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_planificacion_grupo_routing__WEBPACK_IMPORTED_MODULE_4__["PlanificacionGrupoRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_planificacion_grupo_component__WEBPACK_IMPORTED_MODULE_5__["PlanificacionGrupoComponent"], _planificacion_form_planificacion_form_component__WEBPACK_IMPORTED_MODULE_6__["PlanificacionFormComponent"], _planificacion_editar_planificacion_editar_component__WEBPACK_IMPORTED_MODULE_7__["PlanificacionEditarComponent"]]
        })
    ], PlanificacionGrupoModule);
    return PlanificacionGrupoModule;
}());



/***/ }),

/***/ "./src/app/planificacion-grupo/planificacion-grupo.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/planificacion-grupo/planificacion-grupo.routing.ts ***!
  \********************************************************************/
/*! exports provided: PlanificacionGrupoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanificacionGrupoRoutes", function() { return PlanificacionGrupoRoutes; });
/* harmony import */ var _planificacion_grupo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planificacion-grupo.component */ "./src/app/planificacion-grupo/planificacion-grupo.component.ts");
/* harmony import */ var _planificacion_form_planificacion_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planificacion-form/planificacion-form.component */ "./src/app/planificacion-grupo/planificacion-form/planificacion-form.component.ts");
/* harmony import */ var _planificacion_editar_planificacion_editar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planificacion-editar/planificacion-editar.component */ "./src/app/planificacion-grupo/planificacion-editar/planificacion-editar.component.ts");



var PlanificacionGrupoRoutes = [{
        path: '',
        children: [{
                path: 'planificacion-grupo',
                component: _planificacion_grupo_component__WEBPACK_IMPORTED_MODULE_0__["PlanificacionGrupoComponent"]
            }, {
                path: 'crear-planificacion-grupo',
                component: _planificacion_form_planificacion_form_component__WEBPACK_IMPORTED_MODULE_1__["PlanificacionFormComponent"]
            }, {
                path: 'editar-planificacion-grupo/:id',
                component: _planificacion_editar_planificacion_editar_component__WEBPACK_IMPORTED_MODULE_2__["PlanificacionEditarComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=planificacion-grupo-planificacion-grupo-module.js.map