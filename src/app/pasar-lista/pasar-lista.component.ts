import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-pasar-lista',
    templateUrl: './pasar-lista.component.html',
    styleUrls: ['./pasar-lista.component.scss'],
})
export class PasarListaComponent implements OnInit {

    alumnos: any = [];


    // ToDo hacer que el listado de alumnos sea dependiente del profesor.

    constructor(private http: HttpClient) {
        this.http.get('http://localhost:5000/personas/roleAndProfe/2', {responseType: 'json'}).subscribe(data => {
            if (data != null) {
                this.alumnos = data;
            }
        });
    }


    ngOnInit() {
    }


    guardar() {

    }

}
