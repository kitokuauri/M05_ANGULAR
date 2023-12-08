import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../transferencia.service';
import { Transferencia } from './transferencia.model';
import { ConversionService } from '../conversion-json.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})

export class TransferenciaComponent implements OnInit {

  transferencias: Transferencia[] = [];

  transJson: string='';
  mostrarConvertidosAJson = false;
  mostrarConvertidosDesdeJson=false;

  constructor(private http: HttpClient, private transferenciaService: TransferenciaService, private conversionService: ConversionService) {}

  ngOnInit(): void {
    this.transferenciaService.obtenerTransferencia().subscribe(datos =>{
      console.log(datos);
      this.transferencias = datos;
    })
  }

  convertirDesdeJson(): void {
    if (this.transJson) {
      const arrayGest: Transferencia[] = this.conversionService.convertirDesdeJson(this.transJson);
      this.transferencias = arrayGest;
      this.mostrarConvertidosDesdeJson = true;
    }
  }

  convertirTransAJson(): void {
      this.transJson = this.conversionService.convertirTransAJson(this.transferencias);
      this.mostrarConvertidosAJson = true;
  }

  ocultarConvertidos(): void {
    this.mostrarConvertidosAJson = false;
    this.mostrarConvertidosDesdeJson = false;
  }

  ocultarConvertidosDesdeJson(): void {
    this.mostrarConvertidosDesdeJson = false;
  }

}

