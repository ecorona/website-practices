import { Component } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent{

  signupForm: FormGroup

  constructor( private _builder: FormBuilder) {
    this.signupForm = this._builder.group({
      name: ['',Validators.required],
      user: ['', Validators.required],
      email: ['',Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })
   }

   enviar(values){
     console.log(values);
     
   }

}
