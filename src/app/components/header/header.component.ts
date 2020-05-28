import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _usuarios: UsuariosService, //importamos el registro service (de forma privada) para poder hacer uso de el desde el código
  ) { }

  ngOnInit(): void {
  }

}
