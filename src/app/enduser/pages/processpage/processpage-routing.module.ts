import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcesspageComponent } from 'src/app/enduser/pages/processpage/processpage.component';

const routes: Routes = [{
  path : '',
  component : ProcesspageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcesspageRoutingModule { }
