import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RegistroComponent} from './registro/registro.component';
import {InicioComponent} from './inicio/inicio.component';
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {PasarListaComponent} from './pasar-lista/pasar-lista.component';
import {LoginPage} from './login/login.page';
import {HomePageModule} from './login/login.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AppComponent, RegistroComponent, InicioComponent, PasarListaComponent],
  entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, HttpClientJsonpModule, HomePageModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
      LoginPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
