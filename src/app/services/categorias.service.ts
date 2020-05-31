import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SwalService } from 'src/app/services/swal.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private SERVER = environment.server;

  jwt = '';

  constructor(private http: HttpClient, private _swal: SwalService) {}

  query(query: string, action: string, data?: any) {
    const url = `${this.SERVER}/api/v1/${query}`;
    if (data) {
      return this.http[action](url, data);
    } else {
      return this.http[action](url);
    }
  }

  guardarCategoria(categoria) {
    console.log('porducto: ', categoria);

    return this.query('admin/categorias/save', 'post', categoria);
  }

  buscarCategorias() {
    return this.query('admin/categorias/get', 'get');
  }

  borrarCategoria(id) {
    return this.query('admin/categorias/delete', 'post', id);
  }
}
