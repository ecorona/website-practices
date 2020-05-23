import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { HomeComponent } from './components/home/home.component';
import { OurWorkComponent } from './components/our-work/our-work.component'
import { MethologyComponent } from './components/methology/methology.component';
import { WhoWAreComponent } from './components/who-ware/who-ware.component';
import { BlogComponent } from './components/blog/blog.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';

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
    canActivate: [AuthGuard],
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
