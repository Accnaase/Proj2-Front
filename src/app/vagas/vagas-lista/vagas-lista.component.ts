import { Component, OnInit } from '@angular/core';
import { catchError, empty, map, Observable } from 'rxjs';
import { Vaga } from './vagas';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-vagas-lista',
  templateUrl: './vagas-lista.component.html',
  styleUrls: ['./vagas-lista.component.css']
})
export class VagasListaComponent implements OnInit {

  vagas$!: Observable<Vaga[]>;

  constructor(private service: VagasService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar() {
    this.vagas$ = this.service.list().pipe(
      map(result => result.vagas),
      catchError((error: any) => {
        console.log(error);
        return empty()
      })
    )
  }

  delete(id:number) {
    this.listar();
    console.log(id);
    
    return this.service.delete(id).subscribe();
  }


}
