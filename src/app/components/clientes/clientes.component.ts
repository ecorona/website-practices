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
    private cliente: GetService,
  ) {

   }
  ngOnInit(): void {
    this.buscarClientes()
  }
 
   error = false;

   buscarClientes(){
     console.log("buscando clientes");
     this.cliente.buscarClientes().subscribe(resp =>{
      console.log("respueste de Get", resp );
      this.clientes = resp.data
     


     }, (err) => {

      this.error = true;
      console.log('error traer registros', err);
      
     });
   }

   borrarCliente(cliente){
     console.log("borrando cliente", cliente);
     this.cliente.borrarCliente({
       id: cliente.id
     }).subscribe(resp =>{
       console.log("cliente eliminado", resp);
       
       
       
     }, (err) => { //en caso de error en el http request
      //mostrar el mensaje de error (html) cambiando la variable.
      
      console.log('error al borrar registro:', err);
     });
     
   }
   
   
}
