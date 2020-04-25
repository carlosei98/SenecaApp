import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Toast} from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  info: any = {};
  nombre: string;

  constructor(private http: HttpClient, private router: Router) {
  }

login(user, password) {
   this.http.post('http://localhost:5000/login/' + user + '&' + password, {responseType: 'json'}).subscribe(data => {
      if (data != null) {
          this.info = data;
          this.nombre = this.info.usuario;
          this.router.navigate(['/inicio']);
      } else {
          Toast.show({
              text: 'Usuario/ Contraseña incorrectos',
              duration: 'long'
          });
      }
    });
  }
}
