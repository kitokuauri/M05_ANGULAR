import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje/mensaje.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private apiUrl = 'http://localhost:8080/mensaje';
  private mensajesSubject = new Subject<void>();

  constructor(private http: HttpClient){}

  obtenerMensajes(): Observable<Mensaje[]>{
    return this.http.get<Mensaje[]>(this.apiUrl);
  }

}
