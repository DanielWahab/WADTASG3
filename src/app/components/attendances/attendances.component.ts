import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Attendance } from '../../model/attendance.model';
import { AttendanceService } from '../../attendance.service';


@Component({
  selector: 'app-attendances',
  templateUrl: './attendances.component.html',
  styleUrls: ['./attendances.component.scss']
})
export class AttendancesComponent implements OnInit {

  attendanceGroup$: Observable<Attendance[]>;
  readonly path = "attendances";

  constructor(private attendaceService: AttendanceService) { }

  ngOnInit() {
    this.attendanceGroup$ = this.attendaceService.getCollection$(
    this.path,
    ref => ref.orderBy("date", "asc")
    );
  }
}
