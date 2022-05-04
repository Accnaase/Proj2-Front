import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/crud-service.service';
import { Empresa } from './empresas-lista/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService extends CrudService<Empresa[]>{

  private readonly API = 'http://localhost:3025/'

  constructor(protected override http:HttpClient) {
    super(http, `${environment.API}empresas`);
  }

}
