import { Component, OnInit, TemplateRef } from '@angular/core';
// Below is needed to use bootstrap3 modal
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// Below for AngularFire2
import { Observable } from "rxjs/Observable";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public modalRef: BsModalRef;
  public items: Observable<any[]>;

  constructor(private modalService: BsModalService, db: AngularFirestore) {
    this.items = db.collection('/songList').valueChanges();
  }

  // The bootstrap3 modal logic - tutorial into implementing bootstrap3 and angular:
  // https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {}
}
