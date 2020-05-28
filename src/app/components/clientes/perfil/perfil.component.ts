import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

 

  constructor(
   public _clientes: ClientesService
  ) {}
  ngOnInit(): void {
  }
  error = false;


}
