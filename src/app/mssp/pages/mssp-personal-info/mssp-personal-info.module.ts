import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsspPersonalInfoRoutingModule } from './mssp-personal-info-routing.module';
import { MsspPersonalInfoComponent } from './mssp-personal-info.component';

@NgModule({
  declarations: [MsspPersonalInfoComponent],
  imports: [
    CommonModule,
    MsspPersonalInfoRoutingModule
  ]
})
export class MsspPersonalInfoModule { }
