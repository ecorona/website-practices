import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';

import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { HomeComponent } from './components/home/home.component';
import { OurWorkComponent } from './components/our-work/our-work.component'
import { MethologyComponent } from './components/methology/methology.component';
import { WhoWAreComponent } from './components/who-ware/who-ware.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component'
import { RegistroComponent } from './components/registro/registro.component';

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
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
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
