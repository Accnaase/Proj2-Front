import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-empresas-form',
  templateUrl: './empresas-form.component.html',
  styleUrls: ['./empresas-form.component.css']
})
export class EmpresasFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;



  constructor(
    private service:EmpresasService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome:[null]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.valid) {
      this.service.save(this.form.value)
        .subscribe(result => console.log(result),error => console.log(error));
    }
    this.router.navigate(['/empresas'])
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }
}
