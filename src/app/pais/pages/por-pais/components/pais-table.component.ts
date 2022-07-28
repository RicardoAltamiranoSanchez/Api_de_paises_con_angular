import { Component,Input} from '@angular/core';
import { Pais} from '../../../interfaces/pais-interface';
@Component({
  selector: 'app-table-pais',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class paisTableComponent {
// recibimo el valor de paises desde el otro componente
@Input("paises") paises:Pais[]=[];
constructor(){}
 
 
}
