import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurvaluesComponent } from 'src/app/enduser/pages/ourvalues/ourvalues.component';

const routes: Routes = [
  {
    path : '',
    component : OurvaluesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurvaluesRoutingModule { }
