import {Persona} from './Persona';

export class Asistencia {
    persona: Persona;
    dia: string;
    hora: string;
    tipo: string;
    justificada: boolean;


    constructor(persona: Persona, dia: string, hora: string, tipo: string, justificada: boolean) {
        this.persona = persona;
        this.dia = dia;
        this.hora = hora;
        this.tipo = tipo;
        this.justificada = justificada;
    }
}
