import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UsuarioService} from '../usuario.service';
import {timeout} from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})

export class LoginPage {
    user: string;
    password: string;

    constructor(private service: UsuarioService) {
    }

    login() {
        this.service.login(this.user, this.password);
    }
}



