import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClientesService } from './clientes.service';
import { UsuariosService } from './usuarios.service';
import { Router } from '@angular/router';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private _usuarios: UsuariosService,
    private _clientes: ClientesService,
    private router: Router,
    private _swal: SwalService
  ) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let request = req;

    // inyectar la llave en los headers de las solicitudes...
    if (this._clientes.jwt || this._usuarios.jwt) {
      request = req.clone({
        setHeaders: {
          authorization: 'Bearer ' + (this._clientes.jwt || this._usuarios.jwt),
        },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error interceptor:', error);
        if (error.status === 401) {
          this._swal.toast('Debe iniciar sesión para acceder a esta parte.');
          this.router.navigateByUrl('/login');
        }
        if (error.status === 498) {
          //el back regresará esto cuando el token presentado tenga un error
          // asi que, informamos al usuario y cerramos su sesión, sea cual sea el caso
          this._swal.toast('Su sesión ha caducado.');
          this._usuarios.resetIngresado();
          this._usuarios.jwt = '';
          this._usuarios.resetLocalStorage();
          this._clientes.resetCliente();
          this._clientes.jwt = '';
          this._clientes.resetLocalStorage();
          this.router.navigateByUrl('/login');
        }
        return throwError(error);
      })
    );
  }
}
