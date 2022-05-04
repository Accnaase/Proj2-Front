import { Component, OnInit } from '@angular/core';
import { catchError, empty, map, Observable } from 'rxjs';
import { EmpresasService } from '../empresas.service';
import { Empresa } from './empresas';

@Component({
  selector: 'app-empresas-lista',
  templateUrl: './empresas-lista.component.html',
  styleUrls: ['./empresas-lista.component.css']
})
export class EmpresasListaComponent implements OnInit {

  empresas$!: Observable<Empresa[]>;

  constructor(private service: EmpresasService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar() {
    this.empresas$ = this.service.list().pipe(
      map(result => result.empresas),
      catchError((error: any) => {
        console.log(error);
        return empty()
      })
    )
  }
}
