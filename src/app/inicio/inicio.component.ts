import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginPage} from '../login/login.page';
import {UsuarioService} from '../usuario.service';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
    @Input() usuario: string;

    constructor(private router: Router, private usuarioService: UsuarioService) {

    }


    ngOnInit() {
    }


    pasarLista() {
        this.router.navigate(['/pasar-lista']);
    }

    logout($event: MouseEvent) {
        // Todo hacer un modal para cerrar sesión.
    }
}
