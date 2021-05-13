import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
    ButtonComponent,
    InputComponent
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
