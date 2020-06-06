import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { BackgroundService } from 'src/app/services/background.service';

@Component({
  selector: 'app-nav-categorias',
  templateUrl: './nav-categorias.component.html',
  styleUrls: ['./nav-categorias.component.scss']
})
export class NavCategoriasComponent implements OnInit {

  categorias = [];

  categoria = 0;
  productos = [];

  constructor(
    public _categorias: CategoriasService,
    private route: ActivatedRoute,
    public _productos: ProductosService,
    public _background: BackgroundService
  ) { }

  ngOnInit(): void {
    this._background.setClase('categorias');
    //al inicio, traer las categorias
    this.buscarCategorias();

    this.route.params.subscribe(params => {
      this.categoria = +params['idCategoria']; // (+) converts string 'id' to a number
      //si el parametro de ruta :idCategoria es cero, traer de productos, las ofertas
      if (this.categoria == 0) {
        this.buscarOfertas();
      } else if (this.categoria > 0) {
        //si es mayor a cero, traer los productos de esa categoria
        this.verCategoria();
      }
      // this.productos = lo que regrese el service de productos.verCategoria(this.categoria);
    });




  }

  buscarOfertas() {
    console.log('buscando ofertassssssssssssssss');
    this._productos.verOfertas().subscribe(
      (resp) => {
        console.log('respueste de Get Ofertas', resp);
        setTimeout(() => {
          // this.productos = lo que regrese el service de productos.verOfertas()
          this.productos = resp; //insertarlos en el array
        });
      },
      (err) => {
        this.error = true;
        console.log('error traer ofertas', err);
      }
    );
  }

  verCategoria() {
    this._productos.verCategoria(this.categoria).subscribe(
      (resp) => {
        console.log('respueste de Get', resp);
        setTimeout(() => {
          this.productos = resp; //insertarlos en el array
        });
      },
      (err) => {
        this.error = true;
        console.log('error traer categorias', err);
      }
    );
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

}
