import { Component, OnInit, OnDestroy } from '@angular/core';
import { GestorService } from '../gestor.service';
import { Gestor } from './gestor.model';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ConversionService } from '../conversion-json.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})

export class GestorComponent implements OnInit, OnDestroy {

  gestores: Gestor[] = [];
  gestoresMostrados: Gestor[] = [];

  private intervalSubscription: Subscription | undefined;
  public gestorIndex = 0;

  gestoresJson: string='';
  mostrarConvertidosAJson=false;
  mostrarConvertidosDesdeJson=false;

  constructor(private http: HttpClient, private gestorService: GestorService, private conversionService: ConversionService) {}

  ngOnInit(): void {
    this.gestorService.obtenerGestores().subscribe(datos =>{
      console.log(datos);
      this.gestores = datos;
      this.misGestores();
    })
  }

    ngOnDestroy(): void {
      if (this.intervalSubscription) {
        this.intervalSubscription.unsubscribe();
      }
    }
  
    private misGestores(): void {
      this.intervalSubscription = interval(5000)
        .pipe(take(this.gestores.length)) //imaginemos que pudieramos añadir gestores
        .subscribe(() => {
          this.mostrarGestor();
        });
    }
    private mostrarGestor(): void {
      if (this.gestorIndex < this.gestores.length) {
        this.gestoresMostrados.push(this.gestores[this.gestorIndex]);
        this.gestorIndex++;
      }
    }

    convertirDesdeJson(): void {
      if (this.gestoresJson) {
        const arrayGest: Gestor[] = this.conversionService.convertirDesdeJson(this.gestoresJson);
        this.gestoresMostrados = arrayGest;
        this.mostrarConvertidosDesdeJson = true;
      }
    }

    convertirGestoresAJson(): void {
      if (this.gestoresMostrados.length > 0) {
        this.gestoresJson = this.conversionService.convertirGesotresAJson(this.gestoresMostrados);
      }
      this.mostrarConvertidosAJson=true;
    }

    ocultarConvertidos(): void {
      this.mostrarConvertidosAJson=false;
      this.mostrarConvertidosDesdeJson = false;
    }

    ocultarConvertidosDesdeJson(): void {
      this.mostrarConvertidosDesdeJson = false;
    }

}

