import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [ 
    Sidebar],
  imports: [
    CommonModule,
    // lo importamos para poder usar el routerlink 
    RouterModule
  ],
  exports:[ 
  
  Sidebar
  
  ],
})
export class SharedModule { }
