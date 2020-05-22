import { Component } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators, FormGroupName } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent{

  signupForm: FormGroup

  constructor( private _builder: FormBuilder, private http:HttpClient) {
    this.signupForm = this._builder.group({
      name: ['',Validators.required],
      user: ['', Validators.required],
      email: ['',Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })
   }

   enviar(){
     let url = "localhost:1337"
     this.http.post (url, {
       signupForm:this.signupForm
      
      }).toPromise().then((data: any) =>{
        console.log(data)
      })
     
   }

}
