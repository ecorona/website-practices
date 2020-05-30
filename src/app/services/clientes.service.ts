import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/services/swal.service';
import { ClienteModel } from '../interfaces/models';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  //Variable local utilizada para conectar al server, extraida del environment
  private SERVER = environment.server;

  jwt = '';

  ingresado: ClienteModel;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _swal: SwalService
  ) {
    this.resetCliente();
  }

  resetCliente() {
    this.ingresado = {
      name: '',
      user: '',
      email: '',
    };
  }
  /*
  La función query se encarga de que la url sea facil de editar en todo el service,
  El resto del service, utilizará esta funcion para hacer las solicitudes.

  la parte del servidor se extrae de environments la cual contiene: http://localhost:1337

  la parte /api/v1/ siempre estará presente, solo cambiaría el endpoint: clientes/registro, lo que conformaria
  la url final como http://localhost:1337/api/v1/clientes/registro

  esto va a requerir en el back que la url /api/v1/clientes/registro se haga cargo de manejar el registro

  esta funcion al final regresa un http request
  */
  query(query: string, action: string, data?: any) {
    const url = `${this.SERVER}/api/v1/${query}`;
    if (data) {
      return this.http[action](url, data);
    } else {
      return this.http[action](url);
    }
  }

  registrar(cliente) {
    return this.query('clientes/registro', 'post', cliente).pipe(
      // atrapar la respuesta y almacenar el jwt en localstorage
      map((resp: any) => {
        this.jwt = resp.jwt;
        this.ingresado = resp.cliente;
        this.fixLocalStorage();
      })
    );
  }

  //almacenar el localstorage los valores jwt e ingresado
  fixLocalStorage() {
    localStorage.setItem(
      'sesion',
      JSON.stringify({ jwt: this.jwt, cliente: this.ingresado })
    );
    console.log('Sesion almacenada en localStorage');
  }

  loadLocalStorage() {
    console.log('Cargando sesion de localStorage');
    let sesion = localStorage.getItem('sesion');
    if (sesion) {
      let sesionObj = JSON.parse(sesion);
      if (sesion && sesionObj.cliente && sesionObj.jwt) {
        console.log('Sesión de cliente cargada de localStorage');
        this.jwt = sesionObj.jwt;
        this.ingresado = sesionObj.cliente;
        return;
      }
    }
    console.log('No se encontró una sesión en localStorage');
  }

  resetLocalStorage() {
    localStorage.removeItem('sesion');
    console.log('Sesion eliminada de localStorage');
  }
  buscarClientes() {
    return this.query('clientes/get', 'get');
  }

  borrarCliente(id) {
    // this._swal.borrarCliente().then((respuesta)=>{
    return this.query('clientes/delete', 'post', id);
    // });
  }

  ingresar(cliente) {
    /*
    cliente={
      email: string
      password: string
    }
    */
    return this.query('clientes/login', 'post', cliente).pipe(
      // atrapar la respuesta y almacenar el jwt en localstorage
      map((responseData: any) => {
        console.log('respuesta ingreso:', responseData);
        //la respuesta esta vacia si no existe con los datos proveidos
        //asi que evaluamos...
        if (
          !responseData ||
          !responseData.cliente ||
          !responseData.cliente.id
        ) {
          this._swal.toast(
            'Sus credenciales no coinciden con ninguna cliente en el sistema.'
          );
        }

        this.jwt = responseData.jwt;
        this.ingresado = responseData.cliente;
        this.fixLocalStorage();
      })
    );
  }

  logout() {
    this._swal.logout().then((respuesta) => {
      if (respuesta.value) {
        console.log('logout!');
        setTimeout(() => {
          this.resetCliente();
          this.jwt = '';
          this.resetLocalStorage();
          this._swal.toast('Sesión cerrada.');
        });
        this.router.navigateByUrl('/home');
      }
    });
  }
}
