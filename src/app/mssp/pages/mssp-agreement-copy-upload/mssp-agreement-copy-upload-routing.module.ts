import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsspAgreementCopyUploadComponent } from 'src/app/mssp/pages/mssp-agreement-copy-upload/mssp-agreement-copy-upload.component';

const routes: Routes = [{
  path : "",
  component : MsspAgreementCopyUploadComponent,
  outlet : 'upload'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsspAgreementCopyUploadRoutingModule { }
