import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Pais} from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {
private apiUrl:string="https://restcountries.com/v3.1/";
// private apiUrl2:string="https://restcountries.com/v2";
// importamo el HttpClient para poder usar las peticiones ya que importamos desde el modulo principal el modulo de HttpClientModule
  constructor( private http:HttpClient ){}
// buscamos la api y de decimos que es de tipo Observable ya que es un objeto de cualquier tipo
//de añadimos un generico de tipo Pais de la interfaces para que nos devuelva todos las opciones de la
// pero es un arreglo entonces lo metemos como un arreglo de paises de genericos
buscarPais(termino:string):Observable<Pais[]>{
// Creamos la url para buscar por pais
const url = `${this.apiUrl}/name/${termino}`
// retornamos el valor para utilizarla en el modulo pais 
// pero es un arreglo entonces lo metemos como un arreglo de paises de genericos
return this.http.get<Pais[]>(url);
//hacemos una peticion con el httpcliente para hacer por si hay un error en la
//igual lo podemos hacer con subscribe
//ejemplo
// return this.http.get(url).pipe(
// //el of convierte lo que esta adentro en un observador y lo retorna de vuelta
//         catchError((err) => of (["Este es un erro con un http ejemplo"]))
// );
}
     buscarCapital(termino:string):Observable<Pais[]>{  
       const url = `${this.apiUrl}/capital/${termino}`
       return this.http.get<Pais[]>(url);}
  
     getCodigo(id:string):Observable<Pais>{
       const url = `${this.apiUrl}/alpha/${id}`
       return this.http.get<Pais>(url);}

}
