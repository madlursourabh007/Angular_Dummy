import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsspAgreementCopyUploadComponent } from './mssp-agreement-copy-upload.component';

describe('MsspAgreementCopyUploadComponent', () => {
  let component: MsspAgreementCopyUploadComponent;
  let fixture: ComponentFixture<MsspAgreementCopyUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsspAgreementCopyUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsspAgreementCopyUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
