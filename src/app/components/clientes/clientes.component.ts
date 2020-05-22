import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent{

  clientes = []

  constructor(
    private _get: GetService,
  ) {

   }

 
   error = false;
   buscarClientes(clientes){
     console.log("buscando clientes");
     this._get.buscarClientes({clientes}).subscribe(resp =>{
      console.log("respueste de Get", resp );
      
     


     }, (err) => {

      this.error = true;
      console.log('error en registro', err);
      
     });
   }
   
}
