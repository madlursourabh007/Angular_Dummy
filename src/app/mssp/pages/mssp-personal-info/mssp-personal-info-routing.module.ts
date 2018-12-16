import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsspPersonalInfoComponent } from 'src/app/mssp/pages/mssp-personal-info/mssp-personal-info.component';

const routes: Routes = [{
  path : "",
  component : MsspPersonalInfoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsspPersonalInfoRoutingModule { }
