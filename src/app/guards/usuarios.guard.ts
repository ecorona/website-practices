import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosGuard implements CanActivate {

  constructor(
    private _usuarios: UsuariosService,
    private router: Router,
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    console.log('guard, accesando a ruta:', route);
    console.log('state:', state);

    // tiene cliente y un id?
    if (this._usuarios.ingresado.id && this._usuarios.jwt) {
      return true; //si puede entrar a la ruta
    }else { //no puede entrar y lo mandamos a login
      this.router.navigateByUrl('/usuarios/login');
      return false;
    }


  }

}
