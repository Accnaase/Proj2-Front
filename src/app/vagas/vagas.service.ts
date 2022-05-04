import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/crud-service.service';
import { Vaga } from './vagas-lista/vagas';

@Injectable({
  providedIn: 'root'
})
export class VagasService extends CrudService<Vaga[]>{

  private readonly API = 'http://localhost:3025/'

  constructor(protected override http:HttpClient) {
    super(http, `${environment.API}vagas`);
  }

}
