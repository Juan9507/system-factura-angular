import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../../../services/cliente.service';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-listarCliente',
  templateUrl: './listarCliente.component.html',
  styleUrls: ['./listarCliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  constructor(private cliente: ClienteService, private toaster: ToastrService) { }

  clientes: Cliente[] = []

  ngOnInit() {

    this.listarClientesNew();

  }

  listarClientes(): void {
    this.cliente.listar().subscribe((data) => {
      this.clientes = data;
      console.log(data)

    }, (error) => {
      console.log(error)
    })
  }

  listarClientesNew(): void {
    this.cliente.listar().subscribe(
      {
        next: (data) => {
          this.clientes = data;
          console.log(data)
        },

        error: (error: any) => {
          console.log(error)
        }

      }
    )
  }

}
