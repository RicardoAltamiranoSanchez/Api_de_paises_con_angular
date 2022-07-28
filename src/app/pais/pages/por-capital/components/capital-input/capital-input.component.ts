import { Component,EventEmitter, Output,OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-input-pais',
  templateUrl: './capital-input.component.html',

})
export class capitalInputComponent implements OnInit {
termino:string = ''
@Output() onEnter:EventEmitter<string> = new EventEmitter ();
@Output() onDebounce:EventEmitter<string> = new EventEmitter();

debounce:Subject<string>=new Subject();
ngOnInit():void{
this.debounce
.pipe( debounceTime(300) )
.subscribe((res)=>{
console.log("debounce",res);
this.onDebounce.emit(res);
})}

 buscar():void{
 
 this.onEnter.emit(this.termino); 
 }
 tecla():void{
 this.debounce.next(this.termino);
 
 }
 
}