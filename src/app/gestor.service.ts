import { Injectable } from '@angular/core';
import { Gestor } from './gestor/gestor.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestorService {

  private apiUrl = 'http://localhost:8080/gestor';
  private gestoresSubject = new Subject<void>();

  constructor(private http: HttpClient){}

  obtenerGestores(): Observable<Gestor[]>{
    return this.http.get<Gestor[]>(this.apiUrl);
  }
  
}
