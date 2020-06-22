import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Toast} from '@capacitor/core';
import {Persona} from './Persona';
import {Asistencia} from './Asistencia';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public USUARIO_ACTUAL: Persona;
    public listaAsistenciaAlumno: any = [];
    public listaAsistenciaAlumnoDia: any = [];
    public listaPersonas: any = [];
    public listaAsistenciaAlumnos: any = [];
    public listaAsistenciaAsig: any = [];
    public listaAsignaturas: any = [];

    constructor(private http: HttpClient, private router: Router) {
    }

    login(user, password) {
        this.http.post('http://carlosei98.dynamic-dns.net:5000/logueo/' + user + '&' + password, {responseType: 'json'}).subscribe(data => {
            if (data != null) {
                this.USUARIO_ACTUAL = data as Persona;
                this.router.navigate(['/inicio']);
            } else {
                Toast.show({
                    text: 'Usuario/ Contraseña incorrectos',
                    duration: 'long'
                });
            }
        });
    }

    obtenerUsuarios(): any {
        this.http.get('http://carlosei98.dynamic-dns.net:5000/personas/listPersonas', {responseType: 'json'}).subscribe(data => {
            this.listaPersonas = data;
        });
    }

    borrarUsuario(info: any): boolean {
        let ret = false;
        this.http.delete('http://carlosei98.dynamic-dns.net:5000/persona/borrar/' + info, {observe: 'response'}).subscribe(data => {
                if (data.status === 200) {
                    Toast.show({
                        text: 'Usuario borrado.',
                        duration: 'long'
                    });
                    ret = true;
                } else {
                    Toast.show({
                        text: 'Error al borrar usuario.',
                        duration: 'long'
                    });
                    ret = false;
                }
            }
        );
        return ret;
    }

    async modificarUsuario(persona: Persona) {
        await this.http.put('http://carlosei98.dynamic-dns.net:5000/persona/modificar/' + persona.id, persona, {observe: 'response'}).subscribe(data => {
            if (data.status === 200) {
                Toast.show({
                    text: 'Usuario modificado.',
                    duration: 'long'
                });
            } else {
                Toast.show({
                    text: 'Error al borrar usuario.',
                    duration: 'long'
                });

            }
        });
    }

    async crearUsuario(persona: Persona) {
        if (persona.usuario == null && persona.contraseña == null) {
            persona.usuario = persona.nombre.substr(0, 3).concat(persona.apellidos.substr(0, 3));
            const letras = 'abcdefghijklmnopqrstuvwxyz0123456789/*-+_.,!"·$%&/()=?¿'.split('');
            persona.contraseña = '';
            for (let i = 0; i < Math.floor(Math.random() * 40) + 3; i++) {
                persona.contraseña.concat(letras[i]);
            }
        }
        await this.http.put('http://carlosei98.dynamic-dns.net:5000/registro/', persona, {observe: 'response'}).subscribe(data => {
            if (data.status === 200) {
                Toast.show({
                    text: 'Usuario creado.',
                    duration: 'long'
                });
            } else {
                Toast.show({
                    text: 'Error al crear el usuario.',
                    duration: 'long'
                });

            }
        });
    }

    async listarAsistencias() {
        await this.http.post('http://carlosei98.dynamic-dns.net:5000/asistencia/listar', this.USUARIO_ACTUAL, {responseType: 'json'}).subscribe(data => {
            this.listaAsistenciaAlumno = data;
        });
    }

    async listarAlumnosPorDiaYHora(tramoHorario: string, dia?: string) {
        this.listaAsistenciaAlumnos = [];
        if (dia === void 0) {
            switch (new Date().getDay()) {
                case 1:
                    dia = 'LUNES';
                    break;
                case 2:
                    dia = 'MARTES';
                    break;
                case 3:
                    dia = 'MIERCOLES';
                    break;
                case 4:
                    dia = 'JUEVES';
                    break;
                case 5:
                    dia = 'VIERNES';
                    break;
            }

            this.http.post('http://carlosei98.dynamic-dns.net:5000/alumnos/' + dia + '&' + tramoHorario, {responseType: 'json'}).subscribe(data => {
                if (data != null) {
                    this.listaAsistenciaAlumnoDia = data as Persona;
                }
            });
        } else {
            this.http.post('http://carlosei98.dynamic-dns.net:5000/asistencia/listar/' + dia.substr(0, 10) + '&' + tramoHorario, {responseType: 'json'}).subscribe(data => {
                if (data != null) {
                    this.listaAsistenciaAlumnoDia = data as Persona;
                }
            });
            this.router.navigate(['/modificar-faltas-alumnos']);
        }
    }

    async guardarAsistencias(alumnos: Asistencia[]) {
        await this.http.put('http://carlosei98.dynamic-dns.net:5000/asistencia/guardar', alumnos, {observe: 'response'}).subscribe(data => {
            if (data.status === 200) {
                Toast.show({
                    text: 'Asistencias guardadas.',
                    duration: 'long'
                });
            } else {
                Toast.show({
                    text: 'Error al guardar las asistencias.',
                    duration: 'long'
                });

            }
        });
    }

    obtenerDia(): string {
        let dia: string;
        switch (new Date().getDay()) {
            case 1:
                dia = 'LUNES';
                break;
            case 2:
                dia = 'MARTES';
                break;
            case 3:
                dia = 'MIERCOLES';
                break;
            case 4:
                dia = 'JUEVES';
                break;
            case 5:
                dia = 'VIERNES';
                break;
        }
        return dia;
    }

    async listarAsistenciasAsignatura(asignatura: string) {
        await this.http.get('http://carlosei98.dynamic-dns.net:5000/asitencia/listar/' + asignatura, {responseType: 'json'}).subscribe(data => {
            this.listaAsistenciaAsig = data;
        });
    }

    async listarAsignaturas() {
        await this.http.get('http://carlosei98.dynamic-dns.net:5000/asignaturas/all', {responseType: 'json'}).subscribe(data => {
            this.listaAsignaturas = data;
        });
    }

    async matricular(persona: Persona, listaAsigAlumno: any) {
        // tslint:disable-next-line:max-line-length
        await this.http.post('http://carlosei98.dynamic-dns.net:5000/alumnos/getID/' + persona.nombre + '&' + persona.apellidos, null, {responseType: 'json'}).subscribe(data => {
            if (data != null) {
                // tslint:disable-next-line:max-line-length
                this.http.put('http://carlosei98.dynamic-dns.net:5000/asignaturas/matricular/' + String(data), listaAsigAlumno, {observe: 'response'}).subscribe(data2 => {
                    if (data2.status === 200) {
                        Toast.show({
                            text: 'Alumno matriculado.',
                            duration: 'long'
                        });
                    } else {
                        Toast.show({
                            text: 'Error al matricular el alumno.',
                            duration: 'long'
                        });
                    }
                });
            }
        });
    }
}
