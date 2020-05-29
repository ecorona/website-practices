import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { HomeComponent } from './components/home/home.component';
import { OurWorkComponent } from './components/our-work/our-work.component'
import { MethologyComponent } from './components/methology/methology.component';
import { WhoWAreComponent } from './components/who-ware/who-ware.component';
import { BlogComponent } from './components/blog/blog.component';
import { RegistroComponent } from './components/clientes/registro/registro.component';
import { ClientesComponent } from './components/admin/clientes/clientes.component';
import { LoginComponent } from './components/clientes/login/login.component';
import { LoginUsuariosComponent } from './components/usuarios/login-usuarios/login-usuarios.component';
import { PerfilComponent } from './components/clientes/perfil/perfil.component';

import { ClientesGuard } from './guards/clientes.guard';
import { UsuariosGuard } from './guards/usuarios.guard';


const routes: Routes = [
  {
    path: 'whatwedo',
    component: WhatWeDoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ourwork',
    component: OurWorkComponent
  },
  {
    path: 'methology',
    component: MethologyComponent
  },
  {
    path: 'whoweare',
    component: WhoWAreComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  /*{
    path: 'miperfil',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },*/
  {
    path: 'clientes',
    component: ClientesComponent,
    canActivate: [UsuariosGuard],
    data: {
      perfil: 'admin'
    }
  },
  {
    path: 'usuarios/login',
    component: LoginUsuariosComponent,
  },
  {
    path: 'clientes/perfil',
    component: PerfilComponent,
    canActivate: [ClientesGuard]
  },
  {

    path:'**', redirectTo: 'home' //cualquier otra ruta, mandar a home (DEFAULT)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
