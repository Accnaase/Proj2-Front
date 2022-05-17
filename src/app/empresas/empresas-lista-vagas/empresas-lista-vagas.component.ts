import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, empty, map, observable, Observable, Subscription } from 'rxjs';
import { Vaga } from 'src/app/vagas/vagas-lista/vagas';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-empresas-lista-vagas',
  templateUrl: './empresas-lista-vagas.component.html',
  styleUrls: ['./empresas-lista-vagas.component.css']
})
export class EmpresasListaVagasComponent implements OnInit, OnDestroy {

  empresa_vagas$!: Observable<Vaga[]>;

  inscription!: Subscription;

  constructor(
    private service: EmpresasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    
    this.inscription = this.inscription = this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        const empresa$ = this.service.loadById(id);
        empresa$.subscribe(emp => {
          this.listaVagas(id)
        })
      }
    )
  }

  listaVagas(id:number) {
    this.empresa_vagas$ = this.service.listVagasEmpresa(id).pipe(
      map(result => result.empresas),
      catchError((error: any) => {
        console.log(error);
        return empty()
      })
    )
  }

  ngOnDestroy() {
    this.inscription.unsubscribe
  }
}
