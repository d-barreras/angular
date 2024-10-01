import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  formulariousuarios: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulariousuarios = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPass: ['', Validators.required]
    },
      {
        validator: [this.validate1(), this.validate2()]
      })
  }

  validate1 = () => {
    return () => {
      console.log('Validate 1');
    };
  }

  validate2 = () => {
    return () => {
      console.log('Validate 2');
    }
  }

  enviarDatos = () => {
    console.log(this.formulariousuarios);
  }

}
