import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import * as _ from 'lodash';
import { SwalService } from 'src/app/services/swal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  usuarios = []; //este array contiene todos los usuarios

  signupForm: FormGroup;

  constructor(
    public _usuarios: UsuariosService,
    private router: Router,
    private _swal: SwalService,
    private _builder: FormBuilder
  ) {
    this.signupForm = this._builder.group({
      nombre: ['', Validators.required],
      activo: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
      perfil: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.buscarUsuarios(); //al inicio, traer los usuarios
  }

  error = false;

  agregarUsuario(value) {
    console.log('Se va a registrar:', value);
    this._usuarios
      .crearUsuario({
        //lanzar solicitud desde el service, recordemos que regresará un http request
        nombre: value.nombre,
        activo: value.activo,
        email: value.email,
        password: value.password,
        perfil: value.perfil,
      })
      .subscribe(
        (resp) => {
          //no suscribimos a la respuesta del http request
          console.log('respuesta registro:', resp);

          // aqui deberiamos mandarlo a una página donde le demos las gracias (/gracias),
          // en esa pagina se van a mostrar sus datos de registro que estamos almacenando en el mismo service
          this.router.navigateByUrl('/home');
        },
        (err) => {
          //en caso de error en el http request
          //mostrar el mensaje de error (html) cambiando la variable.
          this.error = true;
          console.log('error en registro:', err);
        }
      );
  }

  buscarUsuarios() {
    console.log('buscando usuarios');
    this._usuarios.buscarUsuarios().subscribe(
      (resp) => {
        console.log('respueste de Get', resp);
        setTimeout(() => {
          this.usuarios = resp; //insertarlos en el array
        });
      },
      (err) => {
        this.error = true;
        console.log('error traer registros', err);
      }
    );
  }

  borrarUsuario(usuario) {
    console.log('borrando usuario', usuario);
    this._usuarios
      .borrarUsuario({
        id: usuario.id,
      })
      .subscribe(
        (usuarioBorrado) => {
          console.log('usuario eliminado', usuarioBorrado);
          if (usuarioBorrado && usuarioBorrado.id) {
            // quitar del array de usuarios, el que fue eliminado
            //buscar su indice en el array, por medio de su id
            let idx = _.findIndex(this.usuarios, { id: usuarioBorrado.id });
            if (idx > -1) {
              setTimeout(() => {
                this.usuarios.splice(idx, 1);
              });
            }
          }
        },
        (err) => {
          //en caso de error en el http request
          //mostrar el mensaje de error (html) cambiando la variable.
          console.log('error al borrar registro:', err);
        }
      );
  }
}
