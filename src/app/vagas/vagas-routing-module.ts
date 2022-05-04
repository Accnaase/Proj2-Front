import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagasFormComponent } from './vagas-form/vagas-form.component';
import { VagasListaComponent } from './vagas-lista/vagas-lista.component';

const routes: Routes = [
  { path: '', component: VagasListaComponent},
  { path: 'novo', component: VagasFormComponent },
  { path: 'editar', component: VagasFormComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VagasRoutingModule { }
