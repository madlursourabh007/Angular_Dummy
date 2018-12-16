import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsspEducationalInfoComponent } from './mssp-educational-info.component';

describe('MsspEducationalInfoComponent', () => {
  let component: MsspEducationalInfoComponent;
  let fixture: ComponentFixture<MsspEducationalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsspEducationalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsspEducationalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
