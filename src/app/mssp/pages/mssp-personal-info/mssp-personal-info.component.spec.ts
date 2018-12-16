import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsspPersonalInfoComponent } from './mssp-personal-info.component';

describe('MsspPersonalInfoComponent', () => {
  let component: MsspPersonalInfoComponent;
  let fixture: ComponentFixture<MsspPersonalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsspPersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsspPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
