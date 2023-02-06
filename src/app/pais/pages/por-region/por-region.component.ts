import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';
@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  
arreglo:string[]=['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
region_activa:string=""
regiones:Pais[]=[];
error:boolean=false;
  // mandamos a llamar nuestro servicio de PaisSevice 
constructor( private servicioRegion:PaisService ){}


// de cambios los estilos al botton si se presiona
botonActivado(region:string):string {
return (region===this.region_activa)? 'btn btn-primary' : 'btn btn-outline-primary'

}

// funcion para activar la region enviamos 
BusquedaPorRegion(region:string):void{
if(region===this.region_activa){return;}
this.regiones=[]
this.region_activa=region;

this.servicioRegion.buscarRegion(this.region_activa).
subscribe( (res)=>{
  this.regiones=res;
  console.log("Desde api de regiones");
  console.log(this.regiones);
 },
 //por si hay un error activamos el div de error y ponemos true a error
 (error)=>{
 this.error=true;
 console.log(error)
 this.regiones=[];
 
 })

}
 
 
 
}
