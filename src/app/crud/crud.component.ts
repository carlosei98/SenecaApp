import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {IonList, ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  persona: any = {};
  mySubscription: any;
  accion: string;

  constructor(private service: ApiService, private modalController: ModalController) {this.service.obtenerUsuarios(); }

  ngOnInit() {

  }

  borrar(i: number) {
    this.persona = this.service.listaPersonas[i];
    this.service.borrarUsuario(this.persona.id);
    this.service.listaPersonas.splice(i, 1);
  }

    logout($event: MouseEvent) {
    }

  async modificar(i: number) {
    this.persona = this.service.listaPersonas[i];
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        controller: this.modalController,
        persona: this.persona,
        accion: 'Modificar usuario'
      }
    });
    await modal.present();
  }

  async alta() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        controller: this.modalController,
        persona: this.persona,
        accion: 'Nuevo usuario'
      }
    });
    await modal.present();
  }
}
