import { Component, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private background: BackgroundService,
    public _clientes: ClientesService, //importamos el registro service de forma publica para poder hacer uso de el en la plantilla html
    public _usuarios: UsuariosService
    ) { }

  ngOnInit(): void {
    this.background.setClase('home');
  }

}
