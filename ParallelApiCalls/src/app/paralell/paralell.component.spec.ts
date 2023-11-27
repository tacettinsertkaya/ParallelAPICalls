import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalellComponent } from './paralell.component';

describe('ParalellComponent', () => {
  let component: ParalellComponent;
  let fixture: ComponentFixture<ParalellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParalellComponent]
    });
    fixture = TestBed.createComponent(ParalellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
