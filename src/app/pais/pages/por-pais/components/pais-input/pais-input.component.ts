import { Component,EventEmitter, Output,OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-input-pais',
  templateUrl: './pais-input.component.html',
})
export class paisInputComponent implements OnInit {
termino:string = ''
//creamos nuestro evento con Output para poder enviar el termino y que haga el evento que buscamo
//ya que esta en otro componente  y pones onEnter para indicar que es un evento que
//y de paso el tipo de elemento que va recibir <string>
// lo hacemos para que pueda escuchar el evento que esta en otro componente
@Output() onEnter:EventEmitter<string> = new EventEmitter ();
//Hacemos otro evento para hacer las sugerencias 
@Output() onDebounce:EventEmitter<string> = new EventEmitter();
//un subjet es igual que un observavor de angular 
//la idea se este debounce que se emita cuando uno deja de escribir
debounce:Subject<string>=new Subject();
ngOnInit(): void {

this.debounce
//el pipe nos permite transformar la salida de subscribe 
.pipe(
//indicamos con el debounceTime que nos ejeceute despues de 3 seg
//asi como si fueara un setTime en js
debounceTime(300))
.subscribe((res)=>{
console.log("debounce",res);
//mandamos el valor de la respuesta
this.onDebounce.emit(res);
})
}
 
 buscar():void{
 //emitimos el termino asi el otro componente
 this.onEnter.emit(this.termino); 
 }
 tecla():void{
 //mandamos el siguiente valor con next
 //mandamos a llamar el ngOnInit cada vez que teclee algo nuestra app.
   this.debounce.next(this.termino);
   }
 
}