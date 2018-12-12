import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurvaluesComponent } from './ourvalues.component';

describe('OurvaluesComponent', () => {
  let component: OurvaluesComponent;
  let fixture: ComponentFixture<OurvaluesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurvaluesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurvaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
