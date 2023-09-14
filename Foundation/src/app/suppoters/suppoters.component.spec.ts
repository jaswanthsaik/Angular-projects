import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppotersComponent } from './suppoters.component';

describe('SuppotersComponent', () => {
  let component: SuppotersComponent;
  let fixture: ComponentFixture<SuppotersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppotersComponent]
    });
    fixture = TestBed.createComponent(SuppotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
