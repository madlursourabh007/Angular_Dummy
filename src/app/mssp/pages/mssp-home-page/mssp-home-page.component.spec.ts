import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsspHomePageComponent } from './mssp-home-page.component';

describe('MsspHomePageComponent', () => {
  let component: MsspHomePageComponent;
  let fixture: ComponentFixture<MsspHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsspHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsspHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
