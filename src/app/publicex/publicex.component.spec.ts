import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicexComponent } from './publicex.component';

describe('PublicexComponent', () => {
  let component: PublicexComponent;
  let fixture: ComponentFixture<PublicexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicexComponent]
    });
    fixture = TestBed.createComponent(PublicexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
