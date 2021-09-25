import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialDesignModule } from '../@material-design/material-design.module';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports: [NavbarComponent]
})
export class SharedModule { }
