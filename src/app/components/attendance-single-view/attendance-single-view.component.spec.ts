import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceSingleViewComponent } from './attendance-single-view.component';

describe('AttendanceSingleViewComponent', () => {
  let component: AttendanceSingleViewComponent;
  let fixture: ComponentFixture<AttendanceSingleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceSingleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceSingleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
