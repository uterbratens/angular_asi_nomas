import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosService } from './servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { GuardService } from './servicios/guard.service';

const rutas: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'proveedores', component: ProveedoresComponent,
    canActivate: [GuardService]
  },
  {
    path: 'addprov', component: AddproveeComponent,
    canActivate: [GuardService]
  },
  {
    path: 'addpres', component: AddpresComponent,
    canActivate: [GuardService]
  },
  {
    path: 'presupuestos', component: PresupuestosComponent,
    canActivate: [GuardService]
  },
  {
    path: 'editpres/:id', component: EditpresComponent,
    canActivate: [GuardService]
  },
  {
    path: 'registro', component: RegistroComponent,
  },
  { path: 'inises', component: InisesComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    Error404Component,
    NavbarComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [ProveedoresService, PresupuestosService, AutenticacionService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
