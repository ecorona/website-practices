import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public background: BackgroundService,
    private _clientes: ClientesService,
    private _usuarios: UsuariosService
  ) {
    this.initializeApp();
  }
  initializeApp() {
    console.log('Aqui vamos, inicializando app!');
    //el usuario existe en localStorage? cargarlo!
    this._clientes.loadLocalStorage();
    this._usuarios.loadLocalStorage();
  }
}
