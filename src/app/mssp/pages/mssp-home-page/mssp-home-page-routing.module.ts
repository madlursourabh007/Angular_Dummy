import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsspHomePageComponent } from 'src/app/mssp/pages/mssp-home-page/mssp-home-page.component';
import { MsspEducationalInfoComponent } from 'src/app/mssp/pages/mssp-educational-info/mssp-educational-info.component';
import { MsspPersonalInfoComponent } from 'src/app/mssp/pages/mssp-personal-info/mssp-personal-info.component';
import { MsspFinancialInfoComponent } from 'src/app/mssp/pages/mssp-financial-info/mssp-financial-info.component';

const routes: Routes = [{
  path : '',
  component : MsspHomePageComponent,
  children : [
    {
      path : 'educational_info',
      loadChildren : '../mssp-educational-info/mssp-educational-info.module#MsspEducationalInfoModule'
    },
    {
      path :  'personal_info',
      loadChildren : '../mssp-personal-info/mssp-personal-info.module#MsspPersonalInfoModule'
    },
    {
      path : 'financial_info',
      loadChildren : '../mssp-financial-info/mssp-financial-info.module#MsspFinancialInfoModule'
    },
    {
      path : 'agreement_copy_upload',
      loadChildren : '../mssp-agreement-copy-upload/mssp-agreement-copy-upload.module#MsspAgreementCopyUploadModule'
    },
    {
      path : '',
      loadChildren : '../mssp-personal-info/mssp-personal-info.module#MsspPersonalInfoModule'

    }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsspHomePageRoutingModule { }
