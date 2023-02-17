import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../app/components/cliente/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

constructor( private http: HttpClient  ) { }

  url = "http://localhost:8080/api/"

  public listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url + 'listar/clientes')
  }

  public crearCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.url, cliente)
  }

}
