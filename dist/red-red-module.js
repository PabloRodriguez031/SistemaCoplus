(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["red-red-module"],{

/***/ "./src/app/red/red-editar/red-editar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/red/red-editar/red-editar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/red/red-editar/red-editar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/red/red-editar/red-editar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Editar Red</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/red']\" routerLinkActive=\"active\">Listado Redes</a></li>\n                    <li class=\"breadcrumb-item\"><a>Editar Red</a></li>\n                  </ol>\n                </nav>\n              <form #documentoForm=\"ngForm\" (ngSubmit)=\"updateDocumento()\">\n\n\n                  <label>Nombre de Red</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"descripcion\" [(ngModel)]=\"documento.data['descripcion']\" required>\n                  </div>\n                  <label>Iglesia a la que pertenece</label>\n                  <div class=\"form-group\">\n                    <select name=\"iglesia\" class=\"form-control\" [(ngModel)]=\"documento.data['iglesia']\" required>\n                      <option value=\"{{documento2.id}}\" *ngFor=\"let documento2 of documentos2\">{{documento2.data['nombre']}}</option>\n                    </select>\n                  </div>\n\n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Editar Red</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/red/red-editar/red-editar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/red/red-editar/red-editar.component.ts ***!
  \********************************************************/
/*! exports provided: RedEditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedEditarComponent", function() { return RedEditarComponent; });
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





var RedEditarComponent = /** @class */ (function () {
    function RedEditarComponent(route, apiService, notificationsService) {
        this.route = route;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documento = [];
        this.coleccion = 'red';
        this.documentos2 = [];
        this.coleccion2 = 'iglesia';
    }
    RedEditarComponent.prototype.ngOnInit = function () {
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
    RedEditarComponent.prototype.updateDocumento = function () {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.updateDocumento(_this.coleccion, {
                    descripcion: _this.documento.data['descripcion'],
                    iglesia: _this.documento.data['iglesia'],
                }, _this.documento.id).then(function (respuesta) {
                    _this.notificationsService.showSwal('Editado', 'La red ha sido editada con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    RedEditarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-red-editar',
            template: __webpack_require__(/*! ./red-editar.component.html */ "./src/app/red/red-editar/red-editar.component.html"),
            styles: [__webpack_require__(/*! ./red-editar.component.css */ "./src/app/red/red-editar/red-editar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], RedEditarComponent);
    return RedEditarComponent;
}());



/***/ }),

/***/ "./src/app/red/red-form/red-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/red/red-form/red-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/red/red-form/red-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/red/red-form/red-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Nueva Red</h4>\n        </div>\n        <div class=\"card-body\">\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                  <li class=\"breadcrumb-item\"><a [routerLink]=\"['/red']\" routerLinkActive=\"active\">Listado Redes</a></li>\n                  <li class=\"breadcrumb-item\"><a>Crear Red</a></li>\n                </ol>\n              </nav>\n            <form #documentoForm=\"ngForm\" (ngSubmit)=\"addDocumento(documentoForm)\">\n                <label>Nombre de Red</label>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"descripcion\" ngModel required>\n                </div>\n                <label>Iglesia a la que pertenece</label>\n                <div class=\"form-group\">\n                  <select name=\"iglesia\" class=\"form-control\" ngModel required>\n                    <option value=\"{{documento2.id}}\" *ngFor=\"let documento2 of documentos2\">{{documento2.data['nombre']}}</option>\n                  </select>\n                </div>\n                <div class=\"card-footer text-center\">\n                    <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Agregar Red</button>\n                  </div>\n              </form>                \n        </div>  \n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/red/red-form/red-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/red/red-form/red-form.component.ts ***!
  \****************************************************/
/*! exports provided: RedFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedFormComponent", function() { return RedFormComponent; });
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




var RedFormComponent = /** @class */ (function () {
    function RedFormComponent(apiService, notificationsService) {
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documentos = {};
        this.coleccion = 'red';
        this.documentos2 = {};
        this.coleccion2 = 'iglesia';
    }
    RedFormComponent.prototype.ngOnInit = function () {
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
    };
    RedFormComponent.prototype.addDocumento = function (form) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.addDocumento(_this.coleccion, {
                    descripcion: form.value.descripcion,
                    iglesia: form.value.iglesia,
                }).then(function (respuesta) {
                    _this.notificationsService.showSwal('Creado', 'La red ha sido creada con éxito', 'success');
                    form.resetForm();
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    RedFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-red-form',
            template: __webpack_require__(/*! ./red-form.component.html */ "./src/app/red/red-form/red-form.component.html"),
            styles: [__webpack_require__(/*! ./red-form.component.css */ "./src/app/red/red-form/red-form.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], RedFormComponent);
    return RedFormComponent;
}());



/***/ }),

/***/ "./src/app/red/red.component.css":
/*!***************************************!*\
  !*** ./src/app/red/red.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acciontabla{\r\n    margin: 0 5px;\r\n}"

/***/ }),

/***/ "./src/app/red/red.component.html":
/*!****************************************!*\
  !*** ./src/app/red/red.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">Lista de Redes</h4>\n        </div>\n        <div class=\"card-body \">\n          <div class=\"toolbar\">\n            <button class=\"btn btn-primary\" [routerLink]=\"['/crear-red']\">Crear Red</button>\n          </div>  \n          <label>Seleccione la iglesia de la cual desea ver sus redes</label>         \n          <div class=\"form-group\">             \n          <select name=\"iglesia_seleccionada\" class=\"form-control\" (change)=\"filtro_iglesia($event)\">\n            <option value=\"1\">Todos</option>\n            <option value=\"{{iglesia.id}}\" *ngFor=\"let iglesia of iglesias\">{{iglesia.data['nombre']}}</option>\n          </select>\n          </div>\n          <br>\n          <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n            <table class=\"table\">\n              <tr>\n                <th>Nombre</th>\n                <th>Iglesia</th>\n                <th class=\"text-right\">Acción</th>\n              </tr>\n              <tr *ngFor=\"let documento of documentos_filtrados\">\n                <td>{{documento.data['descripcion']}}</td>\n                <td>{{documento.data['iglesia_nombre']}}</td>\n                <td class=\"text-right\">\n                    <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"editDocumento(documento)\">\n                        <i class=\"nc-icon nc-zoom-split\"></i>\n                    </button>\n                    <button class=\"btn btn-danger btn-sm acciontabla\" (click)=\"deleteDocumento(documento)\">\n                        <i class=\"nc-icon nc-simple-remove\"></i>\n                      </button>\n                </td>\n              </tr>\n            </table>\n            </div>\n          </div>\n\n      </div>\n    </div>  \n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/red/red.component.ts":
/*!**************************************!*\
  !*** ./src/app/red/red.component.ts ***!
  \**************************************/
/*! exports provided: RedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedComponent", function() { return RedComponent; });
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





var RedComponent = /** @class */ (function () {
    function RedComponent(apiService, router, notificationsService) {
        this.apiService = apiService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.documentos = [];
        this.coleccion = 'red';
        this.iglesias = [];
        this.documentos_filtrados = [];
    }
    RedComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('iglesia').onSnapshot(function (snapshot) {
            _this.iglesias = [];
            snapshot.forEach(function (doc) {
                _this.iglesias.push({
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
                _this.documentos.forEach(function (red) {
                    _this.iglesias.forEach(function (iglesia) {
                        if (red.data['iglesia'] === iglesia.id) {
                            red.data['iglesia_nombre'] = iglesia.data['nombre'];
                        }
                    });
                });
                _this.documentos_filtrados = _this.documentos.slice();
            });
        });
    };
    RedComponent.prototype.deleteDocumento = function (documento) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.deleteDocumento(_this.coleccion, documento).then(function (respuesta) {
                    _this.notificationsService.showSwal('Borrado', 'La red ha sido borrada con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    RedComponent.prototype.editDocumento = function (documento) {
        this.router.navigate(['/editar-red', documento.id]);
    };
    RedComponent.prototype.filtro_iglesia = function (evento) {
        console.log(evento);
        if (evento.target.value == 1) {
            this.documentos_filtrados = this.documentos.slice();
        }
        else {
            this.documentos_filtrados = this.documentos.filter(function (red) {
                return red.data['iglesia'] === evento.target.value;
            });
        }
    };
    RedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-red',
            template: __webpack_require__(/*! ./red.component.html */ "./src/app/red/red.component.html"),
            styles: [__webpack_require__(/*! ./red.component.css */ "./src/app/red/red.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], RedComponent);
    return RedComponent;
}());



/***/ }),

/***/ "./src/app/red/red.module.ts":
/*!***********************************!*\
  !*** ./src/app/red/red.module.ts ***!
  \***********************************/
/*! exports provided: RedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedModule", function() { return RedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _red_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./red.component */ "./src/app/red/red.component.ts");
/* harmony import */ var _red_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./red.routing */ "./src/app/red/red.routing.ts");
/* harmony import */ var _red_form_red_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./red-form/red-form.component */ "./src/app/red/red-form/red-form.component.ts");
/* harmony import */ var _red_editar_red_editar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./red-editar/red-editar.component */ "./src/app/red/red-editar/red-editar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RedModule = /** @class */ (function () {
    function RedModule() {
    }
    RedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_red_routing__WEBPACK_IMPORTED_MODULE_5__["RedRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_red_component__WEBPACK_IMPORTED_MODULE_4__["RedComponent"], _red_form_red_form_component__WEBPACK_IMPORTED_MODULE_6__["RedFormComponent"], _red_editar_red_editar_component__WEBPACK_IMPORTED_MODULE_7__["RedEditarComponent"]]
        })
    ], RedModule);
    return RedModule;
}());



/***/ }),

/***/ "./src/app/red/red.routing.ts":
/*!************************************!*\
  !*** ./src/app/red/red.routing.ts ***!
  \************************************/
/*! exports provided: RedRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedRoutes", function() { return RedRoutes; });
/* harmony import */ var _red_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./red.component */ "./src/app/red/red.component.ts");
/* harmony import */ var _red_form_red_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./red-form/red-form.component */ "./src/app/red/red-form/red-form.component.ts");
/* harmony import */ var _red_editar_red_editar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./red-editar/red-editar.component */ "./src/app/red/red-editar/red-editar.component.ts");



var RedRoutes = [{
        path: '',
        children: [{
                path: 'red',
                component: _red_component__WEBPACK_IMPORTED_MODULE_0__["RedComponent"]
            }, {
                path: 'crear-red',
                component: _red_form_red_form_component__WEBPACK_IMPORTED_MODULE_1__["RedFormComponent"]
            }, {
                path: 'editar-red/:id',
                component: _red_editar_red_editar_component__WEBPACK_IMPORTED_MODULE_2__["RedEditarComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=red-red-module.js.map