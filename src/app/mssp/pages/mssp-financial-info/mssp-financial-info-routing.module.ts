import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsspFinancialInfoComponent } from 'src/app/mssp/pages/mssp-financial-info/mssp-financial-info.component';

const routes: Routes = [{
  path : "",
  component : MsspFinancialInfoComponent,
  outlet : 'financial'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsspFinancialInfoRoutingModule { }
