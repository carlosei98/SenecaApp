import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {timeout} from 'rxjs/operators';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})

export class LoginPage {
    user: string;
    password: string;
    loginForm: FormGroup;

    constructor(private service: ApiService, public formBuilder: FormBuilder) {
        this.loginForm = new FormGroup({
            user: new FormControl(),
            password: new FormControl()
        });
    }

    login() {
        this.service.login(this.loginForm.value.user, this.loginForm.value.password);
    }
}



