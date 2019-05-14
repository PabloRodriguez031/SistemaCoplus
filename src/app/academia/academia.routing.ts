import { Routes } from '@angular/router';

import { AcademiaComponent } from './academia.component';
import { AcademiaFormComponent } from './academia-form/academia-form.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { AcademiaEditarComponent } from './academia-editar/academia-editar.component';

export const AcademiaRoutes: Routes = [{
    path: '',
    children: [{
        path: 'academia',
        component: AcademiaComponent
    },{
        path: 'crear-academia',
        component: AcademiaFormComponent
    },{
        path: 'editar-academia/:id',
        component: AcademiaEditarComponent
    },{
        path: 'agregar-usuario-academia/:id',
        component: AgregarUsuarioComponent
    }]
}];
