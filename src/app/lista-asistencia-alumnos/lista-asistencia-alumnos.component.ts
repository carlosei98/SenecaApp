import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-lista-asistencia-alumnos',
  templateUrl: './lista-asistencia-alumnos.component.html',
  styleUrls: ['./lista-asistencia-alumnos.component.scss'],
})
export class ListaAsistenciaAlumnosComponent implements OnInit {
  asignatura: string;

  constructor(private service: ApiService) {
    this.service.listarAsignaturas();
  }

  ngOnInit() {}

}
