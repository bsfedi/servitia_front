import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdpOublComponent } from './mdp-oubl.component';

describe('MdpOublComponent', () => {
  let component: MdpOublComponent;
  let fixture: ComponentFixture<MdpOublComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdpOublComponent]
    });
    fixture = TestBed.createComponent(MdpOublComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
