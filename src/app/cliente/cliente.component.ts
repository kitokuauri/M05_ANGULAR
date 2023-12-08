import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from './cliente.model';

import { HttpClient } from '@angular/common/http';

import { ConversionService } from '../conversion-json.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  clientes: Cliente[] = [];

  clientesJson: string='';
  mostrarConvertidosAJson=false;
  mostrarConvertidosDesdeJson=false;

  constructor(private http: HttpClient, private clienteService: ClienteService, private conversionService: ConversionService) {}

  ngOnInit(): void {
    this.clienteService.obtenerClientes().subscribe(datos =>{
      console.log(datos);
      this.clientes = datos;
    })
  }

  convertirDesdeJson(): void {
    if (this.clientesJson) {
      const arrayGest: Cliente[] = this.conversionService.convertirDesdeJson(this.clientesJson);
      this.clientes = arrayGest;
      this.mostrarConvertidosDesdeJson = true;
    }
  }

  convertirClientesAJson(): void {
      this.clientesJson = this.conversionService.convertirClientesAJson(this.clientes);
      this.mostrarConvertidosAJson = true;
  }

  ocultarConvertidos(): void {
    this.mostrarConvertidosAJson=false;
    this.mostrarConvertidosDesdeJson = false;
  }

  ocultarConvertidosDesdeJson(): void {
    this.mostrarConvertidosDesdeJson = false;
  }

}

