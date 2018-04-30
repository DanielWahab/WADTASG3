import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancesLecturerViewComponent } from './attendances-lecturer-view.component';

describe('AttendancesLecturerViewComponent', () => {
  let component: AttendancesLecturerViewComponent;
  let fixture: ComponentFixture<AttendancesLecturerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendancesLecturerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendancesLecturerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
