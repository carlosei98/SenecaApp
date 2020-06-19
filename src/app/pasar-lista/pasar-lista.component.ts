import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../api.service';
import {Persona} from '../Persona';
import {IonRadio, IonRadioGroup} from '@ionic/angular';
import {Asistencia} from '../Asistencia';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-pasar-lista',
    templateUrl: './pasar-lista.component.html',
    styleUrls: ['./pasar-lista.component.scss'],
})
export class PasarListaComponent implements OnInit {
    tramoHorario = '';
    radioGroup: IonRadioGroup;
    listaAsistencia: Array<Asistencia>;

    constructor(private http: HttpClient, private service: ApiService) {
        this.listaAsistencia = new Array<Asistencia>();
    }


    ngOnInit() {
    }


    guardar() {
        this.service.guardarAsistencias(this.listaAsistencia);
    }

    ponerAsistencia(event: Event, alumno: Persona) {
        const pipe = new DatePipe('en-GB');
        const dia = pipe.transform(Date.now(), 'MM/dd/yy');
         // @ts-ignore
        // tslint:disable-next-line:max-line-length
        this.listaAsistencia.push(new Asistencia(alumno , dia, this.tramoHorario.toUpperCase(), event.target.value.toUpperCase(), 0));
    }
}
