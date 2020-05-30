import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InterceptorService } from './services/interceptor.service';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
//componentes
import { HeaderComponent } from './components/header/header.component';

//paginas
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

import { CategoriasComponent } from './components/categorias/categorias.component';
=======
import { ProductosComponent } from './pages/admin/productos/productos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhatWeDoComponent,
    HomeComponent,
    OurWorkComponent,
    MethologyComponent,
    WhoWAreComponent,
    BlogComponent,
    RegistroComponent,
    ClientesComponent,
    LoginUsuariosComponent,
    LoginComponent,
    LoginUsuariosComponent,
    PerfilComponent,
    UsuariosComponent,

    CategoriasComponent,

    ProductosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
