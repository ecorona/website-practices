import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { BackgroundService } from '../../../services/background.service';
import { ClientesService } from '../../../services/clientes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup


  constructor(
    private router: Router, 
    private _clientes: ClientesService, //importamos el registro service (de forma privada) para poder hacer uso de el desde el código
    private _builder: FormBuilder,
    private background: BackgroundService,

  ) {
    this.signinForm = this._builder.group({
      email: ['',Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.background.setClase('login');
  }

  error = false;


  ingresar(formValues){
    console.log("Se va a registrar:", formValues);
    this._clientes.ingresar({ //lanzar solicitud desde el service, recordemos que regresará un http request
      email:     formValues.email,
      password:  formValues.password
    }).subscribe(respuesta => { //no suscribimos a la respuesta del http request
      console.log("respuesta ingresar()", respuesta);
      
      //ya tenemos cliente!
      //ahora que hacemos?
      if(this._clientes.jwt){
        this.router.navigateByUrl('/home');
        // aqui deberiamos mandarlo a una página donde le demos las gracias (/gracias), 
        // en esa pagina se van a mostrar sus datos de ingreso que estamos almacenando en el mismo service
      }
      
      
    }, (err) => { //en caso de error en el http request
      //mostrar el mensaje de error (html) cambiando la variable.
      this.error = true;
      console.log('error en ingreso:', err);
    });
    
  }

}
