import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, empty, map, Observable, Subscription } from 'rxjs';
import { EmpresasService } from '../empresas.service';
import { Empresa } from './empresas';

@Component({
  selector: 'app-empresas-lista',
  templateUrl: './empresas-lista.component.html',
  styleUrls: ['./empresas-lista.component.css']
})
export class EmpresasListaComponent implements OnInit, OnDestroy {

  empresas$!: Observable<Empresa[]>;

  pagina!: number;

  inscription!: Subscription

  constructor(
    private service: EmpresasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.listar();

    this.inscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.pagina = queryParam['pagina']
        console.log(this.pagina);
        
      }
    )
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

  delete(id:number) {
    this.listar();
    return this.service.delete(id).subscribe();
  }

  ngOnDestroy(): void {
    this.inscription.unsubscribe()
  }
}
