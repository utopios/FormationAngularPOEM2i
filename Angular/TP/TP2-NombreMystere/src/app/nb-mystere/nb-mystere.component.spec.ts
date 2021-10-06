import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbMystereComponent } from './nb-mystere.component';

describe('NbMystereComponent', () => {
  let component: NbMystereComponent;
  let fixture: ComponentFixture<NbMystereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbMystereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbMystereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
