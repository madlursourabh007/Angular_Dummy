import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsspFinancialInfoRoutingModule } from './mssp-financial-info-routing.module';
import { MsspFinancialInfoComponent } from './mssp-financial-info.component';

@NgModule({
  declarations: [MsspFinancialInfoComponent],
  imports: [
    CommonModule,
    MsspFinancialInfoRoutingModule
  ]
})
export class MsspFinancialInfoModule { }
