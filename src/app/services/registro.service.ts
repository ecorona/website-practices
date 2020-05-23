import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class RegistroService {

  //Variable local utilizada para conectar al server, extraida del environment
  private SERVER = environment.server;


  //aquí almacenaremos el último registro que se haga, esto para poder mostrarlo en cualquier pagina o componente donde se carge el service

  constructor(private http: HttpClient) { }

  /* 
  La función query se encarga de que la url sea facil de editar en todo el service,
  El resto del service, utilizará esta funcion para hacer las solicitudes.

  la parte del servidor se extrae de environments la cual contiene: http://localhost:1337

  la parte /api/v1/ siempre estará presente, solo cambiaría el endpoint: registro/cliente, lo que conformaria
  la url final como http://localhost:1337/api/v1/registro/cliente

  esto va a requerir en el back que la url /api/v1/registro/cliente se haga cargo de manejar el registro

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
    return this.query('registro/cliente', 'post', cliente);
  }

}
