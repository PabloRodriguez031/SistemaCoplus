(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iglesia-iglesia-module"],{

/***/ "./src/app/iglesia/iglesia-editar/iglesia-editar.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/iglesia/iglesia-editar/iglesia-editar.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/iglesia/iglesia-editar/iglesia-editar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/iglesia/iglesia-editar/iglesia-editar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Editar Iglesia</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/iglesia']\" routerLinkActive=\"active\">Listado Iglesias</a></li>\n                    <li class=\"breadcrumb-item\"><a>Editar Iglesia</a></li>\n                  </ol>\n                </nav>\n              <form #iglesiaForm=\"ngForm\" (ngSubmit)=\"updateDocumento()\">\n                  <label>Nombre de Iglesia</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"nombre\" [(ngModel)]=\"documento.data['nombre']\" required>\n                  </div>\n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!iglesiaForm.valid\" type=\"submit\" class=\"btn btn-info\">Editar Iglesia</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/iglesia/iglesia-editar/iglesia-editar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/iglesia/iglesia-editar/iglesia-editar.component.ts ***!
  \********************************************************************/
/*! exports provided: IglesiaEditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IglesiaEditarComponent", function() { return IglesiaEditarComponent; });
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




var IglesiaEditarComponent = /** @class */ (function () {
    function IglesiaEditarComponent(route, apiService, notificationsService) {
        this.route = route;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documento = [];
        this.coleccion = 'iglesia';
    }
    IglesiaEditarComponent.prototype.ngOnInit = function () {
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
    IglesiaEditarComponent.prototype.updateDocumento = function () {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.updateDocumento(_this.coleccion, {
                    nombre: _this.documento.data['nombre']
                }, _this.documento.id).then(function (respuesta) {
                    _this.notificationsService.showSwal('Editado', 'La iglesia ha sido editada con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    IglesiaEditarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iglesia-editar',
            template: __webpack_require__(/*! ./iglesia-editar.component.html */ "./src/app/iglesia/iglesia-editar/iglesia-editar.component.html"),
            styles: [__webpack_require__(/*! ./iglesia-editar.component.css */ "./src/app/iglesia/iglesia-editar/iglesia-editar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], IglesiaEditarComponent);
    return IglesiaEditarComponent;
}());



/***/ }),

/***/ "./src/app/iglesia/iglesia-form/iglesia-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/iglesia/iglesia-form/iglesia-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/iglesia/iglesia-form/iglesia-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/iglesia/iglesia-form/iglesia-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Nueva Iglesia</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/iglesia']\" routerLinkActive=\"active\">Listado Iglesias</a></li>\n                    <li class=\"breadcrumb-item\"><a>Crear Iglesia</a></li>\n                  </ol>\n                </nav>\n              <form #documentoForm=\"ngForm\" (ngSubmit)=\"addDocumento(documentoForm)\">\n                  <label>Nombre de Iglesia</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"nombre\" ngModel required>\n                  </div>\n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Agregar Iglesia</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/iglesia/iglesia-form/iglesia-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/iglesia/iglesia-form/iglesia-form.component.ts ***!
  \****************************************************************/
/*! exports provided: IglesiaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IglesiaFormComponent", function() { return IglesiaFormComponent; });
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



var IglesiaFormComponent = /** @class */ (function () {
    function IglesiaFormComponent(apiService, notificationsService) {
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documentos = {};
        this.coleccion = 'iglesia';
    }
    IglesiaFormComponent.prototype.ngOnInit = function () {
    };
    IglesiaFormComponent.prototype.addDocumento = function (form) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.addDocumento(_this.coleccion, {
                    nombre: form.value.nombre
                }).then(function (respuesta) {
                    _this.notificationsService.showSwal('Creado', 'La iglesia ha sido creada con éxito', 'success');
                    form.resetForm();
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    IglesiaFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iglesia-form',
            template: __webpack_require__(/*! ./iglesia-form.component.html */ "./src/app/iglesia/iglesia-form/iglesia-form.component.html"),
            styles: [__webpack_require__(/*! ./iglesia-form.component.css */ "./src/app/iglesia/iglesia-form/iglesia-form.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"]])
    ], IglesiaFormComponent);
    return IglesiaFormComponent;
}());



/***/ }),

/***/ "./src/app/iglesia/iglesia.component.css":
/*!***********************************************!*\
  !*** ./src/app/iglesia/iglesia.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acciontabla{\r\n    margin: 0 5px;\r\n}"

/***/ }),

/***/ "./src/app/iglesia/iglesia.component.html":
/*!************************************************!*\
  !*** ./src/app/iglesia/iglesia.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">Lista de Iglesias</h4>\n        </div>\n        <div class=\"card-body \">\n          <div class=\"toolbar\">\n            <button class=\"btn btn-primary\" [routerLink]=\"['/crear-iglesia']\">Crear Iglesia</button>\n          </div>              \n          <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n            <table class=\"table\">\n              <tr>\n                <th>Nombre</th>\n                <th class=\"text-right\">Acción</th>\n              </tr>\n              <tr *ngFor=\"let documento of documentos\">\n                <td>{{documento.data['nombre']}}</td>\n                <td class=\"text-right\">\n                    <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"editDocumento(documento)\">\n                        <i class=\"nc-icon nc-zoom-split\"></i>\n                    </button>\n                    <button class=\"btn btn-danger btn-sm acciontabla\" (click)=\"deleteDocumento(documento)\">\n                        <i class=\"nc-icon nc-simple-remove\"></i>\n                      </button>\n                </td>\n              </tr>\n            </table>\n            </div>\n          </div>\n\n      </div>\n    </div>  \n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/iglesia/iglesia.component.ts":
/*!**********************************************!*\
  !*** ./src/app/iglesia/iglesia.component.ts ***!
  \**********************************************/
/*! exports provided: IglesiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IglesiaComponent", function() { return IglesiaComponent; });
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





var IglesiaComponent = /** @class */ (function () {
    function IglesiaComponent(apiService, router, notificationsService) {
        this.apiService = apiService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.documentos = [];
        this.coleccion = 'iglesia';
    }
    IglesiaComponent.prototype.ngOnInit = function () {
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
    IglesiaComponent.prototype.deleteDocumento = function (documento) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.deleteDocumento(_this.coleccion, documento);
                _this.notificationsService.showSwal('Borrado', 'La iglesia ha sido borrada con éxito', 'success');
            }
        });
    };
    IglesiaComponent.prototype.editDocumento = function (documento) {
        this.router.navigate(['/editar-iglesia', documento.id]);
    };
    IglesiaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iglesia',
            template: __webpack_require__(/*! ./iglesia.component.html */ "./src/app/iglesia/iglesia.component.html"),
            styles: [__webpack_require__(/*! ./iglesia.component.css */ "./src/app/iglesia/iglesia.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], IglesiaComponent);
    return IglesiaComponent;
}());



/***/ }),

/***/ "./src/app/iglesia/iglesia.module.ts":
/*!*******************************************!*\
  !*** ./src/app/iglesia/iglesia.module.ts ***!
  \*******************************************/
/*! exports provided: IglesiaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IglesiaModule", function() { return IglesiaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _iglesia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iglesia.component */ "./src/app/iglesia/iglesia.component.ts");
/* harmony import */ var _iglesia_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iglesia.routing */ "./src/app/iglesia/iglesia.routing.ts");
/* harmony import */ var _iglesia_form_iglesia_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iglesia-form/iglesia-form.component */ "./src/app/iglesia/iglesia-form/iglesia-form.component.ts");
/* harmony import */ var _iglesia_editar_iglesia_editar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iglesia-editar/iglesia-editar.component */ "./src/app/iglesia/iglesia-editar/iglesia-editar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var IglesiaModule = /** @class */ (function () {
    function IglesiaModule() {
    }
    IglesiaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_iglesia_routing__WEBPACK_IMPORTED_MODULE_5__["IglesiaRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_iglesia_component__WEBPACK_IMPORTED_MODULE_4__["IglesiaComponent"], _iglesia_form_iglesia_form_component__WEBPACK_IMPORTED_MODULE_6__["IglesiaFormComponent"], _iglesia_editar_iglesia_editar_component__WEBPACK_IMPORTED_MODULE_7__["IglesiaEditarComponent"]]
        })
    ], IglesiaModule);
    return IglesiaModule;
}());



/***/ }),

/***/ "./src/app/iglesia/iglesia.routing.ts":
/*!********************************************!*\
  !*** ./src/app/iglesia/iglesia.routing.ts ***!
  \********************************************/
/*! exports provided: IglesiaRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IglesiaRoutes", function() { return IglesiaRoutes; });
/* harmony import */ var _iglesia_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iglesia.component */ "./src/app/iglesia/iglesia.component.ts");
/* harmony import */ var _iglesia_form_iglesia_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iglesia-form/iglesia-form.component */ "./src/app/iglesia/iglesia-form/iglesia-form.component.ts");
/* harmony import */ var _iglesia_editar_iglesia_editar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iglesia-editar/iglesia-editar.component */ "./src/app/iglesia/iglesia-editar/iglesia-editar.component.ts");



var IglesiaRoutes = [{
        path: '',
        children: [{
                path: 'iglesia',
                component: _iglesia_component__WEBPACK_IMPORTED_MODULE_0__["IglesiaComponent"]
            }, {
                path: 'crear-iglesia',
                component: _iglesia_form_iglesia_form_component__WEBPACK_IMPORTED_MODULE_1__["IglesiaFormComponent"]
            }, {
                path: 'editar-iglesia/:id',
                component: _iglesia_editar_iglesia_editar_component__WEBPACK_IMPORTED_MODULE_2__["IglesiaEditarComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=iglesia-iglesia-module.js.map