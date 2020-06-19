import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from './registro/registro.component';
import {InicioComponent} from './inicio/inicio.component';
import {PasarListaComponent} from './pasar-lista/pasar-lista.component';
import {CrudComponent} from './crud/crud.component';
import {ListaAsistenciaComponent} from './lista-asistencia/lista-asistencia.component';
import {ListaAsistenciaAlumnosComponent} from './lista-asistencia-alumnos/lista-asistencia-alumnos.component';
import {ModificarFaltasAlumnosComponent} from './modificar-faltas-alumnos/modificar-faltas-alumnos.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.HomePageModule)},
  { path: 'registro', component: RegistroComponent},
  { path: 'pasar-lista', component: PasarListaComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'crud', component: CrudComponent },
  { path: 'lista-asistencia', component: ListaAsistenciaComponent},
  { path: 'lista-asistencia-alumnos', component: ListaAsistenciaAlumnosComponent},
  { path: 'modificar-faltas-alumnos', component: ModificarFaltasAlumnosComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
