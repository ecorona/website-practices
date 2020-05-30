import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  constructor() {}

  toast(icon, title?) {
    //si se pone un solo parametro, es el titulo, y por default, usar icon success
    if (!title && icon) {
      title = icon;
      icon = 'success';
    }
    Swal.fire({
      position: 'top-end',
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2000,
    });
  }

  borrarRegistro() {
    return Swal.fire({
      title: 'Está seguro?',
      text: 'No podrá deshacer esta acción!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      // cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    });
  }
  borrarCliente() {
    return Swal.fire({
      title: 'Está seguro?',
      text: 'No podrá deshacer esta acción!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      // cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    });
  }

  logout() {
    return Swal.fire({
      title: 'Está seguro?',
      text: 'Su sesión se va a cerrar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      // cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Cerrar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    });
  }
  borradoExitoso() {
    return Swal.fire({
      title: 'Borrado!',
      text: 'El registro ha sido eliminado',
      icon: 'success',
    });
  }

  confirmarRegistro() {
    return Swal.fire({
      title: 'Está seguro?',
      text: 'No podrá deshacer esta acción!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      // cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Guardar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    });
  }

  creadoExitoso() {
    return Swal.fire({
      title: 'Guardado!',
      text: 'Los datos han sido guardados correctamente!',
      icon: 'success',
    });
  }
}
