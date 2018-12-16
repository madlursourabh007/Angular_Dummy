import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsspFinancialInfoComponent } from './mssp-financial-info.component';

describe('MsspFinancialInfoComponent', () => {
  let component: MsspFinancialInfoComponent;
  let fixture: ComponentFixture<MsspFinancialInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsspFinancialInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsspFinancialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
