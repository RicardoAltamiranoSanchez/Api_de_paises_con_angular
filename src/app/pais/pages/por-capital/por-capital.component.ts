import { Component} from '@angular/core';
import {PaisService} from '../../services/pais.service';
import{Pais}  from '../../interfaces/pais-interface';
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
termino:string="";
error:boolean=false;
capitales:Pais[]=[];
busqueda="Buscar por Capital";
constructor( private paisService:PaisService ){}
 
 
 buscar(termino:string):void{
 //lo inicializamos cada vez que busque algo para que no nos muestre el error
 this.error=false;
 this.termino=termino;
 
 
//  mandamos a llamar el modulo donde tenemos el servicio y de pasamos el termino para la busqueda
 this.paisService.buscarCapital(this.termino)
//  el subscribe seria como el then en fetch 
 .subscribe( (res)=>{
  this.capitales=res;
  console.log("Desde la api de Capitales");
  console.log(this.capitales);
 },
 //por si hay un error activamos el div de error y ponemos true a error
 (error)=>{
 this.error=true;
 console.log(error)
 this.capitales=[];
 
 })
 
 console.log(this.termino);
 
 }
 
 
 
 
}