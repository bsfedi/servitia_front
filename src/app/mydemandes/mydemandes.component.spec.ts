import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydemandesComponent } from './mydemandes.component';

describe('MydemandesComponent', () => {
  let component: MydemandesComponent;
  let fixture: ComponentFixture<MydemandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MydemandesComponent]
    });
    fixture = TestBed.createComponent(MydemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
