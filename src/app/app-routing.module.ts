import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AñadirClienteComponent } from './components/cliente/añadir-ciente/añadirCliente.component';
import { ListarClienteComponent } from './components/cliente/listar-cliente/listarCliente.component';

const routes: Routes = [
  { path: 'clientes', component: ListarClienteComponent },
  { path: 'Crear/cliente', component: AñadirClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
