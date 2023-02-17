import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../../../services/cliente.service';

@Component({
  selector: 'app-añadirCliente',
  templateUrl: './añadirCliente.component.html',
  styleUrls: ['./añadirCliente.component.css'],
})

export class AñadirClienteComponent implements OnInit {

  createCliente: FormGroup;
  mostrar: boolean = false;

  //CONSTRUCTOR CON LOS SERVICIOS Y EL ROUTER
  constructor(
    private fb: FormBuilder,
    private service: ClienteService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.createCliente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit() {}

  agregarCliente(){
    this.mostrar = !this.mostrar;
    const cliente: any = {
      nombre: this.createCliente.value.nombre,
      apellido: this.createCliente.value.apellido,
      direccion: this.createCliente.value.direccion,
      fechaNacimiento: this.createCliente.value.fechaNacimiento,
      telefono: this.createCliente.value.telefono,
      email: this.createCliente.value.email,
    };

    //SE LLAMA AL  SERVICIO CREATEPERSONA Y SE LE PASA UNA PERSONA COMO PARAMETRO
    this.service.crearCliente(cliente).subscribe({
      next: (data) => {
        if (data) {
          this.toastr.success("Cliente creado", "ok", {
            timeOut: 3000,
            positionClass: "toast-top-center"
          })
          this.router.navigate(['/clientes'])
        }
      },
      error: (error: any) => {
        console.log(error);
      },
    })
  }

}
