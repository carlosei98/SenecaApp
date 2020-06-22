import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../api.service';
import {Persona} from '../Persona';
import {ModalController, NavParams} from '@ionic/angular';
import {element} from 'protractor';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
    @Input() formModificar: FormGroup;
    @Input() persona: Persona;
    @Input() accion: string;
    listaAsigAlumno: any = [];

    constructor(private service: ApiService, private controller: ModalController, private navParams: NavParams) {
        this.formModificar = new FormGroup({
            nombre: new FormControl(),
            apellidos: new FormControl(),
            dni: new FormControl(),
            calle: new FormControl(),
            localidad: new FormControl(),
            rol: new FormControl()
        });
        this.service.listarAsignaturas();
    }

    ngOnInit() {
        this.accion = this.navParams.get('accion');
    }

    procesar() {
        if (this.accion === 'Modificar usuario') {
            this.modificar();
        } else if (this.accion === 'Nuevo usuario') {
            this.alta();
        }
    }

    modificar() {
        this.service.modificarUsuario(this.persona);
        this.dismiss();
        location.reload();
    }

    dismiss() {
        this.controller.dismiss({
            dismissed: true
        });
    }

    alta() {
        this.service.crearUsuario(this.persona);
        if (this.persona.rol === 'ALUMNO') { this.service.matricular(this.persona, this.listaAsigAlumno); }
        this.dismiss();
    }

    matricularAsig($event: CustomEvent, asignatura: any) {
        // console.log($event);
        // console.log('Asignatura: ' + asignatura.nombre);

        if ($event.detail.checked === true) {
            this.listaAsigAlumno.push(asignatura);
        } else if ($event.detail.checked === false) {
            this.listaAsigAlumno = this.listaAsigAlumno.filter(element => element !== asignatura);
        }
        console.log(this.listaAsigAlumno);
    }
}

