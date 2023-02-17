import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ListarClienteComponent } from './components/cliente/listar-cliente/listarCliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AñadirClienteComponent } from './components/cliente/añadir-ciente/añadirCliente.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    AñadirClienteComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
