import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InterceptorService } from './services/interceptor.service';

//componentes
import { HeaderComponent } from './components/header/header.component';

//paginas
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
