import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemhebComponent } from './demheb.component';

describe('DemhebComponent', () => {
  let component: DemhebComponent;
  let fixture: ComponentFixture<DemhebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemhebComponent]
    });
    fixture = TestBed.createComponent(DemhebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
