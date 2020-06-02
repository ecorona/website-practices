import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import * as _ from 'lodash';
import { BackgroundService } from 'src/app/services/background.service';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class AdminProductosComponent implements OnInit {
  productoForm: FormGroup;
  categorias: [];

  productos = [];

  constructor(
    private background: BackgroundService,
    public _productos: ProductosService,
    private _builder: FormBuilder,
    public _categorias: CategoriasService
  ) {
    this.productoForm = this._builder.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
      descuento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.buscarProductos(); //al inicio, traer los productos
    this.buscarCategorias();
    this.background.setClase('productos');
  }

  buscarCategorias() {
    console.log('buscando usuarios');
    this._categorias.buscarCategorias().subscribe(
      (resp) => {
        console.log('respueste de Get Categorias', resp);
        setTimeout(() => {
          console.log('id de categorias', resp.id);
          this.categorias = resp; //insertarlos en el array
        });
      },
      (err) => {
        this.error = true;
        console.log('error traer registros', err);
      }
    );
  }

  buscarProductos() {
    console.log('buscando productos');
    this._productos.buscarProductos().subscribe(
      (resp) => {
        console.log('respuesta de Get Productos', resp);
        setTimeout(() => {
          this.productos = resp; //insertarlos en el array
        });
      },
      (err) => {
        this.error = true;
        console.log('error traer productos', err);
      }
    );
  }

  error = false;

  guardarProducto(value) {
    console.log('Se va a agregar:', value);
    this._productos
      .guardarProducto({
        //lanzar solicitud desde el service, recordemos que regresará un http request
        nombre: value.nombre,
        categoria: value.categoria,
        precio: value.precio,
        descuento: value.descuento,
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
          console.log('error en guardado de producto:', err);
        }
      );
  }

  buscarProducto() {
    console.log('buscando productos');
    this._productos.buscarProductos().subscribe(
      (resp) => {
        console.log('respuesta de Get', resp);
        setTimeout(() => {
          this.productos = resp; //insertarlos en el array
        });
      },
      (err) => {
        this.error = true;
        console.log('error traer productos', err);
      }
    );
  }

  borrarProducto(producto) {
    console.log('borrando producto', producto);
    this._productos
      .borrarProducto({
        id: producto.id,
      })
      .subscribe(
        (productoBorrado) => {
          console.log('producto eliminado', productoBorrado);
          if (productoBorrado && productoBorrado.id) {
            // quitar del array de productos, el que fue eliminado
            //buscar su indice en el array, por medio de su id
            let idx = _.findIndex(this.productos, { id: productoBorrado.id });
            if (idx > -1) {
              setTimeout(() => {
                this.productos.splice(idx, 1);
              });
            }
          }
        },
        (err) => {
          //en caso de error en el http request
          //mostrar el mensaje de error (html) cambiando la variable.
          console.log('error al borrar producto:', err);
        }
      );
  }
}
