import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/crud-service.service';
import { Vaga } from '../vagas/vagas-lista/vagas';
import { Empresa } from './empresas-lista/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService extends CrudService<Empresa[]>{

  private readonly API = 'http://localhost:3026/'

  constructor(protected override http:HttpClient) {
    super(http, `${environment.API}empresas`);
  }


}

export class EmpresasService2 extends CrudService<Vaga[]> {

  private readonly API = 'http://localhost:3026/'

  constructor(protected override http:HttpClient) {
    super(http, `${environment.API}empresas/vagas/:id`);
  }

}
