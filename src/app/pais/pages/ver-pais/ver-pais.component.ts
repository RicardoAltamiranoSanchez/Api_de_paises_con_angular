import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
//este lo utilizamos para llamar aun observador y mandar otro observador
// lo ocupamos para no mandar a llamar a dos subscribe
//el tap no ayuda a recibir o en donde se aloja en valor
import {switchMap,tap} from 'rxjs/operators';
import { Pais } from '../../interfaces/pais-interface';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
// el activatedRoute es para ver todos los cambios que vienen en el url
  constructor(private activatedRoute: ActivatedRoute,
              private paiseService:PaisService
  ){ }
  
  dato!:Pais;
  ngOnInit(): void {
  
   //formar con el switchMap
   //solo cambiamos el quitar un subscribe y ponemos el switchMap  y mandamos a llamr
   //el servico directamente que nos devuelve un observador el pipe es lo que se nos va ejecutar antes
   //del subscribe
   this.activatedRoute.params.
   pipe(
   switchMap((param)=> this.paiseService.getCodigo(param['id'])),
   tap(console.log)
   )
   .subscribe(res=> this.dato=res[0])
  
  
  //Forma normal
  // // nos ayuda a mostra o encontrar el id que enviamos en la url eso 
  // // lo indicamos desde el path de app-routing.module.ts
  //   this.activatedRoute.params.subscribe(params => {
  //       const {id}=params;
  //       this.paiseService.getCodigo(id).subscribe(response=>{
  //              console.log(response)
  //          })
    
  //   }
  //   )
  
  }

}
