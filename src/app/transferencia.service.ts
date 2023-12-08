import { Injectable } from '@angular/core';
import { Transferencia } from './transferencia/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private apiUrl = 'http://localhost:8080/transferencia';
  private transferenciasSubject = new Subject<void>();

  constructor(private http: HttpClient){}

  obtenerTransferencia(): Observable<Transferencia[]>{
    return this.http.get<Transferencia[]>(this.apiUrl);
  }

}
