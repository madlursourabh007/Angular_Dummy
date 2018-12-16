import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsspEducationalInfoComponent } from 'src/app/mssp/pages/mssp-educational-info/mssp-educational-info.component';

const routes: Routes = [{
  path : "",
  component : MsspEducationalInfoComponent,
  outlet : 'education'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsspEducationalInfoRoutingModule { }
