import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';
import { EmpresasListaVagasComponent } from './empresas-lista-vagas/empresas-lista-vagas.component';
import { EmpresasListaComponent } from './empresas-lista/empresas-lista.component';

const routes: Routes = [
  { path: '', component: EmpresasListaComponent},
  { path: 'novo', component: EmpresasFormComponent },
  { path: 'editar', component: EmpresasFormComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
