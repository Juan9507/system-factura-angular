import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListarClienteComponent } from './components/cliente/listar-cliente/listarCliente.component';

const routes: Routes = [
  { path: 'clientes', component: ListarClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
