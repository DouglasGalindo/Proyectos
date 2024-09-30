import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ɵBrowserAnimationBuilder } from '@angular/animations';

const routes:Routes=[
  //redirectTo: direccion del web service
{path:'', redirectTo:'/api/empleados', pathMatch:'full'},
//path:Nombre que aparecerá en la URL
{path:'empleado', component:EmpleadosComponent},

{path:'', redirectTo:'/api/departamentos', pathMatch:'full'},
//path:Nombre que aparecerá en la URL
{path:'listado-de-departamentos', component:DepartamentosComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    DepartamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule




  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
