import { Component } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor( public background: BackgroundService, private _clientes: ClientesService){
    this.initializeApp();
  }
  initializeApp() {
    console.log('Aqui vamos, inicializando app!');
    //el usuario existe en localStorage? cargarlo!
    this._clientes.loadLocalStorage();
  }


}
