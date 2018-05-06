import { Attendance } from './../../model/attendance.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AttendanceService } from "../../attendance.service";
import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-attendance-single-view',
  templateUrl: './attendance-single-view.component.html',
  styleUrls: ['./attendance-single-view.component.scss']
})
export class AttendanceSingleViewComponent implements OnInit {
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  attendanceForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private attendanceService: AttendanceService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    this.itemDoc = this.afs.doc<any>(`attendances/${id}`);
    this.item = this.itemDoc.valueChanges();

    this.attendanceForm = new FormGroup({
      radio1: new FormControl(),
      remark1: new FormControl(),
      radio2: new FormControl(),
      remark2: new FormControl(),
      radio3: new FormControl(),
      remark3: new FormControl(),
      radio4: new FormControl(),
      remark4: new FormControl()
    });

    this.attendanceForm.patchValue({
      radio1: "present",
      radio2: "present",
      radio3: "present",
      radio4: "present"
    });
  }

  updateStudentsAttendance() {
    // first get values from form
    const student1Attendance = this.attendanceForm.get("radio1").value;
    const student1Remark = this.attendanceForm.get("remark1").value;
    const student2Attendance = this.attendanceForm.get("radio2").value;
    const student2Remark = this.attendanceForm.get("remark2").value;
    const student3Attendance = this.attendanceForm.get("radio3").value;
    const student3Remark = this.attendanceForm.get("remark3").value;
    const student4Attendance = this.attendanceForm.get("radio4").value;
    const student4Remark = this.attendanceForm.get("remark4").value;

    this.itemDoc.set(
      {
        students: [
          {
            id: "DiICT(WBD)/06/16/0213",
            attendance: student1Attendance,
            name: "ABDUL ALIM BIN MUHAMMAD YAMIN",
            remark: student1Remark
          },
          {
            id: "DiICT(WBD)/06/16/0215",
            attendance: student2Attendance,
            name: "AMAL BATRISYIA BINTI JOSFERIDIN",
            remark: student2Remark
          },
          {
            id: "DiICT(WBD)/06/16/0217",
            attendance: student3Attendance,
            name: "AWG MOHD ADI ASQAWI BIN AWG ADANAN",
            remark: student3Remark
          },
          {
            id: "DiICT(WBD)/06/16/0216",
            attendance: student4Attendance,
            name: "AWANGKU MOHAMMAD DANIEL BIN PENGIRAN WAHAB",
            remark: student4Remark
          }
        ]
      },
      { merge: true }
    );

    this.router.navigate(["/attendances"]);
  }

}
