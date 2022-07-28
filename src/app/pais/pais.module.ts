import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {paisTableComponent} from './pages/por-pais/components/pais-table.component';
import { paisInputComponent } from './pages/por-pais/components/pais-input/pais-input.component';


@NgModule({
  declarations: [
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent,
    paisTableComponent,
    paisInputComponent
  ],
  //lo exportamos para poder usarla en toda la app
  exports:[
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent,
    paisTableComponent,
    paisInputComponent
  ],
  imports: [
    CommonModule,
    //lo usamos para utilizar los formularios y sus funciones
    FormsModule,
   // lo importamos para poder usar el routerlink 
     RouterModule
  ]
})
export class PaisModule { }
