import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculImpotsComponent } from './calcul-impots.component';

describe('CalculImpotsComponent', () => {
  let component: CalculImpotsComponent;
  let fixture: ComponentFixture<CalculImpotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculImpotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculImpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
