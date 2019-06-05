(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grupo-grupo-module"],{

/***/ "./src/app/grupo/agregar-usuario/agregar-usuario.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/grupo/agregar-usuario/agregar-usuario.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/grupo/agregar-usuario/agregar-usuario.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/grupo/agregar-usuario/agregar-usuario.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"formModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h5 class=\"modal-title\">\n                  Agregar lideres a grupo\n                </h5>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <tr>\n                        <th>Nombre de lider</th>\n                        <th class=\"text-right\">Agregar</th>\n                      </tr> \n                      <tr *ngFor=\"let liderRed of lideresRed\">\n                        <td>{{liderRed.data['nombre']}} {{liderRed.data['apellido']}}</td>\n                        <td class=\"text-right\">\n                          <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"agregarLider(liderRed.id);\">\n                              <i class=\"nc-icon nc-simple-add\"></i>\n                            </button>   \n                        </td>\n                      </tr>                     \n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"formModal2\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                <h5 class=\"modal-title\">\n                  Agregar usuarios a grupo\n                </h5>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <tr>\n                        <th>Nombre y apellido</th>\n                        <th class=\"text-right\">Agregar</th>\n                      </tr> \n                      <tr *ngFor=\"let usuarioRed of usuariosRed\">\n                        <td>{{usuarioRed.data['nombre']}} {{usuarioRed.data['apellido']}}</td>\n                        <td class=\"text-right\">\n                          <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"agregarUsuario(usuarioRed.id);\">\n                            <i class=\"nc-icon nc-simple-add\"></i>\n                            </button>   \n                        </td>\n                      </tr>                     \n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Personas que conforman este grupo</h4>\n        </div>\n        <div class=\"card-body\">\n            <nav aria-label=\"breadcrumb\">\n                <ol class=\"breadcrumb\">\n                  <li class=\"breadcrumb-item\"><a [routerLink]=\"['/grupo']\" routerLinkActive=\"active\">Listado Grupos</a></li>\n                  <li class=\"breadcrumb-item\"><a>Usuarios en Grupo</a></li>\n                </ol>\n              </nav>\n            <form #documentoForm=\"ngForm\" (ngSubmit)=\"addDocumento(documentoForm)\">\n                <label>Nombre de lideres</label>\n                <br>\n                <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"openForm();\">\n                  <i class=\"nc-icon nc-zoom-split\"></i>\n                </button>       \n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <tr>\n                          <th>Lider</th>\n                          <th class=\"text-right\">Acción</th>\n                      </tr>\n                      <tr *ngFor=\"let liderGrupo of lideresGrupo; let i = index\">\n                        <td>{{liderGrupo.data['nombre']}}  {{liderGrupo.data['apellido']}}</td>\n                        <td class=\"text-right\">\n                          <button class=\"btn btn-danger btn-sm acciontabla\" (click)=\"deleteLider(liderGrupo.id, i)\">\n                            <i class=\"nc-icon nc-simple-remove\"></i>\n                          </button>\n                        </td>\n                      </tr>\n                  </table>\n                </div>  \n                <br>\n                <label>Personas que asisten a este grupo</label>\n                <br>\n                <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"openForm2();\">\n                  <i class=\"nc-icon nc-zoom-split\"></i>\n                </button>  \n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <tr>\n                            <th>Integrantes</th>\n                            <th class=\"text-right\">Acción</th>\n                        </tr>\n                        <tr *ngFor=\"let usuarioGrupo of usuariosGrupo; let i = index\">\n                          <td>{{usuarioGrupo.data['nombre']}} {{usuarioGrupo.data['apellido']}}</td>\n                          <td class=\"text-right\">\n                            <button class=\"btn btn-danger btn-sm acciontabla\" (click)=\"deleteUsuario(usuarioGrupo.id, i)\">\n                              <i class=\"nc-icon nc-simple-remove\"></i>\n                            </button>\n                          </td>\n                        </tr>\n                    </table>\n                  </div>  \n              </form>                \n        </div>  \n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/grupo/agregar-usuario/agregar-usuario.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/grupo/agregar-usuario/agregar-usuario.component.ts ***!
  \********************************************************************/
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
        this.lideresGrupo = [];
        this.usuariosGrupo = [];
        this.documentos = [];
        this.coleccion = 'usuario';
        this.documentos2 = [];
        this.coleccion2 = 'grupo';
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
            this.usuariosRed = this.filtrarUsuarios(this.usuariosRed, 'gruposIds');
        }
        firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection(this.coleccion).where('liderGrupoId', '==', this.documentoId).
            where('graduado', '==', 'Si').onSnapshot(function (snapshot) {
            _this.lideresGrupo = [];
            snapshot.forEach(function (lideresGrupo) {
                _this.lideresGrupo.push({
                    id: lideresGrupo.id,
                    data: lideresGrupo.data()
                });
            });
        });
        firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection(this.coleccion).where('grupoId', '==', this.documentoId).
            onSnapshot(function (snapshot) {
            _this.usuariosGrupo = [];
            snapshot.forEach(function (usuariosGrupo) {
                _this.usuariosGrupo.push({
                    id: usuariosGrupo.id,
                    data: usuariosGrupo.data()
                });
            });
        });
    };
    AgregarUsuarioComponent.prototype.openForm = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection('usuario').where('graduado', '==', 'Si').
            where('red', '==', this.documentos2.data['red']).
            where('liderGrupoId', '==', '').
            onSnapshot(function (snapshot) {
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
                    liderGrupoId: _this.documentos2.id
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
                _this.lideresGrupo.splice(index, 1);
                var lideresRestantes_1 = [];
                _this.lideresGrupo.forEach(function (lideres) {
                    lideresRestantes_1.push(lideres.id);
                });
                _this.apiService.updateDocumento(_this.coleccion, {
                    liderGrupoId: ''
                }, id).then(function (respuesta) {
                    _this.apiService.updateDocumento('grupo', {
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
            where('grupoId', '==', '').
            onSnapshot(function (snapshot) {
            _this.usuariosRed = [];
            snapshot.forEach(function (doc) {
                _this.usuariosRed.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            _this.filtrarUsuarios(_this.usuariosRed, 'gruposIds');
            $('#formModal2').modal('toggle');
        });
    };
    AgregarUsuarioComponent.prototype.agregarUsuario = function (id) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                if (!_this.documentos2.data['gruposIds']) {
                    _this.documentos2.data['gruposIds'] = [];
                }
                _this.documentos2.data['gruposIds'].push(id);
                _this.apiService.updateDocumento(_this.coleccion2, {
                    gruposIds: _this.documentos2.data['gruposIds']
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
                    grupoId: _this.documentos2.id
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
                _this.usuariosGrupo.splice(index, 1);
                var usuariosRestantes_1 = [];
                _this.usuariosGrupo.forEach(function (usuarios) {
                    usuariosRestantes_1.push(usuarios.id);
                });
                _this.apiService.updateDocumento(_this.coleccion, {
                    grupoId: ''
                }, id).then(function (respuesta) {
                    _this.apiService.updateDocumento('grupo', {
                        gruposIds: usuariosRestantes_1
                    }, _this.documentoId);
                    _this.notificationsService.showSwal('Editado', 'El lider ha sido eliminado con éxito', 'success');
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
            template: __webpack_require__(/*! ./agregar-usuario.component.html */ "./src/app/grupo/agregar-usuario/agregar-usuario.component.html"),
            styles: [__webpack_require__(/*! ./agregar-usuario.component.css */ "./src/app/grupo/agregar-usuario/agregar-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [app_servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], AgregarUsuarioComponent);
    return AgregarUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/grupo/grupo-editar/grupo-editar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/grupo/grupo-editar/grupo-editar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/grupo/grupo-editar/grupo-editar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/grupo/grupo-editar/grupo-editar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Editar Grupo</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/grupo']\" routerLinkActive=\"active\">Listado Grupos</a></li>\n                    <li class=\"breadcrumb-item\"><a>Editar Grupos</a></li>\n                  </ol>\n                </nav>\n              <form #documentoForm=\"ngForm\" (ngSubmit)=\"updateDocumento()\">\n\n                  <label>Nombre de grupo</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"nombre\" [(ngModel)]=\"documento.data['nombre']\" required>\n                  </div>\n                  <label>Red a la que pertenece</label> \n                  <div class=\"form-group\">\n                    <select class=\"form-control\" name=\"red\" [(ngModel)]=\"documento.data['red']\" required>\n                      <option value=\"{{documento2.id}}\" *ngFor=\"let documento2 of documentos2\">{{documento2.data['descripcion']}}</option>\n                    </select>\n                  </div>\n                  <label>Discipulado al que pertenece</label> \n                  <div class=\"form-group\">\n                    <select name=\"discipulado\" class=\"form-control\" [(ngModel)]=\"documento.data['discipulado']\" required>\n                      <option value=\"{{documento3.id}}\" *ngFor=\"let documento3 of documentos3\">{{documento3.data['discipulado']}}</option>\n                    </select>\n                  </div>\n                  <label>Día en que se realiza</label>\n                  <div class=\"form-group\">                    \n                    <select class=\"form-control\" name=\"dia\" [(ngModel)]=\"documento.data['dia']\" required>\n                        <option value=\"Lunes\">Lunes</option>\n                        <option value=\"Martes\">Martes</option>\n                        <option value=\"Miercoles\">Miércoles</option>\n                        <option value=\"Jueves\">Jueves</option>\n                        <option value=\"Viernes\">Viernes</option>\n                        <option value=\"Sabado\">Sábado</option>\n                        <option value=\"Domingo\">Domingo</option>\n                      </select>\n                  </div>   \n                  <label>Direccion donde se realiza</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"direccion\" [(ngModel)]=\"documento.data['direccion']\" required>\n                  </div>\n                  <label>Zona ubicada</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"zona\" [(ngModel)]=\"documento.data['zona']\" required>\n                  </div>\n                  <label>Hora en que se realiza</label>\n                  <div class=\"form-group\">\n                    <input type=\"time\" class=\"form-control\" name=\"hora\" [(ngModel)]=\"documento.data['hora']\" required>\n                  </div>\n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Editar Grupo</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/grupo/grupo-editar/grupo-editar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/grupo/grupo-editar/grupo-editar.component.ts ***!
  \**************************************************************/
/*! exports provided: GrupoEditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoEditarComponent", function() { return GrupoEditarComponent; });
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





var GrupoEditarComponent = /** @class */ (function () {
    function GrupoEditarComponent(route, apiService, notificationsService) {
        this.route = route;
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documento = [];
        this.coleccion = 'grupo';
        this.documentos2 = {};
        this.coleccion2 = 'red';
        this.documentos3 = {};
        this.coleccion3 = 'discipulado';
    }
    GrupoEditarComponent.prototype.ngOnInit = function () {
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
    GrupoEditarComponent.prototype.updateDocumento = function () {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.updateDocumento(_this.coleccion, {
                    nombre: _this.documento.data['nombre'],
                    red: _this.documento.data['red'],
                    discipulado: _this.documento.data['discipulado'],
                    dia: _this.documento.data['dia'],
                    direccion: _this.documento.data['direccion'],
                    zona: _this.documento.data['zona'],
                    hora: _this.documento.data['hora']
                }, _this.documento.id).then(function (respuesta) {
                    _this.notificationsService.showSwal('Editado', 'La red ha sido editada con éxito', 'success');
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    GrupoEditarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grupo-editar',
            template: __webpack_require__(/*! ./grupo-editar.component.html */ "./src/app/grupo/grupo-editar/grupo-editar.component.html"),
            styles: [__webpack_require__(/*! ./grupo-editar.component.css */ "./src/app/grupo/grupo-editar/grupo-editar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _servicios_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], GrupoEditarComponent);
    return GrupoEditarComponent;
}());



/***/ }),

/***/ "./src/app/grupo/grupo-form/grupo-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/grupo/grupo-form/grupo-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/grupo/grupo-form/grupo-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/grupo/grupo-form/grupo-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4>Nuevo Grupo</h4>\n          </div>\n          <div class=\"card-body\">\n              <nav aria-label=\"breadcrumb\">\n                  <ol class=\"breadcrumb\">\n                    <li class=\"breadcrumb-item\"><a [routerLink]=\"['/grupo']\" routerLinkActive=\"active\">Listado Grupos</a></li>\n                    <li class=\"breadcrumb-item\"><a>Crear Grupo</a></li>\n                  </ol>\n                </nav>\n              <form #documentoForm=\"ngForm\" (ngSubmit)=\"addDocumento(documentoForm)\">\n                  <label>Nombre de Grupo</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"nombre\" ngModel required>\n                  </div>\n                  <label>Red a la que pertenece</label> \n                  <div class=\"form-group\">\n                    <select name=\"red\" class=\"form-control\" ngModel required>\n                      <option value=\"{{documento2.id}}\" *ngFor=\"let documento2 of documentos2\">{{documento2.data['descripcion']}}</option>\n                    </select>\n                  </div>\n                  <label>Discipulado al que pertenece</label> \n                  <div class=\"form-group\">\n                    <select name=\"discipulado\" class=\"form-control\" ngModel required>\n                      <option value=\"{{documento3.id}}\" *ngFor=\"let documento3 of documentos3\">{{documento3.data['discipulado']}}</option>\n                    </select>\n                  </div>     \n                  <label>Día en que se realiza</label>\n                  <div class=\"form-group\">                    \n                    <select class=\"form-control\" name=\"dia\" ngModel required>\n                        <option value=\"Lunes\">Lunes</option>\n                        <option value=\"Martes\">Martes</option>\n                        <option value=\"Miercoles\">Miércoles</option>\n                        <option value=\"Jueves\">Jueves</option>\n                        <option value=\"Viernes\">Viernes</option>\n                        <option value=\"Sabado\">Sábado</option>\n                        <option value=\"Domingo\">Domingo</option>\n                      </select>\n                  </div>                  \n                  <label>Direccion donde se realiza</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"direccion\" ngModel required>\n                  </div>\n                  <label>Zona ubicada</label>\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"zona\" ngModel required>\n                  </div>\n                  <label>Hora en que se realiza</label>\n                  <div class=\"form-group\">\n                    <input type=\"time\" class=\"form-control\" name=\"hora\" ngModel required>\n                  </div>                             \n                  <div class=\"card-footer text-center\">\n                      <button [disabled]=\"!documentoForm.valid\" type=\"submit\" class=\"btn btn-info\">Agregar Grupo</button>\n                    </div>\n                </form>                \n          </div>  \n        </div>\n      </div>\n    </div>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/grupo/grupo-form/grupo-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/grupo/grupo-form/grupo-form.component.ts ***!
  \**********************************************************/
/*! exports provided: GrupoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoFormComponent", function() { return GrupoFormComponent; });
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




var GrupoFormComponent = /** @class */ (function () {
    function GrupoFormComponent(apiService, notificationsService) {
        this.apiService = apiService;
        this.notificationsService = notificationsService;
        this.documentos = {};
        this.coleccion = 'grupo';
        this.documentos2 = {};
        this.coleccion2 = 'red';
        this.documentos3 = {};
        this.coleccion3 = 'discipulado';
    }
    GrupoFormComponent.prototype.ngOnInit = function () {
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
    GrupoFormComponent.prototype.addDocumento = function (form) {
        var _this = this;
        this.notificationsService.showConfirmationSwal().then(function (resultado) {
            if (resultado.value) {
                _this.notificationsService.showLoadingSwal('Enviando datos...', 'Espere por favor');
                _this.apiService.addDocumento(_this.coleccion, {
                    nombre: form.value.nombre,
                    red: form.value.red,
                    discipulado: form.value.discipulado,
                    dia: form.value.dia,
                    direccion: form.value.direccion,
                    zona: form.value.zona,
                    hora: form.value.hora,
                    gruposIds: [],
                    lideresIds: []
                }).then(function (respuesta) {
                    _this.notificationsService.showSwal('Creado', 'El grupo ha sido creado con éxito', 'success');
                    form.resetForm();
                }).catch(function (error) {
                    console.log(error);
                    _this.notificationsService.showSwal('Ha ocurrido un error', 'Intentelo nuevamente', 'error');
                });
            }
        });
    };
    GrupoFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grupo-form',
            template: __webpack_require__(/*! ./grupo-form.component.html */ "./src/app/grupo/grupo-form/grupo-form.component.html"),
            styles: [__webpack_require__(/*! ./grupo-form.component.css */ "./src/app/grupo/grupo-form/grupo-form.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], GrupoFormComponent);
    return GrupoFormComponent;
}());



/***/ }),

/***/ "./src/app/grupo/grupo.component.css":
/*!*******************************************!*\
  !*** ./src/app/grupo/grupo.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acciontabla{\r\n    margin: 0 5px;\r\n}"

/***/ }),

/***/ "./src/app/grupo/grupo.component.html":
/*!********************************************!*\
  !*** ./src/app/grupo/grupo.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\">Lista de Grupos</h4>\n          </div>\n          <div class=\"card-body \">\n            <div class=\"toolbar\">\n              <button class=\"btn btn-primary\" [routerLink]=\"['/crear-grupo']\">Crear Grupo</button>\n            </div>                 \n            <div class=\"col-md-12\">\n              <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <tr>\n                        <th>Nombre</th>\n                        <th>Red</th>\n                        <th>Discipulado</th>\n                        <th>Día</th>\n                        <th>Direccion</th>\n                        <th>Zona</th>                  \n                        <th>Hora</th>\n                        <th class=\"text-right\">Acción</th>\n                      </tr>\n                      <tr *ngFor=\"let documento of documentos\">\n                        <td>{{documento.data['nombre']}}</td>\n                        <td>{{documento.data['red_nombre']}}</td>\n                        <td>{{documento.data['discipulado_nombre']}}</td>\n                        <td>{{documento.data['dia']}}</td>\n                        <td>{{documento.data['direccion']}}</td>\n                        <td>{{documento.data['zona']}}</td>\n                        <td>{{documento.data['hora']}}</td>\n                        <td class=\"text-right\">\n                            <button class=\"btn btn-warning btn-sm acciontabla\" (click)=\"editDocumento(documento)\">\n                                <i class=\"nc-icon nc-zoom-split\"></i>\n                            </button>\n                            <button class=\"btn btn-info btn-sm acciontabla\" (click)=\"agregarUsuario(documento)\">\n                              <i class=\"nc-icon nc-single-02\"></i>\n                            </button>\n                            <button class=\"btn btn-danger btn-sm acciontabla\" (click)=\"deleteDocumento(documento)\">\n                                <i class=\"nc-icon nc-simple-remove\"></i>\n                              </button>\n                        </td>\n                      </tr>\n                    </table>\n              </div>\n            </div>\n  \n        </div>\n      </div>  \n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/grupo/grupo.component.ts":
/*!******************************************!*\
  !*** ./src/app/grupo/grupo.component.ts ***!
  \******************************************/
/*! exports provided: GrupoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoComponent", function() { return GrupoComponent; });
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





var GrupoComponent = /** @class */ (function () {
    function GrupoComponent(apiService, router, notificationsService) {
        this.apiService = apiService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.documentos = [];
        this.coleccion = 'grupo';
        this.redes = [];
        this.discipulados = [];
    }
    GrupoComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('red').onSnapshot(function (snapshot) {
            _this.redes = [];
            snapshot.forEach(function (doc) {
                _this.redes.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            firebase__WEBPACK_IMPORTED_MODULE_3__["firestore"]().collection('discipulado').onSnapshot(function (snapshot) {
                _this.discipulados = [];
                snapshot.forEach(function (doc) {
                    _this.discipulados.push({
                        id: doc.id,
                        data: doc.data()
                    });
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
                _this.documentos.forEach(function (grupo) {
                    _this.redes.forEach(function (red) {
                        if (grupo.data['red'] === red.id) {
                            grupo.data['red_nombre'] = red.data['descripcion'];
                        }
                    });
                    _this.discipulados.forEach(function (discipulado) {
                        if (grupo.data['discipulado'] === discipulado.id) {
                            grupo.data['discipulado_nombre'] = discipulado.data['discipulado'];
                        }
                    });
                });
            });
        });
    };
    GrupoComponent.prototype.deleteDocumento = function (documento) {
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
    GrupoComponent.prototype.editDocumento = function (documento) {
        this.router.navigate(['/editar-grupo', documento.id]);
    };
    GrupoComponent.prototype.agregarUsuario = function (documento) {
        this.router.navigate(['/agregar-usuario-grupo', documento.id]);
    };
    GrupoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grupo',
            template: __webpack_require__(/*! ./grupo.component.html */ "./src/app/grupo/grupo.component.html"),
            styles: [__webpack_require__(/*! ./grupo.component.css */ "./src/app/grupo/grupo.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_servicios_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], GrupoComponent);
    return GrupoComponent;
}());



/***/ }),

/***/ "./src/app/grupo/grupo.module.ts":
/*!***************************************!*\
  !*** ./src/app/grupo/grupo.module.ts ***!
  \***************************************/
/*! exports provided: GrupoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoModule", function() { return GrupoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _grupo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grupo.component */ "./src/app/grupo/grupo.component.ts");
/* harmony import */ var _grupo_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grupo.routing */ "./src/app/grupo/grupo.routing.ts");
/* harmony import */ var _grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grupo-form/grupo-form.component */ "./src/app/grupo/grupo-form/grupo-form.component.ts");
/* harmony import */ var _grupo_editar_grupo_editar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grupo-editar/grupo-editar.component */ "./src/app/grupo/grupo-editar/grupo-editar.component.ts");
/* harmony import */ var _agregar_usuario_agregar_usuario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agregar-usuario/agregar-usuario.component */ "./src/app/grupo/agregar-usuario/agregar-usuario.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var GrupoModule = /** @class */ (function () {
    function GrupoModule() {
    }
    GrupoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_grupo_routing__WEBPACK_IMPORTED_MODULE_5__["GrupoRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_grupo_component__WEBPACK_IMPORTED_MODULE_4__["GrupoComponent"], _grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_6__["GrupoFormComponent"], _grupo_editar_grupo_editar_component__WEBPACK_IMPORTED_MODULE_7__["GrupoEditarComponent"], _agregar_usuario_agregar_usuario_component__WEBPACK_IMPORTED_MODULE_8__["AgregarUsuarioComponent"]]
        })
    ], GrupoModule);
    return GrupoModule;
}());



/***/ }),

/***/ "./src/app/grupo/grupo.routing.ts":
/*!****************************************!*\
  !*** ./src/app/grupo/grupo.routing.ts ***!
  \****************************************/
/*! exports provided: GrupoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoRoutes", function() { return GrupoRoutes; });
/* harmony import */ var _grupo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grupo.component */ "./src/app/grupo/grupo.component.ts");
/* harmony import */ var _grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grupo-form/grupo-form.component */ "./src/app/grupo/grupo-form/grupo-form.component.ts");
/* harmony import */ var _grupo_editar_grupo_editar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grupo-editar/grupo-editar.component */ "./src/app/grupo/grupo-editar/grupo-editar.component.ts");
/* harmony import */ var _agregar_usuario_agregar_usuario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agregar-usuario/agregar-usuario.component */ "./src/app/grupo/agregar-usuario/agregar-usuario.component.ts");




var GrupoRoutes = [{
        path: '',
        children: [{
                path: 'grupo',
                component: _grupo_component__WEBPACK_IMPORTED_MODULE_0__["GrupoComponent"]
            }, {
                path: 'crear-grupo',
                component: _grupo_form_grupo_form_component__WEBPACK_IMPORTED_MODULE_1__["GrupoFormComponent"]
            }, {
                path: 'editar-grupo/:id',
                component: _grupo_editar_grupo_editar_component__WEBPACK_IMPORTED_MODULE_2__["GrupoEditarComponent"]
            }, {
                path: 'agregar-usuario-grupo/:id',
                component: _agregar_usuario_agregar_usuario_component__WEBPACK_IMPORTED_MODULE_3__["AgregarUsuarioComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=grupo-grupo-module.js.map