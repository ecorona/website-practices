import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ClientesService } from '../services/clientes.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _clientes: ClientesService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    console.log('guard, accesando a ruta:', route);
    console.log('state:', state);

    // tiene cliente y un id?
    if (this._clientes.ingresado.id && this._clientes.llave) {
      return true; //si puede entrar a la ruta
    } else { //no puede entrar y lo mandamos a login
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
