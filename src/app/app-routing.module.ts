import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { HomeComponent } from './pages/home/home.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { MethologyComponent } from './pages/methology/methology.component';
import { WhoWAreComponent } from './pages/who-ware/who-ware.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RegistroComponent } from './pages/clientes/registro/registro.component';
import { ClientesComponent } from './pages/admin/clientes/clientes.component';
import { LoginComponent } from './pages/clientes/login/login.component';
import { LoginUsuariosComponent } from './pages/usuarios/login-usuarios/login-usuarios.component';
import { PerfilComponent } from './pages/clientes/perfil/perfil.component';
import { UsuariosComponent } from './pages/admin/usuarios/usuarios.component';
import { AdminProductosComponent } from './pages/admin/productos/adminProductos.component';
import { CategoriasComponent } from './pages/admin/categorias/categorias.component';
import { ProductosComponent } from './pages/productos/productos.component';

import { ClientesGuard } from './guards/clientes.guard';
import { UsuariosGuard } from './guards/usuarios.guard';

const routes: Routes = [
  {
    path: 'whatwedo',
    component: WhatWeDoComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'ourwork',
    component: OurWorkComponent,
  },
  {
    path: 'methology',
    component: MethologyComponent,
  },
  {
    path: 'whoweare',
    component: WhoWAreComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
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
      perfil: 'admin',
    },
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    canActivate: [UsuariosGuard],
    data: {
      perfil: 'admin',
    },
  },
  {
    path: 'usuarios/productos',
    component: AdminProductosComponent,
    canActivate: [UsuariosGuard],
    data: {
      perfil: 'admin',
    },
  },
  {
    path: 'usuarios/categorias',
    component: CategoriasComponent,
    canActivate: [UsuariosGuard],
    data: {
      perfil: 'admin',
    },
  },
  {
    path: 'usuarios/login',
    component: LoginUsuariosComponent,
  },
  {
    path: 'clientes/perfil',
    component: PerfilComponent,
    canActivate: [ClientesGuard],
  },
  {
    path: '**',
    redirectTo: 'home', //cualquier otra ruta, mandar a home (DEFAULT)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
