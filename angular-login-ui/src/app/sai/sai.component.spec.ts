import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiComponent } from './sai.component';

describe('SaiComponent', () => {
  let component: SaiComponent;
  let fixture: ComponentFixture<SaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaiComponent]
    });
    fixture = TestBed.createComponent(SaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
