import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasListaComponent } from './empresas-lista/empresas-lista.component';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';
import { EmpresasRoutingModule } from './empresas-routing-module';
import { EmpresasListaVagasComponent } from './empresas-lista-vagas/empresas-lista-vagas.component';



@NgModule({
  declarations: [
    EmpresasListaComponent,
    EmpresasFormComponent,
    EmpresasListaVagasComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule
  ],
  exports: [
    EmpresasFormComponent,
    EmpresasListaComponent
  ]
})
export class EmpresasModule { }
