import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/services/swal.service';
@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  //Variable local utilizada para conectar al server, extraida del environment
  private SERVER = environment.server;

  jwt='';
  ingresado = {
    id:0,
    nombre:''
  }; 
  
 
  constructor(private http: HttpClient, private router: Router, private _swal: SwalService ) { }

  /* 
  La función query se encarga de que la url sea facil de editar en todo el service,
  El resto del service, utilizará esta funcion para hacer las solicitudes.

  la parte del servidor se extrae de environments la cual contiene: http://localhost:1337

  la parte /api/v1/ siempre estará presente, solo cambiaría el endpoint: usuarios/registro, lo que conformaria
  la url final como http://localhost:1337/api/v1/usuarios/registro

  esto va a requerir en el back que la url /api/v1/usuarios/registro se haga cargo de manejar el registro

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


  //almacenar el localstorage los valores jwt e ingresado
  fixLocalStorage(){
    localStorage.setItem('sesion', JSON.stringify({jwt:this.jwt, usuario:this.ingresado}));
    console.log("Sesion almacenada en localStorage");
  }

  loadLocalStorage(){
    console.log("Cargando sesion de localStorage");
    let sesion = localStorage.getItem('sesion');
    if(sesion){
      let sesionObj = JSON.parse(sesion);
      if(sesion && sesionObj.usuario && sesionObj.jwt){
        console.log("Sesión de usuario cargada de localStorage");
        this.jwt=sesionObj.jwt;
        this.ingresado=sesionObj.usuario;
        return;
      }
    }
    console.log("No se encontró una sesión en localStorage")
  }

  resetLocalStorage(){
    localStorage.removeItem('sesion');
    console.log("Sesion eliminada de localStorage");
  }
  buscarusuarios() {
    return this.query('usuarios/get', 'get');
  }
  ingresar(usuario){
    console.log('usuario: ', usuario);
    /*
    usuario={
      email: string
      password: string
    }
    */
    return this.query('acceso/usuarios/login', 'post', usuario).pipe(
      // atrapar la respuesta y almacenar el jwt en localstorage
      map((responseData: any) => {
        console.log('respuesta ingreso:', responseData);
        //la respuesta esta vacia si no existe con los datos proveidos
        //asi que evaluamos...
        if(!responseData || !responseData.usuario || !responseData.usuario.id){
          return alert("Sus credenciales no coinciden con ninguna cuenta en el sistema.")
        }
        this.jwt = responseData.jwt;
        this.ingresado = responseData.usuario;
        this.fixLocalStorage();
        
      })
    );
  }

  logout(){
    this._swal.logout().then((respuesta)=>{
      if(respuesta.value){
        console.log("logout!")
        setTimeout(()=>{
          this.ingresado = {
            id: 0,
            nombre: ''
          }
          this.jwt='';
          this.resetLocalStorage();
          this.router.navigateByUrl('/home');
          this._swal.toast('Sesión cerrada.');
        })
      }
    });
  }

}
