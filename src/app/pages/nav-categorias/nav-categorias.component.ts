import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';


@Component({
  selector: 'app-nav-categorias',
  templateUrl: './nav-categorias.component.html',
  styleUrls: ['./nav-categorias.component.scss']
})
export class NavCategoriasComponent implements OnInit {

  categorias = [];

  constructor(
    public _categorias: CategoriasService
  ) { }

  ngOnInit(): void {
    this.buscarCategorias(); //al inicio, traer los categorias

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
