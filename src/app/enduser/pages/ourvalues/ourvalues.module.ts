import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurvaluesRoutingModule } from './ourvalues-routing.module';
import { OurvaluesComponent } from './ourvalues.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OurvaluesComponent],
  imports: [
    CommonModule,
    OurvaluesRoutingModule
  ],
  providers : [OurvaluesRoutingModule, ReactiveFormsModule]
})
export class OurvaluesModule { }
