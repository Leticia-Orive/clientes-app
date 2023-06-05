import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCinesComponent } from './alta-cines.component';

describe('AltaCinesComponent', () => {
  let component: AltaCinesComponent;
  let fixture: ComponentFixture<AltaCinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaCinesComponent]
    });
    fixture = TestBed.createComponent(AltaCinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
