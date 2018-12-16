import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MsspAgreementCopyUploadRoutingModule } from './mssp-agreement-copy-upload-routing.module';
import { MsspAgreementCopyUploadComponent } from './mssp-agreement-copy-upload.component';

@NgModule({
  declarations: [MsspAgreementCopyUploadComponent],
  imports: [
    CommonModule,
    MsspAgreementCopyUploadRoutingModule
  ]
})
export class MsspAgreementCopyUploadModule { }
