import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos: [];
  constructor(public _productos: ProductosService) {}

  ngOnInit(): void {
    this.buscarProductos();
  }

  error = false;

  buscarProductos() {
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
}
