import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ClientesService } from './clientes.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private _clientes: ClientesService, private router: Router) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let request = req;

    // inyectar la llave en los headers de las solicitudes...
    if (this._clientes.llave) {
      request = req.clone({
        setHeaders: {
          authorization: this._clientes.llave,
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error interceptor:', error);
        if (error.status === 401) {
          alert("Debe iniciar sesión para acceder a esta parte.");
          this.router.navigateByUrl('/login');
        }
        return throwError(error);
      })
    );
  }

}
