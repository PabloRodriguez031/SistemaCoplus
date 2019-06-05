(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["predica-predica-module"],{

/***/ "./src/app/predica/predica-editar/predica-editar.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/predica/predica-editar/predica-editar.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/predica/predica-editar/predica-editar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/predica/predica-editar/predica-editar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Editar Predica</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/predica']\" routerLinkActive=\"active\">Listado Predicas</a></li>\n                    <li class=\"breadcrumb-item\"><a>Editar Predica</a></li>\n                  </ol>\n                </nav>\n              <form #documentoForm=\"ngForm\" (ngSubmit)=\"updateDocumento()\">\n                  <label>Nombre de la predica</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"nombre\" [(ngModel)]=\"documento.data['nombre']\" required>\n                  </div>\n                  <label>Mes al cual corresponde</label>\n                  <div class=\"form-group\">\n                    <select class=\"form-control\" name=\"mes\" [(ngModel)]=\"documento.data['mes']\" required>\n                      <option value=\"Enero\">Enero</option>\n                      <option value=\"Febrero\">Febrero</option>\n                      <option value=\"Marzo\">Marzo</option>\n                      <option value=\"Abril\">Abril</option>\n                      <option value=\"Mayo\">Mayo</option>\n                      <option value=\"Junio\">Junio</option>\n                      <option value=\"Julio\">Julio</option>\n                      <option value=\"Agosto\">Agosto</option>\n                      <option value=\"Septiembre\">Septiembre</option>\n                      <option value=\"Octubre\">Octubre</option>\n                      <option value=\"Noviembre\">Noviembre</option>\n                      <option value=\"Diciembre\">Diciembre</option>\n                    </select>\n                  </div>\n                  <label>Semana</label>\n                  <div class=\"form-group\">\n                    <input type=\"number\" class=\"form-control\" name=\"semana\" [(ngModel)]=\"documento.data['semana']\" required>\n                  </div>\n                  <label>Versiculos</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"versiculos\" [(ngModel)]=\"documento.data['versiculos']\" required>\n                  </div>\n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Editar Predica</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/predica/predica-editar/predica-editar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/predica/predica-editar/predica-editar.component.ts ***!
  \********************************************************************/
/*! exports provided: PredicaEditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredicaEditarComponent", function() { return PredicaEditarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicios_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/api.service */ "./src/app/servicios/api.service.ts");
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




var PredicaEditarComponent = /** @class */ (function () {
    function PredicaEditarComponent(route, apiService, notificationsService) {
        this.route = route;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documento = [];
        this.coleccion = 'predica';
    }
    PredicaEditarComponent.prototype.ngOnInit = function () {
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
    };
    PredicaEditarComponent.prototype.updateDocumento = function () {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.updateDocumento(_this.coleccion, {
                    nombre: _this.documento.data['nombre'],
                    mes: _this.documento.data['mes'],
                    semana: _this.documento.data['semana'],
                    versiculos: _this.documento.data['versiculos']
                }, _this.documento.id).then(function (respuesta) {
                    _this.notificationsService.showSwal('Editado', 'La predica ha sido editada con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    PredicaEditarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-predica-editar',
            template: __webpack_require__(/*! ./predica-editar.component.html */ "./src/app/predica/predica-editar/predica-editar.component.html"),
            styles: [__webpack_require__(/*! ./predica-editar.component.css */ "./src/app/predica/predica-editar/predica-editar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], PredicaEditarComponent);
    return PredicaEditarComponent;
}());



/***/ }),

/***/ "./src/app/predica/predica-form/predica-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/predica/predica-form/predica-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/predica/predica-form/predica-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/predica/predica-form/predica-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Nueva Predica</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/predica']\" routerLinkActive=\"active\">Listado Predicas</a></li>\n                    <li class=\"breadcrumb-item\"><a>Crear Predica</a></li>\n                  </ol>\n                </nav>\n              <form #documentoForm=\"ngForm\" (ngSubmit)=\"addDocumento(documentoForm)\">\n                  <label>Nombre de la predica</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"nombre\" ngModel required>\n                  </div>\n                  <label>Mes al cual corresponde</label>\n                  <div class=\"form-group\">\n                    <select class=\"form-control\" name=\"mes\" ngModel required>\n                      <option value=\"Enero\">Enero</option>\n                      <option value=\"Febrero\">Febrero</option>\n                      <option value=\"Marzo\">Marzo</option>\n                      <option value=\"Abril\">Abril</option>\n                      <option value=\"Mayo\">Mayo</option>\n                      <option value=\"Junio\">Junio</option>\n                      <option value=\"Julio\">Julio</option>\n                      <option value=\"Agosto\">Agosto</option>\n                      <option value=\"Septiembre\">Septiembre</option>\n                      <option value=\"Octubre\">Octubre</option>\n                      <option value=\"Noviembre\">Noviembre</option>\n                      <option value=\"Diciembre\">Diciembre</option>\n                    </select>\n                  </div>\n                  <label>Semana</label>\n                  <div class=\"form-group\">\n                    <input type=\"number\" class=\"form-control\" name=\"semana\" ngModel required>\n                  </div>\n                  <label>Versículos que debe llevar la predica</label>\n                  <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" name=\"versiculos\" ngModel required placeholder=\"Ej: Genesis 1:1, Hebreos 2:10, Juan 1:1\">\n                    </div>\n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Agregar Predica</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/predica/predica-form/predica-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/predica/predica-form/predica-form.component.ts ***!
  \****************************************************************/
/*! exports provided: PredicaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredicaFormComponent", function() { return PredicaFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/api.service */ "./src/app/servicios/api.service.ts");
/* harmony import */ var app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/servicios/notifications.service */ "./src/app/servicios/notifications.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PredicaFormComponent = /** @class */ (function () {
    function PredicaFormComponent(apiService, notificationsService) {
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documentos = {};
        this.coleccion = 'predica';
    }
    PredicaFormComponent.prototype.ngOnInit = function () {
    };
    PredicaFormComponent.prototype.addDocumento = function (form) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.addDocumento(_this.coleccion, {
                    nombre: form.value.nombre,
                    mes: form.value.mes,
                    semana: form.value.semana,
                    versiculos: form.value.versiculos
                }).then(function (respuesta) {
                    _this.notificationsService.showSwal('Creado', 'La predica ha sido creada con éxito', 'success');
                    form.resetForm();
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    PredicaFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-predica-form',
            template: __webpack_require__(/*! ./predica-form.component.html */ "./src/app/predica/predica-form/predica-form.component.html"),
            styles: [__webpack_require__(/*! ./predica-form.component.css */ "./src/app/predica/predica-form/predica-form.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])
    ], PredicaFormComponent);
    return PredicaFormComponent;
}());



/***/ }),

/***/ "./src/app/predica/predica.component.css":
/*!***********************************************!*\
  !*** ./src/app/predica/predica.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acciontabla{\r\n    margin: 0 5px;\r\n}"

/***/ }),

/***/ "./src/app/predica/predica.component.html":
/*!************************************************!*\
  !*** ./src/app/predica/predica.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\">Lista de Predicas</h4>\n          </div>\n          <div class=\"card-body \">\n            <div class=\"toolbar\">\n              <button class=\"btn btn-primary\" [routerLink]=\"['/crear-predica']\">Crear Predica</button>\n            </div>              \n            <div class=\"col-md-12\">\n              <div class=\"table-responsive\">\n              <table class=\"table\">\n                <tr>\n                  <th>Nombre</th>\n                  <th>Mes</th>\n                  <th>Semana</th>\n                  <th class=\"text-right\">Acción</th>\n                </tr>\n                <tr *ngFor=\"let documento of documentos\">\n                    <td>{{documento.data['nombre']}}</td>\n                    <td>{{documento.data['mes']}}</td>\n                    <td>{{documento.data['semana']}}</td>\n                    <td class=\"text-right\">\n                      <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"editDocumento(documento)\">\n                          <i class=\"nc-icon nc-zoom-split\"></i>\n                      </button>\n                      <button class=\"btn btn-danger btn-sm acciontabla\" (click)=\"deleteDocumento(documento)\">\n                          <i class=\"nc-icon nc-simple-remove\"></i>\n                        </button>\n                  </td>\n                </tr>\n              </table>\n              </div>\n            </div>\n  \n        </div>\n      </div>  \n    </div>\n  \n  </div>\n  \n"

/***/ }),

/***/ "./src/app/predica/predica.component.ts":
/*!**********************************************!*\
  !*** ./src/app/predica/predica.component.ts ***!
  \**********************************************/
/*! exports provided: PredicaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredicaComponent", function() { return PredicaComponent; });
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





var PredicaComponent = /** @class */ (function () {
    function PredicaComponent(apiService, router, notificationsService) {
        this.apiService = apiService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.documentos = [];
        this.coleccion = 'predica';
    }
    PredicaComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection(this.coleccion).onSnapshot(function (snapshot) {
            _this.documentos = [];
            snapshot.forEach(function (doc) {
                _this.documentos.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
        });
    };
    PredicaComponent.prototype.deleteDocumento = function (documento) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.deleteDocumento(_this.coleccion, documento);
                _this.notificationsService.showSwal('Borrado', 'La predica ha sido borrada con éxito', 'success');
            }
        });
    };
    PredicaComponent.prototype.editDocumento = function (documento) {
        this.router.navigate(['/editar-predica', documento.id]);
    };
    PredicaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-predica',
            template: __webpack_require__(/*! ./predica.component.html */ "./src/app/predica/predica.component.html"),
            styles: [__webpack_require__(/*! ./predica.component.css */ "./src/app/predica/predica.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], PredicaComponent);
    return PredicaComponent;
}());



/***/ }),

/***/ "./src/app/predica/predica.module.ts":
/*!*******************************************!*\
  !*** ./src/app/predica/predica.module.ts ***!
  \*******************************************/
/*! exports provided: PredicaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredicaModule", function() { return PredicaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _predica_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./predica.routing */ "./src/app/predica/predica.routing.ts");
/* harmony import */ var _predica_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./predica.component */ "./src/app/predica/predica.component.ts");
/* harmony import */ var _predica_form_predica_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./predica-form/predica-form.component */ "./src/app/predica/predica-form/predica-form.component.ts");
/* harmony import */ var _predica_editar_predica_editar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./predica-editar/predica-editar.component */ "./src/app/predica/predica-editar/predica-editar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PredicaModule = /** @class */ (function () {
    function PredicaModule() {
    }
    PredicaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_predica_routing__WEBPACK_IMPORTED_MODULE_4__["PredicaRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_predica_component__WEBPACK_IMPORTED_MODULE_5__["PredicaComponent"], _predica_form_predica_form_component__WEBPACK_IMPORTED_MODULE_6__["PredicaFormComponent"], _predica_editar_predica_editar_component__WEBPACK_IMPORTED_MODULE_7__["PredicaEditarComponent"]]
        })
    ], PredicaModule);
    return PredicaModule;
}());



/***/ }),

/***/ "./src/app/predica/predica.routing.ts":
/*!********************************************!*\
  !*** ./src/app/predica/predica.routing.ts ***!
  \********************************************/
/*! exports provided: PredicaRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredicaRoutes", function() { return PredicaRoutes; });
/* harmony import */ var _predica_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predica.component */ "./src/app/predica/predica.component.ts");
/* harmony import */ var _predica_form_predica_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./predica-form/predica-form.component */ "./src/app/predica/predica-form/predica-form.component.ts");
/* harmony import */ var _predica_editar_predica_editar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predica-editar/predica-editar.component */ "./src/app/predica/predica-editar/predica-editar.component.ts");



var PredicaRoutes = [{
        path: '',
        children: [{
                path: 'predica',
                component: _predica_component__WEBPACK_IMPORTED_MODULE_0__["PredicaComponent"]
            }, {
                path: 'crear-predica',
                component: _predica_form_predica_form_component__WEBPACK_IMPORTED_MODULE_1__["PredicaFormComponent"]
            }, {
                path: 'editar-predica/:id',
                component: _predica_editar_predica_editar_component__WEBPACK_IMPORTED_MODULE_2__["PredicaEditarComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=predica-predica-module.js.map