import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponent } from './reports.component';

describe('ReportsComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportComponent]
    });
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
