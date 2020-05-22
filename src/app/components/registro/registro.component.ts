import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent{

  signupForm: FormGroup

  // importamos aqui el router, para que al finalizar un registro lo mandemos a otra pagina
  // importamos aqui el service que se hace cargo
  constructor( 
    private router: Router, 
    private _registro: RegistroService, //importamos el registro service (de forma privada) para poder hacer uso de el desde el código
    private _builder: FormBuilder
  ) {

    this.signupForm = this._builder.group({
      name: ['',Validators.required],
      user: ['', Validators.required],
      email: ['',Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });

   }

   //hubo un error, controlar con una variable si se muestra un mensaje de error encima del boton registrar?
   error = false;
   registrar(value){
     console.log("Se va a registrar:", value);
     this._registro.registrar({ //lanzar solicitud desde el service, recordemos que regresará un http request
        name:      value.name,
        user:      value.user,
        email:     value.email,
        password:  value.password
      }).subscribe(resp => { //no suscribimos a la respuesta del http request
        console.log('respuesta registro:', resp);

        this._registro.setRegistrado( resp.data ); //cargamos el registrado en el service!

        // aqui deberiamos mandarlo a una página donde le demos las gracias (/gracias), 
        // en esa pagina se van a mostrar sus datos de registro que estamos almacenando en el mismo service
        this.router.navigateByUrl('/home');
      }, (err) => { //en caso de error en el http request
        //mostrar el mensaje de error (html) cambiando la variable.
        this.error = true;
        console.log('error en registro:', err);
      });
     
   }

}
