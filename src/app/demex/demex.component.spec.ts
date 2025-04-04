import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemexComponent } from './demex.component';

describe('DemexComponent', () => {
  let component: DemexComponent;
  let fixture: ComponentFixture<DemexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemexComponent]
    });
    fixture = TestBed.createComponent(DemexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
