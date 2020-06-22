import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-lista-asistencia',
  templateUrl: './lista-asistencia.component.html',
  styleUrls: ['./lista-asistencia.component.scss'],
})
export class ListaAsistenciaComponent implements OnInit {
  constructor(private service: ApiService) { }

  ngOnInit() {
    this.service.listarAsistencias();
  }


    logout($event: MouseEvent) {
    }
}
