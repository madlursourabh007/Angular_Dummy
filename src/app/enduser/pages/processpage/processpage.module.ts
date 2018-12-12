import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesspageRoutingModule } from './processpage-routing.module';
import { ProcesspageComponent } from './processpage.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProcesspageComponent],
  imports: [
    CommonModule,
    ProcesspageRoutingModule
  ],
  exports : [ReactiveFormsModule, ProcesspageRoutingModule]
})
export class ProcesspageModule { }
