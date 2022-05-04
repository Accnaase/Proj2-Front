import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasListaVagasComponent } from './empresas-lista-vagas.component';

describe('EmpresasListaVagasComponent', () => {
  let component: EmpresasListaVagasComponent;
  let fixture: ComponentFixture<EmpresasListaVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasListaVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasListaVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
