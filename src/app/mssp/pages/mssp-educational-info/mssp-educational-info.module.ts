import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsspEducationalInfoRoutingModule } from './mssp-educational-info-routing.module';
import { MsspEducationalInfoComponent } from './mssp-educational-info.component';

@NgModule({
  declarations: [MsspEducationalInfoComponent],
  imports: [
    CommonModule,
    MsspEducationalInfoRoutingModule
  ]
})
export class MsspEducationalInfoModule { }
