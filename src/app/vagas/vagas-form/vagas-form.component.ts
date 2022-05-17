import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-vagas-form',
  templateUrl: './vagas-form.component.html',
  styleUrls: ['./vagas-form.component.css']
})
export class VagasFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;



  constructor(
    private service: VagasService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      titulo: [null],
      salario: [null],
      id_empresa: [null],
      descricao: [null]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    
    if(this.form.valid) {
      this.service.save(this.form.value)
        .subscribe(result => console.log(result),error => console.log(error));
    }
    
    this.router.navigate(['/vagas'])
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }
}
