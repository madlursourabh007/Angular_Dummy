import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsspHomePageRoutingModule } from './mssp-home-page-routing.module';
import { MsspHomePageComponent } from './mssp-home-page.component';

@NgModule({
  declarations: [MsspHomePageComponent],
  imports: [
    CommonModule,
    MsspHomePageRoutingModule
  ],
  providers : [MsspHomePageRoutingModule]
})
export class MsspHomePageModule { }
