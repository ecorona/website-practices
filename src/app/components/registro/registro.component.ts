import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { HttpClient} from '@angular/common/http'

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

   enviar(value){
     let url = "http://localhost:1337";
     console.log("value tiene", value);
     this.http.post (url, {
       name:value.name,
       user:value.user,
       email:value.email,
       password:value.password,

      
      }).toPromise().then((data: any) =>{
        console.log("Usuario creado", data)
      },(error)=>{
        console.log("error al crear usuario", error)
      })

     
   }

}
