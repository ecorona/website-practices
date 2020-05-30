import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/services/swal.service';
import { ProductoModel } from 'src/app/interfaces/models';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private SERVER = environment.server;

  jwt = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private _swal: SwalService
  ) {}

  query(query: string, action: string, data?: any) {
    const url = `${this.SERVER}/api/v1/${query}`;
    if (data) {
      return this.http[action](url, data);
    } else {
      return this.http[action](url);
    }
  }

  guardarProducto(producto) {
    console.log('porducto: ', producto);

    return this.query('admin/productos/save', 'post', producto);
  }

  buscarProductos() {
    return this.query('admin/productos/get', 'get');
  }

  borrarProducto(id) {
    return this.query('admin/productos/delete', 'post', id);
  }
}
