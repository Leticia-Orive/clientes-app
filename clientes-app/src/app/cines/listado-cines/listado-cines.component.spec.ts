import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCinesComponent } from './listado-cines.component';

describe('ListadoCinesComponent', () => {
  let component: ListadoCinesComponent;
  let fixture: ComponentFixture<ListadoCinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoCinesComponent]
    });
    fixture = TestBed.createComponent(ListadoCinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
