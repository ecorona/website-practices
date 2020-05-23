import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{

  clientes = []

  constructor(
    private _clientes: ClientesService,
  ) {}
  ngOnInit(): void {
    this.buscarClientes()
  }
 
   error = false;

   buscarClientes(){
     console.log("buscando clientes");
     this._clientes.buscarClientes().subscribe(resp =>{
      console.log("respueste de Get", resp );
      setTimeout(()=>{
        this.clientes = resp
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
     }).subscribe(resp =>{
       console.log("cliente eliminado", resp);
       

       
     }, (err) => { //en caso de error en el http request
      //mostrar el mensaje de error (html) cambiando la variable.
      
      console.log('error al borrar registro:', err);
     });
     
   }
   
   
}
