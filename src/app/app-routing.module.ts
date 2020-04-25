import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RegistroComponent} from './registro/registro.component';
import {InicioComponent} from './inicio/inicio.component';
import {PasarListaComponent} from './pasar-lista/pasar-lista.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.HomePageModule)},
  { path: 'registro', component: RegistroComponent},
  { path: 'pasar-lista', component: PasarListaComponent},
  { path: 'inicio', component: InicioComponent, data: {
    usuario: String
    }}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
