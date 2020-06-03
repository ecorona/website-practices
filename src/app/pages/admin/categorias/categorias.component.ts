import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/services/categorias.service';
import * as _ from 'lodash';
import { BackgroundService } from 'src/app/services/background.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  categoriaForm: FormGroup;

  categorias = [];

  constructor(
    private background: BackgroundService,
    private _builder: FormBuilder,
    public _categorias: CategoriasService
  ) {
    this.categoriaForm = this._builder.group({
      nombre: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.buscarCategorias(); //al inicio, traer los categorias
    this.background.setClase('categorias');
  }
  buscarCategorias() {
    console.log('buscando categorias');
    this._categorias.buscarCategorias().subscribe(
      (resp) => {
        console.log('respueste de Get', resp);
        setTimeout(() => {
          this.categorias = resp; //insertarlos en el array
        });
      },
      (err) => {
        this.error = true;
        console.log('error traer categorias', err);
      }
    );
  }

  error = false;

  guardarCategoria(value) {
    console.log('Se va a agregar:', value);
    this._categorias
      .guardarCategoria({
        //lanzar solicitud desde el service, recordemos que regresará un http request
        nombre: value.nombre,
      })
      .subscribe(
        (resp) => {
          //no suscribimos a la respuesta del http request
          console.log('respuesta guardado:', resp);

          // aqui deberiamos mandarlo a una página donde le demos las gracias (/gracias),
          // en esa pagina se van a mostrar sus datos de registro que estamos almacenando en el mismo service
        },
        (err) => {
          //en caso de error en el http request
          //mostrar el mensaje de error (html) cambiando la variable.
          this.error = true;
          console.log('error en guardado de categoria:', err);
        }
      );
  }

  buscarCategoria() {
    console.log('buscando categorias');
    this._categorias.buscarCategorias().subscribe(
      (resp) => {
        console.log('respuesta de Get', resp);
        setTimeout(() => {
          this.categorias = resp; //insertarlos en el array
        });
      },
      (err) => {
        this.error = true;
        console.log('error traer categorias', err);
      }
    );
  }

  borrarCategoria(categoria) {
    console.log('borrando categoria', categoria);
    this._categorias
      .borrarCategoria({
        id: categoria.id,
      })
      .subscribe(
        (categoriaBorrada) => {
          console.log('categoria eliminado', categoriaBorrada);
          if (categoriaBorrada && categoriaBorrada.id) {
            // quitar del array de categorias, el que fue eliminado
            //buscar su indice en el array, por medio de su id
            let idx = _.findIndex(this.categorias, { id: categoriaBorrada.id });
            if (idx > -1) {
              setTimeout(() => {
                this.categorias.splice(idx, 1);
              });
            }
          }
        },
        (err) => {
          //en caso de error en el http request
          //mostrar el mensaje de error (html) cambiando la variable.
          console.log('error al borrar categoria:', err);
        }
      );
  }
}
