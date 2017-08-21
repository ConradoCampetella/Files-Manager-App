import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LittleSpinnerComponent } from './little-spinner/little-spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LittleSpinnerComponent
  ],
  exports: [
    CommonModule,
    LittleSpinnerComponent
  ]
})
export class SharedModule { }
