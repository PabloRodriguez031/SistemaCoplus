import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AcademiaComponent } from './academia.component';
import { AcademiaRoutes } from './academia.routing';
import { AcademiaFormComponent } from './academia-form/academia-form.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { AcademiaEditarComponent } from './academia-editar/academia-editar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AcademiaRoutes),
        FormsModule
    ],
    declarations: [AcademiaComponent, AcademiaFormComponent, AgregarUsuarioComponent, AcademiaEditarComponent]
})

export class AcademiaModule {}