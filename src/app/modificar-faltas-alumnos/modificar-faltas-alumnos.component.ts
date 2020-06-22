import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Persona} from '../Persona';
import {DatePipe} from '@angular/common';
import {Asistencia} from '../Asistencia';

@Component({
  selector: 'app-modificar-faltas-alumnos',
  templateUrl: './modificar-faltas-alumnos.component.html',
  styleUrls: ['./modificar-faltas-alumnos.component.scss'],
})
export class ModificarFaltasAlumnosComponent implements OnInit {
  tramoHorario: string;
  dia: string;
  listaAsistencia: any = [];
  constructor(private service: ApiService) { }

  ngOnInit() {}

  ponerAsistencia(event: Event, alumno: Persona, dia: string) {
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    this.listaAsistencia.push(new Asistencia(alumno , dia.substr(0, 8), this.tramoHorario.toUpperCase(), event.target.value.toUpperCase(), 0));
  }

  guardar() {
    this.service.guardarAsistencias(this.listaAsistencia);
  }
}
