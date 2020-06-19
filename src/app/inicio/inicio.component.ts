import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
    @Input() datosusuario: any;

    constructor(private router: Router, private usuarioService: ApiService) {

    }


    ngOnInit() {
    }


    pasarLista() {
        this.router.navigate(['/pasar-lista']);
    }

    logout($event: MouseEvent) {
        // Todo hacer un modal para cerrar sesión.
    }

    CRUD() {
        this.router.navigate(['/crud']);
    }

    verFaltas() {
        this.router.navigate(['/lista-asistencia']);
    }

    verFaltasAlumnos() {
        this.router.navigate(['/lista-asistencia-alumnos']);
    }

    modificarFaltasAlumnos() {
        this.router.navigate(['/modificar-faltas-alumnos']);
    }
}
