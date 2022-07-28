import { NgModule } from '@angular/core';
//esta es una libreria de angular es para mostrar rutas y importar RouterModules y Routes
import{RouterModule, Routes} from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import {PorCapitalComponent} from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
// creamos una arreglo de rutas y importamos Routes para decir de que tipo
//va hacer nuestro arreglo

const Rutas:Routes =[
{
//añadimos el path o la ruta que va llevar y el componente que va utilizar
//el pathMatch es para indicar que va ser la ruta principal o la primera que va mostrar
  path:"",
  component: PorPaisComponent,
  pathMatch:"full"

},{
   path:"region",
   component:PorRegionComponent

},{
    path:"capital",
    component:PorCapitalComponent

},{
// en el path ponemos el : para indicar que va ir un valor
    path:"pais/:id",
    component:VerPaisComponent

},{
// Este path es por default cualquier ruta que no este la mandamos ala pagina de inicio
// y lo redirigimos con redirectTo
  path:"**",
  redirectTo:""

}

]


@NgModule({
  
  imports:[
  // importamos el modulo de RouterModule.forRoot indica que usaremos la pagina principal el child es para usar paginas hijas
  RouterModule.forRoot(Rutas)
   
  ],
  exports: [
  //esportamos el RouterModule para utilizar en toda la pagina y indicar las rutas
  // Debemos importarlo al nuestro modulo principal
  RouterModule
  
  ]
})


export class RutasModuleComponents{

};