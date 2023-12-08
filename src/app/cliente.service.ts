import { Injectable } from '@angular/core';
import { Cliente } from './cliente/cliente.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:8080/cliente';
  private clientesSubject = new Subject<void>();

  constructor(private http: HttpClient){}

  obtenerClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl);
  }

}
