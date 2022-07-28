import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importamos el servicio para hacer peticiones http como fetch
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import {RutasModuleComponents} from './app-routing.module';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // importamos la rutas para usarla en toda la app
    RutasModuleComponents,
    PaisModule,
    //lo importamos aqui para que se global y todos los componentes lo puedan usar
    HttpClientModule,
    SharedModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
