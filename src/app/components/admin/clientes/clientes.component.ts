import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{

  clientes = [] //este array contiene todos los clientes

  constructor(
    private _clientes: ClientesService, //traemos el servicio para manipularlos
  ) {}
  ngOnInit(): void {
    this.buscarClientes() //al inicio, traer los clientes
  }
 
   error = false;

   buscarClientes(){
     console.log("buscando clientes");
     this._clientes.buscarClientes().subscribe(resp =>{
      console.log("respueste de Get", resp );
      setTimeout(()=>{
        this.clientes = resp //insertarlos en el array
      })

     }, (err) => {

      this.error = true;
      console.log('error traer registros', err);
      
     });
   }

   borrarCliente(cliente){
     console.log("borrando cliente", cliente);
     this._clientes.borrarCliente({
       id: cliente.id
     }).subscribe(clienteBorrado =>{
       console.log("cliente eliminado", clienteBorrado);
       if( clienteBorrado && clienteBorrado.id ){
         // quitar del array de clientes, el que fue eliminado 
         //buscar su indice en el array, por medio de su id
         let idx = _.findIndex(this.clientes,{ id: clienteBorrado.id });
         if( idx > -1 ){
          setTimeout(()=>{
            this.clientes.splice(idx,1);
          })
         }
       }
     }, (err) => { //en caso de error en el http request
      //mostrar el mensaje de error (html) cambiando la variable.
      console.log('error al borrar registro:', err);
     });
   }
}
