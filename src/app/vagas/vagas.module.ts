import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagasFormComponent } from './vagas-form/vagas-form.component';
import { VagasListaComponent } from './vagas-lista/vagas-lista.component';
import { VagasRoutingModule } from './vagas-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VagasFormComponent,
    VagasListaComponent
  ],
  imports: [
    CommonModule,
    VagasRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    VagasFormComponent, 
    VagasListaComponent
  ]
})
export class VagasModule { }
