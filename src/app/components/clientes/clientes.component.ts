import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{

  clientes = []

  constructor(
    private _get: GetService,
  ) {

   }
  ngOnInit(): void {
    this.buscarClientes()
  }

 
   error = false;
   buscarClientes(){
     console.log("buscando clientes");
     this._get.buscarClientes().subscribe(resp =>{
      console.log("respueste de Get", resp );
      this.clientes = resp.data
     


     }, (err) => {

      this.error = true;
      console.log('error traer registros', err);
      
     });
   }
   
}
