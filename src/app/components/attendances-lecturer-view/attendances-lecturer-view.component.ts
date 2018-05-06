import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceService } from '../../attendance.service';
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";

@Component({
  selector: 'app-attendances-lecturer-view',
  templateUrl: './attendances-lecturer-view.component.html',
  styleUrls: ['./attendances-lecturer-view.component.scss']
})
export class AttendancesLecturerViewComponent implements OnInit {
  WADTattendanceGroup$: Observable<any[]>;
  MWCattendanceGroup$: Observable<any[]>;
  readonly path = "attendances";
  item: Observable<any>;

  private itemDoc: AngularFirestoreDocument<any>;

  modalRef: BsModalRef;

  constructor(
    private attendanceService: AttendanceService,
    private modalService: BsModalService,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.WADTattendanceGroup$ = this.attendanceService.getCollection$(
      this.path,
      ref => ref.where("module", "==", "WADT")
    );

    this.MWCattendanceGroup$ = this.attendanceService.getCollection$(
      this.path,
      ref => ref.where("module", "==", "MWC")
    );
  }

  verify(id: string) {
    console.log("Processing" + id);
    this.itemDoc = this.afs.doc<any>(`attendances/${id}`);
    this.itemDoc.update({verified: true}).then(() => this.modalRef.hide());
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: "modal-sm"});
  }

  decline(): void {
    this.modalRef.hide();
  }

}
