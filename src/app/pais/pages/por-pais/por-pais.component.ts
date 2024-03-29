import { Component} from '@angular/core';
import {PaisService} from '../../services/pais.service';
import{Pais}  from '../../interfaces/pais-interface';
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
termino:string="";
error:boolean=false;
paises:Pais[]=[];
pais_sugerencias:Pais[]=[];
busqueda="Buscar por País";
existe:boolean=false;
constructor( private paisService:PaisService ){}
 
 
 buscar(termino:string):void{
this.existe=false;
 //lo inicializamos cada vez que busque algo para que no nos muestre el error
 this.error=false;
 this.termino=termino;
 
//  mandamos a llamar el modulo donde tenemos el servicio y de pasamos el termino para la busqueda
 this.paisService.buscarPais(this.termino)
//  el subscribe seria como el then en fetch 
 .subscribe( (res)=>{
  this.paises=res;
  console.log("Desde la api de paises");
  console.log(this.paises);
 },
 //por si hay un error activamos el div de error y ponemos true a error
 (error)=>{
 this.error=true;
 console.log(error)
 this.paises=[];
 
 })
 
 console.log(this.termino);
 
 }
 
 sugerencias(termino:string):void{
  this.error=false;
  this.termino=termino;
  this.existe=true
 
  //Creamos las sugerencias 
 
 this.paisService.buscarPais(termino)
 .subscribe((response)=>{
  this.pais_sugerencias=response.splice(0,5);
  console.log(response);
 
 })
 
 
 }
 
 
}
